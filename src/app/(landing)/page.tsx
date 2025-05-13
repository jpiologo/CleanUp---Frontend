'use client'

import { ShinyButton } from '@/components/Shiny-Button'
import { Heading } from '@/components/Heading'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { Check, ArrowRight } from 'lucide-react'
import Bubbles from '@/components/Bubbles'
import Step1Icon from '../../../public/Dirty.png'
import Step2Icon from '../../../public/CleanerRings.png'
import Step3Icon from '../../../public/CleanerArriving.png'
import { KnowWhatWeOffer } from '@/components/KnowWhatWeOffer'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <section className='relative py-24 sm:py-32 bg-gray-50 overflow-hidden'>
        <Bubbles count={30} maxSize={150} riseSpeed={40} />
        <MaxWidthWrapper className='text-center relative z-25'>
          <div className='relative mx-auto text-center flex flex-col items-center gap-10'>
            <p className='text-base/7 text-gray-600 max-w-prose'>
              House-cleaning Services
            </p>
            <Heading className='max-w-prose mx-auto w-full md:text-5xl lg:text-6xl'>
              <span>A Spotless Home Whenever you need it,</span>
              <br />
              <span className='inline-block bg-gradient-to-r from-brand-700 to-brand-800 text-transparent bg-clip-text'>
                Book now and leave the rest to us.
              </span>
            </Heading>
            <p className='text-base/7 text-gray-600 max-w-prose mx-auto w-full'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              dolore tenetur aliquam iure dolorem. Asperiores sint voluptatibus
              illo, vitae facere saepe! Quis molestias et nulla eaque, iusto id
              quod corrupti?
            </p>
            <ul className='space-y-2 text-base/7 text-gray-600 flex flex-col items-start'>
              {[
                'Verified Cleaners',
                'Online Schedule',
                'Anywhere, Any Time',
              ].map((item, idx) => (
                // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                <li key={idx} className='flex gap-1.5 items-center'>
                  <Check className='size-5 shrink-0 text-brand-700' />
                  {item}
                </li>
              ))}
            </ul>
            <div className='w-full max-w-80'>
              <ShinyButton
                href='/sign-up'
                className='relative z-10 h-14 w-full text-base shadow-lg hover:shadow-xl'
              >
                Book now
              </ShinyButton>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      <section className='snap-start py-24 sm:py-30 grainy-light border border-neutral-200'>
        <MaxWidthWrapper>
          <Heading className='text-center'>How it Works?</Heading>
          <p className='mt-4 text-center text-base/7 text-gray-600 max-w-prose mx-auto'>
            CleanUp is designed to make your life easier. Follow these simple
            steps to get started:
          </p>

          <div className='mt-12 space-y-16'>
            {[
              {
                title: 'Book Your Clean',
                subtitle: 'Choose the Perfect Cleaning Service',
                text: 'Explore our range of tailored cleaning options and effortlessly select the service that fits your lifestyle and needs.',
                image: Step1Icon,
                alt: 'Booking step',
              },
              {
                title: 'Confirm with Confidence',
                subtitle: 'Schedule at Your Convenience',
                text: 'Pick a date and time that seamlessly aligns with your busy schedule using our intuitive calendar—hassle-free and flexible!',
                image: Step2Icon,
                alt: 'Confirmation step',
              },
              {
                title: 'Relax, We’ve Got It Covered',
                subtitle: 'Our Expert Team Handles Everything',
                text: 'Welcome our professional cleaners on your chosen day and reclaim your time while we transform your home into a spotless sanctuary.',
                image: Step3Icon,
                alt: 'Cleaning step',
              },
            ].map((step, idx) => (
              <div
                // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                key={idx}
                className={`flex flex-col sm:flex-row ${idx % 2 === 1 ? 'sm:flex-row-reverse' : ''} items-center`}
              >
                <div className='w-full sm:w-1/3'>
                  <div className='bg-transparent w-full h-64 rounded-lg flex items-center justify-center'>
                    <Image
                      src={step.image.src}
                      alt={step.alt}
                      width={250}
                      height={250}
                      className='rounded-lg object-contain'
                    />
                  </div>
                </div>

                {/* Texto do passo */}
                <div className='w-full sm:w-1/2'>
                  <h3 className='text-sm font-semibold text-brand-700'>
                    {step.title}
                  </h3>
                  <h4 className='text-3xl mt-2 font-heading font-semibold'>
                    {step.subtitle}
                  </h4>
                  <p className='mt-4 text-gray-600'>{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>

      <KnowWhatWeOffer />

      {/* Seja um Cleaner Section */}
      {/*<section
        id='seja-cleaner'
        className='py-24 sm:py-32 grainy-light border border-neutral-200'
      >
        <MaxWidthWrapper className='text-center'>
          <Heading>Be a Cleaner!</Heading>
          <p className='mt-4 text-base/7 text-gray-600 max-w-prose mx-auto'>
            If you are a cleaning professional and want to be part of our team,
            fill out the form and contact us. We are always looking for new
            talent to offer the best possible service to our customers.
          </p>

          
          <div className='mt-6'>
            <img
              src={CleanerIcon.src}
              alt='Cleaner Icon'
              className='mx-auto size-44'
            />
          </div>

          <div className='mt-8 flex justify-center'>
            <ShinyButton
              href='/become-cleaner'
              className='relative z-10 h-14 text-base shadow-lg hover:shadow-xl'
            >
              Join the Crew
            </ShinyButton>
          </div>

          
          <div className='mt-8'>
            
          </div>
        </MaxWidthWrapper>
      </section>

      
      <section id='planos-de-limpeza' className='py-24 sm:py-32 bg-gray-50'>
        <MaxWidthWrapper className='text-center'>
          <Heading>Planos de Limpeza</Heading>
          <p className='mt-4 text-base/7 text-gray-600 max-w-prose mx-auto'>
            Possuímos um grande leque de serviços para te ajudar a decidir o
            melhor tipo de limpeza para seu caso. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua.
          </p>

          
          <div className='mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6'>
            {[1, 2, 3].map((_, idx) => (
              <div
                // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                key={idx}
                className='border rounded-lg p-6 bg-white shadow-sm flex flex-col'
              >
                <h4 className='font-semibold text-lg mb-2'>Plano {idx + 1}</h4>
                <p className='text-base/7 text-gray-600 flex-grow'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer nec odio.
                </p>
                <ShinyButton href='/plans' className='mt-4 h-12'>
                  Ver Detalhes
                </ShinyButton>
              </div>
            ))}
          </div>

          <div className='mt-10'>
            <ShinyButton href='/plans' className='h-14 px-10'>
              Ver Planos
            </ShinyButton>
          </div>
        </MaxWidthWrapper>
      </section>*/}
    </>
  )
}
