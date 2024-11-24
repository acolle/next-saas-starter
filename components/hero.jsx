'use client';

import Image from 'next/image'
import Link from 'next/link';

import { Button } from '@/components/ui/button'
import { Container } from '@/components/container'
import HighlightedText from '@/components/highlighted-text'

import logoLaravel from '@/public/logos/laravel.svg'
import logoMirage from '@/public/logos/mirage.svg'
import logoStatamic from '@/public/logos/statamic.svg'
import logoStaticKit from '@/public/logos/statickit.svg'
import logoTransistor from '@/public/logos/transistor.svg'
import logoTuple from '@/public/logos/tuple.svg'

import { useUser } from '@/lib/auth';
import { heroInfo } from '@/lib/site-config'

export function Hero() {

  const { user } = useUser();

  return (
    <Container className="pb-16 pt-20 text-center lg:pt-32">
      <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">

        <HighlightedText
          text={heroInfo.tagline}
          svgPath={heroInfo.svgPath}
          highlightColor={heroInfo.highlightColor}
          underlineColor={heroInfo.underlineColor}
        />

      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700">
        {heroInfo.subTagline}
      </p>
      <div className="mt-10 flex justify-center gap-x-6">
        <Button>
          <Link
            href={user ? "/dashboard" : "/sign-up"}
          >
            Get started
          </Link>
        </Button>
      </div>

      {/* TODO: Move to component */}
      <div className="mt-36 lg:mt-44">
        <p className="font-display text-base text-slate-900">
          Trusted by many
        </p>
        <ul
          role="list"
          className="mt-8 flex items-center justify-center gap-x-8 sm:flex-col sm:gap-x-0 sm:gap-y-10 xl:flex-row xl:gap-x-12 xl:gap-y-0"
        >
          {[
            [
              { name: 'Transistor', logo: logoTransistor },
              { name: 'Tuple', logo: logoTuple },
              { name: 'StaticKit', logo: logoStaticKit },
            ],
            [
              { name: 'Mirage', logo: logoMirage },
              { name: 'Laravel', logo: logoLaravel },
              { name: 'Statamic', logo: logoStatamic },
            ],
          ].map((group, groupIndex) => (
            <li key={groupIndex}>
              <ul
                role="list"
                className="flex flex-col items-center gap-y-8 sm:flex-row sm:gap-x-12 sm:gap-y-0"
              >
                {group.map((company) => (
                  <li key={company.name} className="flex">
                    <Image src={company.logo} alt={company.name} unoptimized />
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  )
}
