import { z } from 'zod'

/* -------------------------------------------------------------------------- */
/*                                 SCHEMAS                                    */
/* -------------------------------------------------------------------------- */

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, 'E‑mail is required')
    .email('Provide a valid e‑mail address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
})

export type LoginInput = z.infer<typeof loginSchema>

export const signUpSchema = z
  .object({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    email: z
      .string()
      .min(1, 'E‑mail is required')
      .email('Provide a valid e‑mail address'),
    password: z.string().min(8, 'Password must be at least 8 characters'),
    confirmPassword: z.string(),
  })
  .refine(data => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Passwords do not match',
  })

export type SignUpInput = z.infer<typeof signUpSchema>

/* -------------------------------------------------------------------------- */
/*                                  HELPERS                                   */
/* -------------------------------------------------------------------------- */

function parseError(res: Response): Promise<Error> {
  return res
    .json()
    .then(body => new Error(body?.message ?? 'Something went wrong'))
    .catch(() => new Error('Something went wrong'))
}

/* -------------------------------------------------------------------------- */
/*                                  ACTIONS                                   */
/* -------------------------------------------------------------------------- */

export async function loginRequest(data: LoginInput) {
  const payload = loginSchema.parse(data)

  const res = await fetch('/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })

  if (!res.ok) throw await parseError(res)
  return res.json()
}

export async function signUpRequest(data: SignUpInput) {
  const { name, email, password } = signUpSchema.parse(data)

  const res = await fetch('/api/auth/sign-up', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email, password }),
  })

  if (!res.ok) throw await parseError(res)
  return res.json()
}
