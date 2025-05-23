import { z } from 'zod'

export const loginSchema = z.object({
  email: z.string().email('E‑mail inválido'),
  password: z.string().min(6, 'Mínimo 6 caracteres'),
})

export type LoginInput = z.infer<typeof loginSchema>

export async function loginRequest(data: LoginInput) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
    credentials: 'include',
  })

  if (!res.ok) {
    const payload = await res.json().catch(() => null)
    const statusMessages: Record<number, string> = {
      401: 'Credenciais inválidas',
      429: 'Muitas tentativas, tente novamente mais tarde',
      500: 'Erro interno do servidor',
    }
    throw new Error(
      payload?.message ?? statusMessages[res.status] ?? 'Erro desconhecido',
    )
  }

  return res.json()
}
