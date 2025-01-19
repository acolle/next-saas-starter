import { stripe } from '../payments/stripe';
import { db } from './drizzle';
import { users, teams, teamMembers } from './schema';
import { hashPassword } from '@/lib/auth/session';

import { pricingPlans } from '@/lib/site-config';


async function createStripeProducts() {

  console.log('Creating Stripe products and prices...');

  pricingPlans.items.forEach(async (plan) => {

    // Check if plan has Stripe configuration
    if (!plan.stripeConfig) {
      console.error(`Missing Stripe configuration for plan: ${plan.name}`);
      return;
    }

    // Retrieve all products and filter by name
    const allProducts = await stripe.products.list({
      limit: 100,
      active: true,
    });

    const existingProduct = allProducts.data.find(product => product.name === plan.name);

    // Check if product already exists
    if (existingProduct) {
      console.log(`Product already exists: ${existingProduct.name}`);
      return;
    }

    // Create new product
    const product = await stripe.products.create({
      name: plan.name,
      description: plan.description
    });

    // Create new price
    const priceData: any = {
      product: product.id,
      unit_amount: plan.stripeConfig.price,
      currency: plan.stripeConfig.currency,
    };

    // Add recurring object if price is recurring
    if (plan.stripeConfig.isRecurring) {
      priceData.recurring = {
        interval: plan.stripeConfig.interval,
      };
    }

    await stripe.prices.create(priceData);

  });

  console.log('Stripe products and prices created successfully.');
}

// Seed function
async function seed() {

  // Default user
  const email = 'test@test.com';
  const password = 'admin123';
  const passwordHash = await hashPassword(password);

  const [user] = await db
    .insert(users)
    .values([
      {
        email: email,
        passwordHash: passwordHash
      },
    ])
    .returning();

  console.log('Initial user created.');

  const [team] = await db
    .insert(teams)
    .values({
      name: 'Test Team',
    })
    .returning();

  await db.insert(teamMembers).values({
    teamId: team.id,
    userId: user.id,
    role: 'owner',
  });

  await createStripeProducts();
  
}

seed()
  .catch((error) => {
    console.error('Seed process failed:', error);
    process.exit(1);
  })
  .finally(() => {
    console.log('Seed process finished. Exiting...');
    process.exit(0);
  });
