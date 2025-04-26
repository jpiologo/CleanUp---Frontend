import { Heading } from "./components/Heading";
import MaxWidthWrapper from "./components/MaxWidthWrapper";

export default function Home() {
  return (
    <>
      <section className="relative py-24 sm:py-32 bg-brand-25">
        <MaxWidthWrapper className="text-center">
          <div className="relative mx-auto text-center flex flex-col items-center gap-10"> 
            <Heading>
              <span>
                A Spotless home whenever you need it,
              </span>
              <br />
              <span className="inline-bloc bg-gradient-to-r from-sky-600 to-sky-950 text-transparent bg-clip-text">
                Book now and leave the rest to us.
              </span>
            </Heading>
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  )
}