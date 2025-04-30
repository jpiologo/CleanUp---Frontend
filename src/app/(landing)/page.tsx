import { ShinyButton } from '@/components/Shiny-Button'
import { Heading } from '@/components/Heading'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { Check, ArrowRight } from 'lucide-react'
import Bubbles from '@/components/Bubbles'
import CleanerIcon from '../../../public/CleanerImg.png'
import Step1Icon from '../../../public/RequestAClean.png'
import Step2Icon from '../../../public/CleanerNotification.png'
import Step3Icon from '../../../public/HelloCleaner.png'

export default function Home() {
  return (
    <>
      <section className='relative py-24 sm:py-32 bg-white overflow-hidden'>
        <Bubbles count={30} maxSize={150} riseSpeed={40} />
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

      <section
        id='como-funciona'
        className='snap-start py-24 sm:py-30 grainy-light border border-neutral-200'
      >
        <MaxWidthWrapper>
          <Heading className='text-center'>How it Works?</Heading>
          <p className='mt-4 text-center text-base/7 text-gray-600 max-w-prose mx-auto'>
            CleanUp is designed to make your life easier. Follow these simple
            steps to get started:
          </p>

          <div className='mt-12 space-y-16'>
            {[
              {
                title: 'Choose the Cleaning Type that better fits your needs',
                subtitle: 'Selecione seu tipo de limpeza',
                text: 'Navegue pelas opções de serviço e escolha aquela que melhor atende suas necessidades.',
              },
              {
                title: 'Defina Dia e Hora',
                subtitle: 'Agende com praticidade',
                text: 'No calendário, selecione a data e horário que se encaixam na sua rotina.',
              },
              {
                title: 'Relaxe em Casa',
                subtitle: 'Nossa equipe cuida de tudo',
                text: 'Receba nosso cleaner na data marcada e aproveite seu tempo livre enquanto limpamos seu lar.',
              },
            ].map((step, idx) => (
              <div
                // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                key={idx}
                className={`flex flex-col sm:flex-row ${idx % 2 === 1 ? 'sm:flex-row-reverse' : ''} items-center gap-8`}
              >
                {/* Placeholder de imagem: substitua pela sua imagem real */}
                <div className='w-full sm:w-1/2'>
                  <div className='bg-gray-100 w-full h-64 rounded-lg flex items-center justify-center'>
                    Imagem Passo {idx + 1}
                  </div>
                </div>

                {/* Texto do passo */}
                <div className='w-full sm:w-1/2'>
                  <h3 className='text-xl font-semibold'>{step.title}</h3>
                  <h4 className='text-base font-medium text-brand-700 mt-2'>
                    {step.subtitle}
                  </h4>
                  <p className='mt-4 text-gray-600'>{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>

      <section id='beneficios' className='py-24 sm:py-32 bg-gray-50'>
        <MaxWidthWrapper className='text-center'>
          <Heading>Benefícios</Heading>
          <p className='mt-4 text-base/7 text-gray-600 max-w-prose mx-auto'>
            Conheça as vantagens de usar CleanUp para manter seu lar sempre
            impecável:
          </p>
          <ul className='mt-6 space-y-4 max-w-prose mx-auto text-left text-base/7 text-gray-600'>
            <li className='flex items-center gap-2'>
              <Check className='size-5 text-brand-700' /> Garantia de satisfação
            </li>
            <li className='flex items-center gap-2'>
              <Check className='size-5 text-brand-700' /> Limpadores verificados
            </li>
            <li className='flex items-center gap-2'>
              <Check className='size-5 text-brand-700' /> Agendamento flexível
            </li>
            <li className='flex items-center gap-2'>
              <Check className='size-5 text-brand-700' /> Preços transparentes
            </li>
          </ul>

          {/* Placeholder for icons or images */}
          <div className='mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4'>
            {/* TODO: Inserir ícones complementares */}
          </div>
        </MaxWidthWrapper>
      </section>

      {/* Seja um Cleaner Section */}
      <section id='seja-cleaner' className='py-24 sm:py-32 grainy-light border border-neutral-200'>
        <MaxWidthWrapper className='text-center'>
          <Heading>Be a Cleaner!</Heading>
          <p className='mt-4 text-base/7 text-gray-600 max-w-prose mx-auto'>
            If you are a cleaning professional and want to be part of our team,
            fill out the form and contact us. We are always looking for new
            talent to offer the best possible service to our customers.
          </p>

          {/* Cleaner Icon */}
          <div className='mt-6'>
            <img
              src={CleanerIcon.src}
              alt='Cleaner Icon'
              className='mx-auto size-44'
            />
          </div>

          <div className='mt-8 flex justify-center'>
            <ShinyButton href='/become-cleaner' className='relative z-10 h-14 text-base shadow-lg hover:shadow-xl'>
              Join the Crew
            </ShinyButton>
          </div>

          {/* Space for testimonial or animation */}
          <div className='mt-8'>
            {/* TODO: Slider de depoimentos ou animação de onboarding */}
          </div>
        </MaxWidthWrapper>
      </section>

      {/* Planos de Limpeza Section */}
      <section id='planos-de-limpeza' className='py-24 sm:py-32 bg-gray-50'>
        <MaxWidthWrapper className='text-center'>
          <Heading>Planos de Limpeza</Heading>
          <p className='mt-4 text-base/7 text-gray-600 max-w-prose mx-auto'>
            Possuímos um grande leque de serviços para te ajudar a decidir o
            melhor tipo de limpeza para seu caso. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua.
          </p>

          {/* Placeholder for plan cards */}
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
      </section>
    </>
  )
}
