import { Navbar } from '@/components/Navbar'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sign in • CleanUp',
  description: 'Entre na sua conta CleanUp e gerencie suas limpezas.',
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
