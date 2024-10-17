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

// TODO: Rename assets to make them agnostic (1,2,3,etc..)
// App Primary Features Screenshots
import screenshotExpenses from "@/public/screenshots/expenses.png";
import screenshotPayroll from "@/public/screenshots/payroll.png";
import screenshotReporting from "@/public/screenshots/reporting.png";
import screenshotVatReturns from "@/public/screenshots/vat-returns.png";

// App Secondary Features Screenshots
import screenshotContacts from "@/public/screenshots/contacts.png";
import screenshotInventory from "@/public/screenshots/inventory.png";
import screenshotProfitLoss from "@/public/screenshots/profit-loss.png";

// Testimonials Avatars
import avatarImage1 from "@/public/avatars/avatar-1.png";
import avatarImage2 from "@/public/avatars/avatar-2.png";
import avatarImage3 from "@/public/avatars/avatar-3.png";
import avatarImage4 from "@/public/avatars/avatar-4.png";
import avatarImage5 from "@/public/avatars/avatar-5.png";

// **** **** ****
// App General Info
// **** **** ****
export const siteInfo = {
  name: "Next.js SaaS Starter",
  metadata: {
    title: {
      template: "%s | Next.js SaaS Starter",
      default: "Next.js SaaS Starter",
    },
    description: "Get started quickly with Next.js, Postgres, and Stripe.",
    keywords: "bookkepping, accounting, saas, reporting",
    robots: "index, follow",
    metadataBase: new URL("https://localhost:3000"),
    openGraph: {
      title: "Next.js SaaS Starter",
      description: "Get started quickly with Next.js, Postgres, and Stripe.",
      url: "https://localhost:3000",
      siteName: "Next.js SaaS Starter",
      images: [
        {
          url: "/img/logo.svg",
          width: 800,
          height: 600,
          alt: "Product logo",
        },
        {
          url: "/img/logo.svg",
          width: 1800,
          height: 1600,
          alt: "Product logo",
        },
      ],
      locale: "en_EN",
      type: "website",
    },
  },
};


// **** **** ****
// Navigation Sections
// **** **** ****

// Navigation Header
export const siteNavigation = [
  { name: "Features", href: "#features", current: true },
  { name: "Testimonials", href: "#testimonials", current: false },
  { name: "Pricing", href: "pricing", current: false },
];

// Navigation Dashboard
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


// **** **** ****
// Site Content
// **** **** ****

// App Primary Features
export const features = {
  tagline: "Everything you Need to Run your Books.",
  ariaLabel: "Features for running your books",
  subTagline:
    "Well everything you need if you aren’t that picky about minor details like tax compliance.",
  items: [
    {
      title: "Payroll",
      description:
        "Keep track of everyone's salaries and whether or not they've been paid. Direct deposit not supported.",
      image: screenshotPayroll,
    },
    {
      title: "Claim expenses",
      description:
        "All of your receipts organized into one place, as long as you don't mind typing in the data by hand.",
      image: screenshotExpenses,
    },
    {
      title: "VAT handling",
      description:
        "We only sell our software to companies who don't deal with VAT at all, so technically we do all the VAT stuff they need.",
      image: screenshotVatReturns,
    },
    {
      title: "Reporting",
      description:
        "Easily export your data into an Excel spreadsheet where you can do whatever the hell you want with it.",
      image: screenshotReporting,
    },
  ],
};

// App Secondary Features
export const secondaryFeatures = {
  tagline: "Simplify Everyday Business Tasks.",
  subTagline:
    "Because you’d probably be a little confused if we suggested you complicate your everyday business tasks instead.",
  items: [
    {
      name: "Reporting",
      summary:
        "Stay on top of things with always up-to-date reporting features.",
      description:
        "We talked about reporting in the section above but we needed three items here, so mentioning it one more time for posterity.",
      image: screenshotProfitLoss,
      icon: "reporting",
    },
    {
      name: "Inventory",
      summary:
        "Never lose track of what’s in stock with accurate inventory tracking.",
      description:
        "We don’t offer this as part of our software but that statement is inarguably true. Accurate inventory tracking would help you for sure.",
      image: screenshotInventory,
      icon: "inventory",
    },
    {
      name: "Contacts",
      summary:
        "Organize all of your contacts, service providers, and invoices in one place.",
      description:
        "This also isn’t actually a feature, it’s just some friendly advice. We definitely recommend that you do this, you’ll feel really organized and professional.",
      image: screenshotContacts,
      icon: "contact",
    },
  ],
};

