import React from 'react';
import Image from 'next/image';
import { cn } from "@/lib/utils";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";


export default function FeatureTabs({ features, tabOrientation = 'horizontal' }) {
  return (
    <Tabs
      defaultValue={features.items[0].title}
      orientation={tabOrientation === 'vertical' ? 'vertical' : 'horizontal'}
      className="mt-16 grid grid-cols-1 items-center gap-y-2 pt-10 sm:gap-y-6 md:mt-20 lg:grid-cols-12 lg:pt-0"
    >
      <div className="-mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:overflow-visible sm:pb-0 lg:col-span-5">
        <TabsList className="relative z-10 flex h-auto flex-col gap-x-4 whitespace-nowrap px-4 sm:mx-auto sm:px-0 lg:mx-0 lg:block lg:gap-x-0 lg:gap-y-1 lg:whitespace-normal">
          {features.items.map((feature) => (
            <TabsTrigger
              key={feature.title}
              value={feature.title}
              className={cn(
                "group relative w-full rounded-md px-4 py-1 lg:rounded-l-xl lg:rounded-r-none lg:p-6 data-[state=active]:bg-white data-[state=active]:text-blue-600 lg:data-[state=active]:bg-white/10 lg:data-[state=active]:ring-1 lg:data-[state=active]:ring-inset lg:data-[state=active]:ring-white/10 hover:bg-white/10 lg:hover:bg-white/5",
                "text-left font-display text-lg [&:not(:focus-visible)]:focus:outline-none",
                "data-[state=inactive]:text-blue-100 data-[state=inactive]:hover:text-white lg:text-white"
              )}
            >
              <h3>{feature.title}</h3>
              <p
                className={cn(
                  "mt-2 hidden text-sm lg:block",
                  "data-[state=active]:text-white",
                  "data-[state=inactive]:text-blue-100 group-hover:text-white"
                )}
              >
                {feature.description}
              </p>
            </TabsTrigger>
          ))}
        </TabsList>
      </div>

      <div className="lg:col-span-7">
        {features.items.map((feature) => (
          <TabsContent
            key={feature.title}
            value={feature.title}
            className="mt-0"
          >
            <div className="relative sm:px-6 lg:hidden">
              <div className="absolute -inset-x-4 bottom-[-4.25rem] top-[-6.5rem] bg-white/10 ring-1 ring-inset ring-white/10 sm:inset-x-0 sm:rounded-t-xl" />
              <p className="relative mx-auto max-w-2xl text-base text-white sm:text-center">
                {feature.description}
              </p>
            </div>
            <div className="mt-10 w-[45rem] overflow-hidden rounded-xl bg-slate-50 shadow-xl shadow-blue-900/20 sm:w-auto lg:mt-0 lg:w-[67.8125rem]">
              <Image
                className="w-full"
                src={feature.image}
                alt=""
                priority
                sizes="(min-width: 1024px) 67.8125rem, (min-width: 640px) 100vw, 45rem"
              />
            </div>
          </TabsContent>
        ))}
      </div>
    </Tabs>
  );
}