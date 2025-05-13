'use client'

import { Heading } from '@/components/Heading'
import MaxWidthWrapper from './MaxWidthWrapper'
import CleanerIcon from '../../public/CleanerImg.png'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import type { FC } from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { ShinyButton } from './Shiny-Button'
import Link from 'next/link'
import { Button } from './ui/button'

// Dynamically import Slider to avoid SSR issues
const Slider = dynamic(() => import('react-slick'), { ssr: false })

// Settings for testimonial carousel (react-slick)
const carouselSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  arrows: true,
  pauseOnHover: true,
  appendDots: (dots: React.ReactNode) => (
    <div className='mt-4'>
      <ul className='flex justify-center gap-2'>{dots}</ul>
    </div>
  ),
  customPaging: () => (
    // biome-ignore lint/a11y/useButtonType: <explanation>
    <button className='w-2.5 h-2.5 bg-brand-300 rounded-full transition-all hover:bg-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2' />
  ),
}

export const KnowWhatWeOffer: FC = () => (
  <section className='relative py-16 sm:py-24 bg-gray-50 overflow-hidden'>
    <MaxWidthWrapper>
      <Heading className='text-center'>
        Not only a service, but a lifestyle
      </Heading>
      <p className='mt-4 text-center text-base/7 text-gray-600 max-w-prose mx-auto'>
        Get to know everything we offer to make your life easier and cleaner.
      </p>

      <div className='w-full grid grid-cols-1 md:grid-cols-2 grid-rows-[auto_auto_auto] gap-6 sm:gap-2 animate-fade-in-up mt-12'>
        <div className='row-span-2 bg-white border border-gray-200 rounded-xl shadow-lg p-8 sm:p-10 flex gap-5 flex-col items-center justify-center transition-all hover:shadow-xl hover:-translate-y-1'>
          <div className='relative'>
            <Image
              src={CleanerIcon.src}
              alt='Be a Cleaner icon'
              width={150}
              height={150}
              className='transition-transform'
              priority
            />
          </div>
          <h4 className='text-xl sm:text-2xl font-semibold text-gray-900'>
            Be a Cleaner
          </h4>
          <p className='text-base sm:text-lg text-gray-600 text-center max-w-md'>
            Join our premium cleaning team and transform your career with
            flexible opportunities.
          </p>
          <ShinyButton
            href='/become-cleaner'
            className='relative z-10 h-14 text-base shadow-lg hover:shadow-xl'
          >
            Join the Crew
          </ShinyButton>
        </div>

        <div className='bg-white rounded-xl shadow-lg p-6 sm:p-8 transition-all hover:shadow-xl hover:-translate-y-1 border border-gray-200'>
          <h4 className='sm:text-2xl font-semibold text-gray-900 mb-4 text-center'>
            What Our Clients Say
          </h4>
          {/* biome-ignore lint/a11y/useSemanticElements: <explanation> */}
          <div role='region' aria-label='Testimonial carousel'>
            <Slider {...carouselSettings}>
              <div className='px-4'>
                <blockquote className='text-gray-600 italic text-center'>
                  “CleanUp transformed my routine! Our home has never looked so
                  spotless.”
                </blockquote>
                <p className='mt-3 text-sm font-medium text-gray-900 text-center'>
                  — Maria Silva
                </p>
              </div>
              <div className='px-4'>
                <blockquote className='text-base sm:text-lg text-gray-600 text-center'>
                  “Punctual and attentive professionals. Highly recommend!”
                </blockquote>
                <p className='mt-3 mb-5 text-sm font-medium text-gray-900 text-center'>
                  — João Pereira
                </p>
              </div>
            </Slider>
          </div>
        </div>

        <div className='bg-white border border-gray-200 rounded-xl shadow-lg p-8 flex flex-col justify-between transition-all hover:shadow-xl hover:-translate-y-1'>
          <div>
            <h4 className='text-xl sm:text-2xl font-semibold text-gray-900 mb-2'>
              Subscription Plans
            </h4>
            <p className='text-base text-gray-600'>
              Choose from weekly, monthly, or annual plans for seamless,
              tailored services.
            </p>
          </div>
          <Link
            href={'/plans'}
            className='mt-6 w-fit text-base font-semibold text-brand-600 hover:text-brand-700 transition-colors'
            aria-label='Learn more about subscription plans'
          >
            Know More →
          </Link>
        </div>

        <div className='bg-white border border-gray-200 rounded-xl shadow-lg p-8 flex items-center justify-center transition-all hover:shadow-xl hover:-translate-y-1'>
          <span className='text-base sm:text-lg font-medium'>
            More Features Coming Soon...
          </span>
        </div>
      </div>
    </MaxWidthWrapper>
  </section>
)
