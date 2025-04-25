import { Heading } from '../components/Heading'
import MaxWidthWrapper from '../components/MaxWidthWrapper'

export default function Home() {
  return (
    <>
      <section className='relative py-24 sm:py-32 bg-brand-25'>
        <MaxWidthWrapper className='text-center'>
          <div className='relative mx-auto text-center flex flex-col items-center gap-10'>
            <Heading className='max-w-prose mx-auto w-full'>
              <span>A spotless home whenever you need it,</span>
              <br />
              <span className='inline-block bg-gradient-to-r from-sky-600 to-sky-950 text-transparent bg-clip-text'>
                Book now and leave the rest to us.
              </span>
            </Heading>
            <p className='text-base/7 text-gray-600 text-center max-w-prose mx-auto w-full'>
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                dolore tenetur aliquam iure dolorem. Asperiores sint
                voluptatibus illo, vitae facere saepe! Quis molestias et nulla
                eaque, iusto id quod corrupti?
              </span>
            </p>
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  )
}
