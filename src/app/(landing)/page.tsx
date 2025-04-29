import { ShinyButton } from '@/components/Shiny-Button'
import { Heading } from '@/components/Heading'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { Check } from 'lucide-react'
import { useEffect } from 'react'
import Bubbles from '@/components/Bubbles'

export default function Home() {

  return (
    <section className='relative py-24 sm:py-32 bg-brand-25 overflow-hidden'>
      <Bubbles count={15} maxSize={100} riseSpeed={30} />
      <MaxWidthWrapper className='text-center relative z-25'>
        <div className='relative mx-auto text-center flex flex-col items-center gap-10'>
          <p className='font-light'>Online House-cleaning Scheduling</p>
          <Heading className='max-w-prose mx-auto w-full'>
            <span>A spotless home whenever you need it,</span>
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
            {['Verified Cleaners', 'Online Schedule', 'Anywhere, Any Time'].map(
              (item, idx) => (
                // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                <li key={idx} className='flex gap-1.5 items-center'>
                  <Check className='size-5 shrink-0 text-brand-700' />
                  {item}
                </li>
              ),
            )}
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
  )
}
