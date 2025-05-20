import { Navbar } from '@/components/Navbar'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sign Up • CleanUp',
  description: 'Register your account to start using CleanUp.',
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
