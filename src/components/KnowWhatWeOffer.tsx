import { Heading } from '@/components/Heading'
import MaxWidthWrapper from './MaxWidthWrapper'

export const KnowWhatWeOffer = () => {
  return (
    <section className='relative py-24 sm:py-30 bg-gray-50'>
      <MaxWidthWrapper className='flex flex-col items-center gap-16 sm:gap-20'>
        <div>
          <p className='text-center text-base/7 font-semibold text-brand-700 mb-3'>
            Not only a service, a life-style
          </p>
          <Heading className='max-w-prose mx-auto w-full'>
            Know what We Offer
          </Heading>
        </div>
      </MaxWidthWrapper>
    </section>
  )
}
