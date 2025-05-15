// src/lib/session.ts
'use server'

import { cookies } from 'next/headers'

export async function currentUser() {
  // cookies() é assíncrico no Next 15+
  const token = (await cookies()).get('access_token')?.value
  if (!token) return null

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/me`, {
      headers: {
        Authorization: `Bearer ${token}`,  // 👈  JwtAuthGuard entende isso
      },
      cache: 'no-store',
    })

    if (!res.ok) return null
    return res.json()
  } catch {
    return null
  }
}
