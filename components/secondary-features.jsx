'use client';

import { useState } from 'react';

import Image from 'next/image';
import clsx from 'clsx';

import { Container } from '@/components/container'
import { generateSvgPath } from '@/components/path-generator';
import { secondaryFeatures } from '@/lib/site-config';


function Feature({ feature, isActive, className, ...props }) {
  return (
    <div
      className={clsx(className, !isActive && 'opacity-75 hover:opacity-100')}
      {...props}
    >
      <div
        className={clsx(
          'w-9 rounded-md',
          isActive ? 'bg-blue-600' : 'bg-slate-500'
        )}
      >
        <svg aria-hidden="true" className="h-9 w-9" fill="none">
          {generateSvgPath(feature.icon)}
        </svg>
      </div>
      
      <h3
        className={clsx(
          'mt-6 text-sm font-medium',
          isActive ? 'text-blue-600' : 'text-slate-600'
        )}
      >
        {feature.name}
      </h3>
      <p className="mt-2 font-display text-xl text-slate-900">
        {feature.summary}
      </p>
      <p className="mt-4 text-sm text-slate-600">{feature.description}</p>
    </div>
  )
}

function FeaturesMobile() {
  return (
    <div className="-mx-4 mt-20 flex flex-col gap-y-10 overflow-hidden px-4 sm:-mx-6 sm:px-6 lg:hidden">
      {secondaryFeatures.items.map((feature) => (
        <div key={feature.name}>
          <Feature feature={feature} className="mx-auto max-w-2xl" isActive />
          <div className="relative mt-10 pb-10">
            <div className="absolute -inset-x-4 bottom-0 top-8 bg-slate-200 sm:-inset-x-6" />
            <div className="relative mx-auto w-[52.75rem] overflow-hidden rounded-xl bg-white shadow-lg shadow-slate-900/5 ring-1 ring-slate-500/10">
              <Image
                className="w-full"
                src={feature.image}
                alt=""
                sizes="52.75rem"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

function FeaturesDesktop() {

  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div className="hidden lg:mt-20 lg:block">
      
      {/* Tab List */}
      <div className="grid grid-cols-3 gap-x-8">
        {secondaryFeatures.items.map((feature, featureIndex) => (
          <Feature
            key={feature.name}
            feature={{
              ...feature,
              name: (
                <div className="focus:outline-none">
                  <span className="absolute inset-0" />
                  {feature.name}
                </div>
              ),
            }}
            isActive={featureIndex === selectedTab}
            className="relative"
            onClick={() => setSelectedTab(featureIndex)}
          />
        ))}
      </div>

      {/* Tab Panels */}
      <div className="relative mt-20 overflow-hidden rounded-4xl bg-slate-200 px-14 py-16 xl:px-16">
        <div className="-mx-5 flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${selectedTab * 72}%)` }}>
          {secondaryFeatures.items.map((feature, featureIndex) => (
            <div
              key={feature.name}
              className={`px-5 ${featureIndex !== selectedTab ? 'opacity-60' : ''}`}
              aria-hidden={featureIndex !== selectedTab}
            >
              <div className="w-[52.75rem] overflow-hidden rounded-xl bg-white shadow-lg shadow-slate-900/5 ring-1 ring-slate-500/10">
                <Image
                  className="w-full"
                  src={feature.image}
                  alt={`${feature.name} feature screenshot`}
                  sizes="52.75rem"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Decorative border */}
        <div className="pointer-events-none absolute inset-0 rounded-4xl ring-1 ring-inset ring-slate-900/10" />
      </div>
    </div>
  )
  
}

export function SecondaryFeatures() {
  return (
    <section
      id="secondary-features"
      aria-label={secondaryFeatures.ariaLabel}
      className="pb-14 pt-20 sm:pb-20 sm:pt-32 lg:pb-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            {secondaryFeatures.tagline}
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            {secondaryFeatures.subTagline}
          </p>
        </div>
        <FeaturesMobile />
        <FeaturesDesktop />
      </Container>
    </section>
  )
}