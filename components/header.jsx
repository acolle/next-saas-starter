'use client';

import React, { useState } from "react";

import Link from 'next/link';
import { LoaderPinwheel, Menu as MenuIcon, X } from 'lucide-react';

import { NavigationMenu, NavigationMenuItem, NavigationMenuList, NavigationMenuLink, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { Button } from '@/components/ui/button';

import { useUser } from '@/lib/auth';
import { siteInfo, siteNavigation } from '@/lib/site-config';


export function LandingPageHeader() {

  const { user } = useUser();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">

        {/* Site Logo */}
        <Link href="/" className="flex items-center">
          <LoaderPinwheel className="h-8 w-8 text-primary" />
          <span className="hidden md:block ml-2 text-xl font-semibold text-gray-900">{siteInfo.name}</span>
        </Link>
        
        <div className="flex items-center space-x-4">

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden sm:ml-6 sm:block">
            <NavigationMenuList className="flex space-x-4">
              {siteNavigation.map((item) => (
                <NavigationMenuItem key={item.name}>
                  <NavigationMenuLink
                    href={item.href}
                    className="text-sm font-medium text-gray-700 hover:text-gray-900"
                  >
                    {item.name}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}

              {/* TODO: Check if site is shipped with a dashboard */}
              <Button>
                <Link
                  href={user ? "/dashboard" : "/sign-up"}
                >
                  {user ? "Go to dashboard" : "Sign up"}
                </Link>
              </Button>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Mobile menu button */}
          <span
            className="sm:hidden p-2 text-gray-400"
            onClick={() => setMobileMenuOpen((prev) => !prev)} 
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? (
              <X aria-hidden="true" className="h-6 w-6" />
            ) : (
              <MenuIcon aria-hidden="true" className="h-6 w-6" />
            )}
          </span>          

        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="flex flex-col space-y-1 p-1 absolute right-0 z-10 -mt-4 w-56 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 transition sm:hidden">
          
          {siteNavigation.map((item) => (
            <Link 
              key={item.name}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-100"
            >
              {item.name}
            </Link>
          ))}
          <Link
            href={user ? "/dashboard" : "/sign-up"}
              className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-100"
          >
            {user ? "Go to dashboard" : "Sign up"}
          </Link>
        </div>
      )}

    </header>

  );

}