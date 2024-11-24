'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import clsx from 'clsx';

import { Container } from '@/components/container';
import backgroundImage from '@/public/background-features.jpg';
import { features } from '@/lib/site-config';
import { cn } from "@/lib/utils";


export function PrimaryFeatures() {

  let [tabOrientation, setTabOrientation] = useState('horizontal')

  useEffect(() => {
    let lgMediaQuery = window.matchMedia('(min-width: 1024px)')

    function onMediaQueryChange({ matches }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(lgMediaQuery)
    lgMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      lgMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  return (
    <section
      id="features"
      aria-label={features.ariaLabel}
      className="relative overflow-hidden pb-28 pt-20 sm:py-32 bg-gradient-to-tr from-primary from-10% via-sky-500 via-30% to-primary to-90%"
    >
      <Container className="relative">

        <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl md:text-5xl">
            {features.tagline}
          </h2>
          <p className="mt-6 text-lg tracking-tight text-blue-100">
            {features.subTagline}
          </p>
        </div>

        {/* TODO: Shadcn UI Refactoring */}
        {/* <Tabs
          defaultValue={features.items[0].name}
          orientation={tabOrientation === 'vertical' ? 'vertical' : 'horizontal'}
          className="mt-16 grid grid-cols-1 items-center gap-y-2 pt-10 sm:gap-y-6 md:mt-20 lg:grid-cols-12 lg:pt-0"
        >
          <div className="-mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:overflow-visible sm:pb-0 lg:col-span-5">
            <TabsList className="relative z-10 flex gap-x-4 whitespace-nowrap px-4 sm:mx-auto sm:px-0 lg:mx-0 lg:block lg:gap-x-0 lg:gap-y-1 lg:whitespace-normal">
              {features.items.map((feature) => (
                <div
                  key={feature.name}
                  className="group relative rounded-md lg:rounded-l-xl lg:rounded-r-none lg:p-6"
                >
                  <TabsTrigger
                    value={feature.name}
                    className={cn(
                      "font-display text-lg data-[state=active]:text-blue-600 data-[state=active]:lg:text-white",
                      "text-blue-100 hover:text-white lg:text-white",
                      "w-full text-left"
                    )}
                  >
                    <span className="absolute inset-0 rounded-md lg:rounded-l-xl lg:rounded-r-none" />
                    {feature.name}
                  </TabsTrigger>
                  <p className="mt-2 hidden text-sm lg:block group-data-[state=active]:text-white text-blue-100 group-hover:text-white">
                    {feature.description}
                  </p>
                </div>
              ))}
            </TabsList>
          </div>

          <div className="lg:col-span-7">
            {features.items.map((feature) => (
              <TabsContent key={feature.name} value={feature.name}>
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
        </Tabs> */}

        {/* HeadlessUI */}
        <TabGroup
          as="div"
          className="mt-16 grid grid-cols-1 items-center gap-y-2 pt-10 sm:gap-y-6 md:mt-20 lg:grid-cols-12 lg:pt-0"
          vertical={tabOrientation === 'vertical'}
        >
          {({ selectedIndex }) => (
            <>
              <div className="-mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:overflow-visible sm:pb-0 lg:col-span-5">
                <TabList className="relative z-10 flex gap-x-4 whitespace-nowrap px-4 sm:mx-auto sm:px-0 lg:mx-0 lg:block lg:gap-x-0 lg:gap-y-1 lg:whitespace-normal">
                  {features.items.map((feature, featureIndex) => (
                    <div
                      key={feature.name}
                      className={clsx(
                        'group relative rounded-md px-4 py-1 lg:rounded-l-xl lg:rounded-r-none lg:p-6',
                        selectedIndex === featureIndex
                          ? 'bg-white lg:bg-white/10 lg:ring-1 lg:ring-inset lg:ring-white/10'
                          : 'hover:bg-white/10 lg:hover:bg-white/5'
                      )}
                    >
                      <h3>
                        <Tab
                          className={clsx(
                            'font-display text-lg focus:outline-none',
                            selectedIndex === featureIndex
                              ? 'text-blue-600 lg:text-white'
                              : 'text-blue-100 hover:text-white lg:text-white'
                          )}
                        >
                          <span className="absolute inset-0 rounded-md lg:rounded-l-xl lg:rounded-r-none" />
                          {feature.name}
                        </Tab>
                      </h3>
                      <p
                        className={clsx(
                          'mt-2 hidden text-sm lg:block',
                          selectedIndex === featureIndex
                            ? 'text-white'
                            : 'text-blue-100 group-hover:text-white'
                        )}
                      >
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </TabList>
              </div>
              <TabPanels className="lg:col-span-7">
                {features.items.map((feature) => (
                  <TabPanel key={feature.name} unmount={false}>
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
                  </TabPanel>
                ))}
              </TabPanels>
            </>
          )}
        </TabGroup>

      </Container>
    </section>
  )
}
