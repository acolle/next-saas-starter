'use client';

import { ArrowRight } from "lucide-react";
import { Button } from '@/components/ui/button';
import { Terminal } from '@/components/terminal';

export function SimpleHero() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <h1 className="text-4xl font-bold text-gray-900 tracking-tight sm:text-5xl md:text-6xl">
              Build Your SaaS
              <span className="block text-orange-500">
                Faster Than Ever
              </span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
              Launch your SaaS product in record time with our powerful,
              ready-to-use template. Packed with modern technologies and
              essential integrations.
            </p>
            <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
              <a
                href="https://vercel.com/templates/next.js/next-js-saas-starter"
                target="_blank"
              >
                <Button className="bg-white hover:bg-gray-100 text-black border border-gray-200 rounded-md text-lg px-8 py-4 inline-flex items-center justify-center">
                  Deploy your own
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>
          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <Terminal />
          </div>
        </div>
      </div>
    </section>
  )
}
