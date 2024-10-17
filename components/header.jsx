'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CircleIcon, Home, LogOut } from 'lucide-react';
import { useUser } from '@/lib/auth';

// Navigation data
import { siteNavigation } from '@/lib/site-config';


export function LandingPageHeader() {

  const { user, setUser } = useUser();

  return (
    <header className="border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">

        {/*  */}
        <Link href="/" className="flex items-center">
          <CircleIcon className="h-6 w-6 text-orange-500" />
          <span className="ml-2 text-xl font-semibold text-gray-900">ACME</span>
        </Link>

        <div className="flex items-center space-x-4">

          {/* TODO: Iterate over nav items */}
          {siteNavigation.map((item) => (
                <Link 
                key={item.name}
                href={item.href} 
                className="text-sm font-medium text-gray-700 hover:text-gray-900">
                  {item.name}
                </Link>
          ))}

          {/* TODO: Check if site is shipped with a dashboard */}
          {user ? (
            <Button
            asChild
            className="bg-black hover:bg-gray-800 text-white text-sm px-4 py-2 rounded-full"
          >
            <Link href="/dashboard">Go to dashboard</Link>
          </Button>
          ) : (
            <Button
              asChild
              className="bg-black hover:bg-gray-800 text-white text-sm px-4 py-2 rounded-full"
            >
              <Link href="/sign-up">Sign Up</Link>
            </Button>
          )}

        </div>
      </div>
    </header>
  );
}