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
    firstName: z.string().min(2, 'First Name must be at least 2 characters'),
    lastName: z.string().min(2, 'Last name must be at least 2 characters'),
    email: z
      .string()
      .min(1, 'E‑mail is required')
      .email('Provide a valid e‑mail address'),
    password: z.string().min(8, 'Password must be at least 8 characters'),
    confirmPassword: z.string(),
    identityDocument: z.string().min(11, 'Invalid identity document').max(11, 'Invalid identity document'),
    phone: z.string().min(9, 'Invalid phone number').max(11, 'Invalid phone number'),
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
  const { firstName, lastName, email, password, identityDocument, phone } = signUpSchema.parse(data)

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ firstName, lastName, email, password, identityDocument, phone }),
  })

  if (!res.ok) throw await parseError(res)
  return res.json()
}
