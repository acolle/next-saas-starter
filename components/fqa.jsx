'use client';

import Image from 'next/image';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

import { Container } from '@/components/container';
import { faqs } from '@/lib/site-config';
import backgroundImage from '@/public/background-faqs.jpg';


export function FrequentlyAskedQuestions() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32 bg-gradient-to-tr from-slate-50 from-10% via-pink-50 via-50% to-slate-50to-90%"
    >
      {/* <Image
        className="absolute left-1/2 top-0 max-w-none -translate-y-1/4 translate-x-[-30%]"
        src={backgroundImage}
        alt=""
        width={1558}
        height={946}
        unoptimized
      /> */}

      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            {faqs.tagline}
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            {faqs.subTagline}
          </p>
        </div>

        {/* Mobile */}
        <Accordion type="single" collapsible className="mt-12 sm:hidden">
          {faqs.items.map((faq, faqIndex) => (
            <AccordionItem value={faq.question} key={faqIndex}>
              <AccordionTrigger>
                <h3 className="font-display text-lg leading-7 text-slate-900">
                  {faq.question}
                </h3>
              </AccordionTrigger>
              <AccordionContent>
                <p className="mt-4 text-sm text-slate-700">{faq.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}          
        </Accordion>

        {/* Desktop */}
        <ul
          role="list"
          className="mx-auto mt-16 max-w-2xl grid-cols-2 gap-8 lg:max-w-none lg:grid-cols-3 hidden sm:grid"
        >
          {faqs.items.map((faq, faqIndex) => (
            <li key={faqIndex}>
              <h3 className="font-display text-lg leading-7 text-slate-900">
                {faq.question}
              </h3>
              <p className="mt-4 text-sm text-slate-700">{faq.answer}</p>
            </li>
          ))}
        </ul>

      </Container>
    </section>
  )
}
