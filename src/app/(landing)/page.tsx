import { ShinyButton } from '@/components/Shiny-Button'
import { Heading } from '../../components/Heading'
import MaxWidthWrapper from '../../components/MaxWidthWrapper'
import { Check } from 'lucide-react'

export default function Home() {
  return (
    <>
      <section className='relative py-24 sm:py-32 bg-brand-25'>
        <MaxWidthWrapper className='text-center'>
          <div className='relative mx-auto text-center flex flex-col items-center gap-10'>
            <p className='font-light'>
              Online House-cleaning Scheduling
            </p>
            <div>
              <Heading className='max-w-prose mx-auto w-full'>
                <span>A spotless home whenever you need it,</span>
                <br />
                <span className='inline-block bg-gradient-to-r from-brand-700 to-brand-800 text-transparent bg-clip-text'>
                  Book now and leave the rest to us.
                </span>
              </Heading>
            </div>

            <p className='text-base/7 text-gray-600 text-center max-w-prose mx-auto w-full'>
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                dolore tenetur aliquam iure dolorem. Asperiores sint
                voluptatibus illo, vitae facere saepe! Quis molestias et nulla
                eaque, iusto id quod corrupti?
              </span>
            </p>

            <ul className='space-y-2 text-base/7 text-gray-600 text-left flex flex-col items-start'>
              {[
                'Verified Cleaners',
                'Online Schedule',
                'Anywhere, Any Time',
              ].map((item, index) => (
                // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                <li key={index} className='flex gap-1.5 items-center text-left'>
                  <Check className='size-5 shrink-0 text-brand-700' />
                  {item}
                </li>
              ))}
            </ul>

            <div className='w-full max-w-80'>
              <ShinyButton
                href='/sign-up'
                className='relative z-10 h-14 w-full text-base shadow-lg transition-shadow duration-300 hover:shadow-xl'
              >
                Book a Clean
              </ShinyButton>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  )
}
