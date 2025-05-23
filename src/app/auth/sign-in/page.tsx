'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Eye, EyeOff } from 'lucide-react'

import { loginSchema, loginRequest, type LoginInput } from './actions'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { Heading } from '@/components/Heading'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export const dynamic = 'force-dynamic'

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginInput>({ resolver: zodResolver(loginSchema) })

  const router = useRouter()
  const [serverError, setServerError] = useState<string | null>(null)
  const [showPassword, setShowPassword] = useState(false)

  async function onSubmit(data: LoginInput) {
    setServerError(null)

    try {
      await loginRequest(data)
      router.push('/dashboard')
      router.refresh()
    } catch (err) {
      setServerError((err as Error).message)
    }
  }

  return (
    <div className="flex flex-col bg-gray-50">
      <div className="flex flex-1 items-center justify-center">
        <MaxWidthWrapper className="w-full max-w-lg py-4">
          <div className="rounded-2xl mt-20 bg-white p-8 shadow-xl ring-1 ring-gray-900/5 max-h-[calc(100vh-4rem-2rem)] overflow-hidden">
            <Heading className="mb-6 text-center">
              Welcome back!
            </Heading>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-700">
                  E‑mail
                </label>
                <Input id="email" type="email" placeholder="you@example.com" {...register('email')} />
                {errors.email && (
                  <p className="text-sm text-red-600">{errors.email.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="••••••••"
                    {...register('password')}
                    className="pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-600 hover:text-gray-900"
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword ? <EyeOff className="size-5" /> : <Eye className="size-5" />}
                  </button>
                </div>
                {errors.password && (
                  <p className="text-sm text-red-600">{errors.password.message}</p>
                )}
              </div>

              {serverError && <p className="text-sm text-red-600">{serverError}</p>}

              <Button type="submit" className="h-12 w-full cursor-pointer" disabled={isSubmitting}>
                {isSubmitting ? 'Signing in…' : 'Sign in'}
              </Button>
            </form>

            <p className="mt-6 text-center text-sm text-gray-600">
              Don’t have an account?
              <Link
                href="sign-up"
                className="ml-1 inline-flex items-center gap-1 font-medium text-brand-700 hover:underline"
              >
                Sign up <ArrowRight className="size-4" />
              </Link>
            </p>
          </div>
        </MaxWidthWrapper>
      </div>
    </div>
  )
}