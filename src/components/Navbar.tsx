// components/Navbar.tsx
import Link from 'next/link'
import MaxWidthWrapper from './MaxWidthWrapper'
import { Button, buttonVariants } from './ui/button'
import { ArrowRight } from 'lucide-react'
import { currentUser } from '@/lib/session'
import LogoImg from '../../public/clean-up-logo.png'
import Image from 'next/image'

export const Navbar = async () => {
  const user = await currentUser()

  return (
    <nav className='sticky z-[100] h-16 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/80 backdrop-blur-lg'>
      <MaxWidthWrapper>
        <div className='flex h-16 items-center justify-between'>
          <Link
            href='/'
            className='flex items-center font-semibold text-lg z-40'
            aria-label='Clean Up Home'
          >
            <Image
              src={LogoImg}
              alt='Clean Up Logo'
              width={32}
              height={32}
              priority
              className='object-contain mr-2'
            />
            Clean<span className='text-brand-700'>Up</span>
          </Link>
          <div className='h-full flex items-center space-x-4'>
            {user ? (
              <>
                <Link
                  href='/sign-out'
                  className={buttonVariants({ size: 'sm', variant: 'ghost' })}
                >
                  Sign Out
                </Link>

                <Link
                  href='/dashboard'
                  className={buttonVariants({
                    size: 'sm',
                    className: 'flex items-center gap-1',
                  })}
                >
                  Dashboard <ArrowRight className='ml-1.5 size-4' />
                </Link>
              </>
            ) : (
              <>
                <Link
                  href='/pricing'
                  className={buttonVariants({ size: 'sm', variant: 'ghost' })}
                >
                  Pricing
                </Link>
                <Link
                  href='/sign-in'
                  className={buttonVariants({ size: 'sm', variant: 'ghost' })}
                >
                  Sign in
                </Link>
                <div className='h-8 w-px bg-gray-200' />
                <Link
                  href='/sign-up'
                  className={buttonVariants({
                    variant: 'brand',
                    size: 'sm',
                    className: 'flex items-center gap-1.5',
                  })}
                >
                  Sign up <ArrowRight className='size-4' />
                </Link>
              </>
            )}
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  )
}
