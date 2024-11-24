'use client';

import { Button } from '@/components/ui/button'
import { Container } from '@/components/container'

import { generateSvgPath } from '@/components/path-generator';

export function CallToAction({
  tagline, 
  subTagline, 
  actionLabel, 
  actionURL
}) {

  return (
    <section
      id="get-started"
      className="relative overflow-hidden py-32 bg-gradient-to-tr from-primary from-10% via-sky-500 via-30% to-primary to-90%"
    >      
      <Container className="relative">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
            {tagline}
          </h2>
          <p className="mt-4 text-lg tracking-tight text-white">
            {subTagline}
          </p>
          <Button href={actionURL} variant='outline' color="white" className="mt-10">
            {actionLabel}
          </Button>
        </div>
      </Container>
    </section>
  )
}
