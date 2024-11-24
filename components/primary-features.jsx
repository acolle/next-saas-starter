'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

import { Container } from '@/components/container';
import { features } from '@/lib/site-config';


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

  const [selectedTab, setSelectedTab] = useState(0);

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

        <div
          className={`mt-16 grid grid-cols-1 items-center gap-y-2 pt-10 sm:gap-y-6 md:mt-20 lg:grid-cols-12 lg:pt-0 ${tabOrientation === 'vertical' ? 'lg:grid-cols-12' : ''
            }`}
        >
          {/* Tab List */}
          <div className="-mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:overflow-visible sm:pb-0 lg:col-span-5">
            <div className="relative z-10 flex gap-x-4 whitespace-nowrap px-4 sm:mx-auto sm:px-0 lg:mx-0 lg:block lg:gap-x-0 lg:gap-y-1 lg:whitespace-normal">
              {features.items.map((feature, index) => (
                <div
                  key={feature.name}
                  className={`group relative rounded-md px-4 py-1 lg:rounded-l-xl lg:rounded-r-none lg:p-6 ${selectedTab === index
                    ? 'bg-white lg:bg-white/10 lg:ring-1 lg:ring-inset lg:ring-white/10'
                    : 'hover:bg-white/10 lg:hover:bg-white/5'
                    }`}
                  onClick={() => setSelectedTab(index)}
                >
                  <h3 className="font-display text-lg focus:outline-none cursor-pointer">
                    <span
                      className={`absolute inset-0 rounded-md lg:rounded-l-xl lg:rounded-r-none`}
                    />
                    <span
                      className={`${selectedTab === index
                        ? 'text-blue-600 lg:text-white'
                        : 'text-blue-100 hover:text-white lg:text-white'
                        }`}
                    >
                      {feature.name}
                    </span>
                  </h3>
                  <p
                    className={`mt-2 hidden text-sm lg:block ${selectedTab === index
                      ? 'text-white'
                      : 'text-blue-100 group-hover:text-white'
                      }`}
                  >
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Tab Panels */}
          <div className="lg:col-span-7">
            {features.items.map((feature, index) => (
              <div
                key={feature.name}
                className={`${selectedTab === index ? 'block' : 'hidden'
                  }`}
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
                    alt={`${feature.name} feature screenshot`}
                    priority={selectedTab === index}
                    sizes="(min-width: 1024px) 67.8125rem, (min-width: 640px) 100vw, 45rem"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      </Container>
    </section>
  )
}
