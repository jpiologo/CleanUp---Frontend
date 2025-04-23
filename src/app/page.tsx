import { Heading } from "./components/Heading";
import MaxWidthWrapper from "./components/MaxWidthWrapper";

export default function Home() {
  return (
    <>
      <section className="relative py-24 sm:py-32 bg-brand-25">
        <MaxWidthWrapper className="text-center">
          <div className="relative mx-auto text-center flex flex-col items-center gap-10"> 
            <Heading>
              Your home is a reflection of your mind.
            </Heading>
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  )
}