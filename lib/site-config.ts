// **** **** ****
// Configuration file that contains all the navigation and content sections of the site and app.
// **** **** ****

// Dashboard navigation icons - Heroicons
// import {
//     FolderIcon,
//     HomeIcon,
//     MagnifyingGlassIcon,
//     UsersIcon,
//   } from "@heroicons/react/24/outline";

// **** **** ****
// Assets - Images and Icons
// **** **** ****

// Dashboard navigation icons - Lucide
import { Home, LineChart, Search, ShoppingCart, Users } from "lucide-react";

// TODO: Add new screenshots for dashboard features
// Primary Features Screenshots
import screenshotFeature1 from "@/public/screenshots/feature1.png";
import screenshotFeature2 from "@/public/screenshots/template.png";

// Secondary Features Screenshots
import screenshotContacts from "@/public/screenshots/contacts.png";
import screenshotInventory from "@/public/screenshots/inventory.png";
import screenshotProfitLoss from "@/public/screenshots/profit-loss.png";

// Testimonials Avatars
import avatarImage1 from "@/public/avatars/avatar-1.png";
import { interval } from "drizzle-orm/pg-core";
import { is } from "drizzle-orm";

// **** **** ****
// Site Info
// **** **** ****

// Metadata
export const siteInfo = {
  name: "Next.js SaaS Starter",
  owner: "Comayan Ltd",
  metadata: {
    title: {
      template: "%s | Next.js SaaS Starter",
      default: "Next.js SaaS Starter",
    },
    description: "Get started quickly with Next.js, Postgres, and Stripe.",
    keywords: "saas, starter-kit, boilerplate, bootstrap",
    robots: "index, follow",
    lang: "en",
    metadataBase: new URL(process.env.BASE_URL || "https://localhost:3000"),
    openGraph: {
      title: "Next.js SaaS Starter",
      description: "Get started quickly with Next.js, Postgres, and Stripe.",
      url: process.env.BASE_URL || "https://localhost:3000",
      siteName: "Next.js SaaS Starter",
      images: [
        {
          url: "/img/logo.svg",
          width: 800,
          height: 600,
          alt: "My SaaS logo",
        },
        {
          url: "/img/logo.svg",
          width: 1800,
          height: 1600,
          alt: "My SaaS logo",
        },
      ],
      locale: "en_EN",
      type: "website",
    },
  },
};

// **** **** ****
// Landing Page
// **** **** ****

