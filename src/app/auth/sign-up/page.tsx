'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Eye, EyeOff } from 'lucide-react'

import { signUpSchema, signUpRequest, type SignUpInput } from './actions'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { Heading } from '@/components/Heading'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export const dynamic = 'force-dynamic'

export default function SignUpPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignUpInput>({ resolver: zodResolver(signUpSchema) })

  const router = useRouter()
  const [serverError, setServerError] = useState<string | null>(null)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)

  async function onSubmit(data: SignUpInput) {
    setServerError(null)

    try {
      await signUpRequest(data) // data agora tem: firstName, lastName, email, password, identityDocument, phone
      router.push('/dashboard')
      router.refresh()
    } catch (err) {
      setServerError((err as Error).message)
    }
  }

  return (
    <div className='flex flex-col bg-gray-50'>
      {/* Form Container */}
      <div className='flex mt-20 flex-1 items-center justify-center'>
        <MaxWidthWrapper className='w-full max-w-lg py-4'>
          <div className='max-h-[calc(100vh-4rem-2rem)] overflow-hidden rounded-2xl bg-white p-8 shadow-xl ring-1 ring-gray-900/5'>
            <Heading className='mb-6 text-center'>Create your account</Heading>

            <form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>
              {/* First Name */}
              <div className='space-y-2'>
                <label
                  htmlFor='firstName'
                  className='text-sm font-medium text-gray-700'
                >
                  First name
                </label>
                <Input
                  id='firstName'
                  placeholder='John'
                  {...register('firstName')}
                />
                {errors.firstName && (
                  <p className='text-sm text-red-600'>
                    {errors.firstName.message}
                  </p>
                )}
              </div>

              {/* Last Name */}
              <div className='space-y-2'>
                <label
                  htmlFor='lastName'
                  className='text-sm font-medium text-gray-700'
                >
                  Last name
                </label>
                <Input
                  id='lastName'
                  placeholder='Doe'
                  {...register('lastName')}
                />
                {errors.lastName && (
                  <p className='text-sm text-red-600'>
                    {errors.lastName.message}
                  </p>
                )}
              </div>

              {/* E-mail */}
              <div className='space-y-2'>
                <label
                  htmlFor='email'
                  className='text-sm font-medium text-gray-700'
                >
                  E-mail
                </label>
                <Input
                  id='email'
                  type='email'
                  placeholder='you@example.com'
                  {...register('email')}
                />
                {errors.email && (
                  <p className='text-sm text-red-600'>{errors.email.message}</p>
                )}
              </div>

              {/* Password */}
              <div className='space-y-2'>
                <label
                  htmlFor='password'
                  className='text-sm font-medium text-gray-700'
                >
                  Password
                </label>
                <div className='relative'>
                  <Input
                    id='password'
                    type={showPassword ? 'text' : 'password'}
                    placeholder='••••••••'
                    {...register('password')}
                    className='pr-10'
                  />
                  <button
                    type='button'
                    onClick={() => setShowPassword((prev) => !prev)}
                    className='absolute inset-y-0 right-0 flex items-center pr-3 text-gray-600 hover:text-gray-900'
                    aria-label={
                      showPassword ? 'Hide password' : 'Show password'
                    }
                  >
                    {showPassword ? (
                      <EyeOff className='size-5' />
                    ) : (
                      <Eye className='size-5' />
                    )}
                  </button>
                </div>
                {errors.password && (
                  <p className='text-sm text-red-600'>
                    {errors.password.message}
                  </p>
                )}
              </div>

              {/* Confirm Password */}
              <div className='space-y-2'>
                <label
                  htmlFor='confirmPassword'
                  className='text-sm font-medium text-gray-700'
                >
                  Confirm password
                </label>
                <div className='relative'>
                  <Input
                    id='confirmPassword'
                    type={showConfirm ? 'text' : 'password'}
                    placeholder='••••••••'
                    {...register('confirmPassword')}
                    className='pr-10'
                  />
                  <button
                    type='button'
                    onClick={() => setShowConfirm((prev) => !prev)}
                    className='absolute inset-y-0 right-0 flex items-center pr-3 text-gray-600 hover:text-gray-900'
                    aria-label={
                      showConfirm ? 'Hide confirmation' : 'Show confirmation'
                    }
                  >
                    {showConfirm ? (
                      <EyeOff className='size-5' />
                    ) : (
                      <Eye className='size-5' />
                    )}
                  </button>
                </div>
                {errors.confirmPassword && (
                  <p className='text-sm text-red-600'>
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>

              {/* Identity Document */}
              <div className='space-y-2'>
                <label
                  htmlFor='identityDocument'
                  className='text-sm font-medium text-gray-700'
                >
                  Identity Document
                </label>
                <Input
                  id='identityDocument'
                  placeholder='12345678900'
                  {...register('identityDocument')}
                />
                {errors.identityDocument && (
                  <p className='text-sm text-red-600'>
                    {errors.identityDocument.message}
                  </p>
                )}
              </div>

              {/* Phone */}
              <div className='space-y-2'>
                <label
                  htmlFor='phone'
                  className='text-sm font-medium text-gray-700'
                >
                  Phone
                </label>
                <Input
                  id='phone'
                  type='tel'
                  placeholder='11999999999'
                  {...register('phone')}
                />
                {errors.phone && (
                  <p className='text-sm text-red-600'>{errors.phone.message}</p>
                )}
              </div>

              {serverError && (
                <p className='text-sm text-red-600'>{serverError}</p>
              )}

              <Button
                type='submit'
                className='h-12 w-full cursor-pointer'
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Creating account…' : 'Create account'}
              </Button>
            </form>

            <p className='mt-6 text-center text-sm text-gray-600'>
              Already have an account?
              <Link
                href='sign-in'
                className='ml-1 inline-flex items-center gap-1 font-medium text-brand-700 hover:underline'
              >
                Sign in <ArrowRight className='size-4' />
              </Link>
            </p>
          </div>
        </MaxWidthWrapper>
      </div>
    </div>
  )
}