// Testimonials
export const testimonials = {
  tagline: "Loved by Businesses Worldwide.",
  subTagline:
    "Because you’d probably be a little confused if we suggested you complicate your everyday business tasks instead.",
  items: [
    [
      {
        content:
          "TaxPal is so easy to use I can’t help but wonder if it’s really doing the things the government expects me to do.",
        author: {
          name: "Sheryl Berge",
          role: "CEO at Lynch LLC",
          image: avatarImage1,
        },
      },
      {
        content:
          "I’m trying to get a hold of someone in support, I’m in a lot of trouble right now and they are saying it has something to do with my books. Please get back to me right away.",
        author: {
          name: "Amy Hahn",
          role: "Director at Velocity Industries",
          image: avatarImage4,
        },
      },
    ],
    [
      {
        content:
          "The best part about TaxPal is every time I pay my employees, my bank balance doesn’t go down like it used to. Looking forward to spending this extra cash when I figure out why my card is being declined.",
        author: {
          name: "Leland Kiehn",
          role: "Founder of Kiehn and Sons",
          image: avatarImage5,
        },
      },
      {
        content:
          "There are so many things I had to do with my old software that I just don’t do at all with TaxPal. Suspicious but I can’t say I don’t love it.",
        author: {
          name: "Erin Powlowski",
          role: "COO at Armstrong Inc",
          image: avatarImage2,
        },
      },
    ],
    [
      {
        content:
          "I used to have to remit tax to the EU and with TaxPal I somehow don’t have to do that anymore. Nervous to travel there now though.",
        author: {
          name: "Peter Renolds",
          role: "Founder of West Inc",
          image: avatarImage3,
        },
      },
      {
        content:
          "This is the fourth email I’ve sent to your support team. I am literally being held in jail for tax fraud. Please answer your damn emails, this is important.",
        author: {
          name: "Amy Hahn",
          role: "Director at Velocity Industries",
          image: avatarImage4,
        },
      },
    ],
  ],
};

// Frequently Asked Questions
export const faqs = {
  tagline: "Frequently Asked Questions",
  subTagline:
    "If you can’t find what you’re looking for, email our support team and if you’re lucky someone will get back to you.",
  items: [
    [
      {
        question: "Does TaxPal handle VAT?",
        answer:
          "Well no, but if you move your company offshore you can probably ignore it.",
      },
      {
        question: "Can I pay for my subscription via purchase order?",
        answer: "Absolutely, we are happy to take your money in all forms.",
      },
      {
        question: "How do I apply for a job at TaxPal?",
        answer:
          "We only hire our customers, so subscribe for a minimum of 6 months and then let’s talk.",
      },
    ],
    [
      {
        question: "What was that testimonial about tax fraud all about?",
        answer:
          "TaxPal is just a software application, ultimately your books are your responsibility.",
      },
      {
        question:
          "TaxPal sounds horrible but why do I still feel compelled to purchase?",
        answer:
          "This is the power of excellent visual design. You just can’t resist it, no matter how poorly it actually functions.",
      },
      {
        question:
          "I found other companies called TaxPal, are you sure you can use this name?",
        answer:
          "Honestly not sure at all. We haven’t actually incorporated or anything, we just thought it sounded cool and made this website.",
      },
    ],
    [
      {
        question: "How do you generate reports?",
        answer:
          "You just tell us what data you need a report for, and we get our kids to create beautiful charts for you using only the finest crayons.",
      },
      {
        question: "Can we expect more inventory features?",
        answer: "In life it’s really better to never expect anything at all.",
      },
      {
        question: "I lost my password, how do I get into my account?",
        answer:
          "Send us an email and we will send you a copy of our latest password spreadsheet so you can find your information.",
      },
    ],
  ],
};