// Navbar
export const siteNavigation = [
  { name: "Features", href: "#features" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Pricing", href: "#pricing" },
];

// Hero
export const heroInfo = {
  tagline: "Blazing fast **SaaS boilerplate** for Next.js",
  subTagline:
    "Get started quickly with Next.js, Postgres, and Stripe. The best way to launch your SaaS and find market fit for your business.",
  svgPath:
    "M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z",
  highlightColor: "text-blue-600",
  underlineColor: "fill-blue-300/70",
};

// Primary Features
export const features = {
  tagline: "Primary Features",
  ariaLabel: "Primary Features",
  subTagline:
    "This is where you show the primary features of your app. You can describe them in detail here.",
  items: [
    {
      name: "Feature 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: screenshotFeature1
    },
    {
      name: "Feature 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: screenshotFeature2,
    },
    {
      name: "Feature 3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: screenshotFeature1,
    },
    {
      name: "Feature 4",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: screenshotFeature1,
    },
  ],
};

// Secondary Features
export const secondaryFeatures = {
  tagline: "Secondary Features",
  ariaLabel: "Primary Features",
  subTagline:
    "This is where you show the secondary features of the app. You can describe them in detail here.",
  items: [
    {
      name: "Feature 1",
      tagline: "Tagline for Feature 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: screenshotProfitLoss,
      icon: "reporting",
    },
    {
      name: "Feature 2",
      tagline: "Tagline for Feature 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: screenshotInventory,
      icon: "inventory",
    },
    {
      name: "Feature 3",
      tagline: "Tagline for Feature 3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: screenshotContacts,
      icon: "contact",
    },
  ],
};

// Pricing
export const pricingPlans = {
  tagline: "Simple pricing, for everyone.",
  ariaLabel: "Pricing plans for the app",
  subTagline: "This is where you show the pricing of the app. You can describe it in detail here.",
  svgPath: "M240.172 22.994c-8.007 1.246-15.477 2.23-31.26 4.114-18.506 2.21-26.323 2.977-34.487 3.386-2.971.149-3.727.324-6.566 1.523-15.124 6.388-43.775 9.404-69.425 7.31-26.207-2.14-50.986-7.103-78-15.624C10.912 20.7.988 16.143.734 14.657c-.066-.381.043-.344 1.324.456 10.423 6.506 49.649 16.322 77.8 19.468 23.708 2.65 38.249 2.95 55.821 1.156 9.407-.962 24.451-3.773 25.101-4.692.074-.104.053-.155-.058-.135-1.062.195-13.863-.271-18.848-.687-16.681-1.389-28.722-4.345-38.142-9.364-15.294-8.15-7.298-19.232 14.802-20.514 16.095-.934 32.793 1.517 47.423 6.96 13.524 5.033 17.942 12.326 11.463 18.922l-.859.874.697-.006c2.681-.026 15.304-1.302 29.208-2.953 25.845-3.07 35.659-4.519 54.027-7.978 9.863-1.858 11.021-2.048 13.055-2.145a61.901 61.901 0 0 0 4.506-.417c1.891-.259 2.151-.267 1.543-.047-.402.145-2.33.913-4.285 1.707-4.635 1.882-5.202 2.07-8.736 2.903-3.414.805-19.773 3.797-26.404 4.829Zm40.321-9.93c.1-.066.231-.085.29-.041.059.043-.024.096-.183.119-.177.024-.219-.007-.107-.079ZM172.299 26.22c9.364-6.058 5.161-12.039-12.304-17.51-11.656-3.653-23.145-5.47-35.243-5.576-22.552-.198-33.577 7.462-21.321 14.814 12.012 7.205 32.994 10.557 61.531 9.831 4.563-.116 5.372-.288 7.337-1.559Z",
  items: [
    {
      name: "Starter",
      price: 9,
      description:
        "Good for anyone who is self-employed and just getting started.",
      href: "/sign-up",
      features: [
        "Send 10 quotes and invoices",
        "Connect up to 2 bank accounts",
        "Track up to 15 expenses per month",
        "Manual payroll support",
        "Export up to 3 reports",
      ],
      stripeConfig: {
        price: 900, // in cents
        currency: 'usd',
        isRecurring: true,
        interval: 'month'
      }
    },
    {
      featured: true,
      name: "Small business",
      price: 15,
      description: "Perfect for small / medium sized businesses.",
      href: "/sign-up",
      features: [
        "Send 25 quotes and invoices",
        "Connect up to 5 bank accounts",
        "Track up to 50 expenses per month",
        "Automated payroll support",
        "Export up to 12 reports",
        "Bulk reconcile transactions",
        "Track in multiple currencies",
      ],
      stripeConfig: {
        price: 1500,
        currency: 'usd',
        isRecurring: true,
        interval: 'month'
      }
    },
    {
      name: "Enterprise",
      price: 39,
      description: "For even the biggest enterprise companies.",
      href: "/sign-up",
      features: [
        "Send unlimited quotes and invoices",
        "Connect up to 15 bank accounts",
        "Track up to 200 expenses per month",
        "Automated payroll support",
        "Export up to 25 reports, including TPS",
      ],
      stripeConfig: {
        price: 3900,
        currency: 'usd',
        isRecurring: true,
        interval: 'month'
      }
    }
  ],
};

// Testimonials
export const testimonials = {
  tagline: "Loved by Businesses Worldwide.",
  subTagline: "This is where you show the testimonials of your customers. You can describe them in detail here.",
  items: [
    [
      {
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        author: {
          name: "Sylverster Stallone",
          role: "Found of Rambo Ltd.",
          image: avatarImage1,
        },
      }
    ],
    [
      {
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        author: {
          name: "Jean-Claure Van Damme",
          role: "Founder of Cyborg Inc.",
          image: avatarImage1,
        },
      }
    ],
    [
      {
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        author: {
          name: "Vin Diesel",
          role: "Founder of Pitch Black",
          image: avatarImage1,
        },
      }
    ],
  ],
};

// Frequently Asked Questions
export const faqs = {
  tagline: "Frequently Asked Questions",
  subTagline:
    "This is where you show the frequently asked questions of your customers. You can describe them in detail here.",
  items: [
    {
      question: "Question 1",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      question: "Question 2",
      answer: 
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      question: "Question 3",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      question: "Question 4",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      question: "Question 5",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      question: "Question 6",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    }     
  ],
};

// **** **** ****
// Admin Dashboard
// **** **** ****

// Dashboard Navigation
export const dashboardNavigation = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: Home,
    current: true,
  },
  {
    name: "Search",
    href: "/dashboard/search",
    icon: Search,
    current: false,
  },
  {
    name: "Publications",
    href: "/dashboard/publications",
    icon: ShoppingCart,
    current: false,
  },
  {
    name: "Alerts",
    href: "/dashboard/alerts",
    icon: LineChart,
    current: false,
  },
  {
    name: "Team",
    href: "/dashboard/teams",
    icon: Users,
    current: false,
  },
];

//
export const teams = [
  { id: 1, name: "Heroicons", href: "#", initial: "H", current: false },
  { id: 2, name: "Tailwind Labs", href: "#", initial: "T", current: false },
  { id: 3, name: "Workcation", href: "#", initial: "W", current: false },
];

// Navigation User Account Dropdown
export const userNavigation = [
  { type: "label", name: "My Account", href: "/account" },
  { type: "separator" },
  { type: "item", name: "Settings", href: "/settings" },
  { type: "item", name: "Support", href: "/support" },
  { type: "separator" },
  { type: "item", name: "Sign out", action: "signout", redirectTo: "/login" },
];
