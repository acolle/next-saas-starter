'use client';

import Image from 'next/image'

import { Button } from '@/components/ui/button'
import { Container } from '@/components/container'
import backgroundImage from '@/public/background-call-to-action.jpg'

export function CallToAction({ 
  // tagline: String = 'Get started today', 
  // subTagline : String = 'This is the default sub tagline.', 
  // actionLabel: String = 'Get started', 
  // actionURL: String = '#'
  tagline, subTagline, actionLabel, actionURL
}) {
  return (
    <section
      id="get-started-today"
      className="relative overflow-hidden bg-blue-600 py-32"
    >
      <Image
        className="absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
        src={backgroundImage}
        alt=""
        width={2347}
        height={1244}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
            {tagline}
          </h2>
          <p className="mt-4 text-lg tracking-tight text-white">
            {subTagline}
          </p>
          <Button href={actionURL} color="white" className="mt-10">
            {actionLabel}
          </Button>
        </div>
      </Container>
    </section>
  )
}
