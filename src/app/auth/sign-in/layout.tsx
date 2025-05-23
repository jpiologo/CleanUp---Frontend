import { Navbar } from '@/components/Navbar'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sign in • CleanUp',
  description: 'Welcome back! Please sign in to your account.',
}

export default function LoginLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}
