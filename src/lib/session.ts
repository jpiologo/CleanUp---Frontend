export async function currentUser() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/me`, {
      method: 'GET',
      credentials: 'include', // envia cookies automaticamente
      headers: { 'Content-Type': 'application/json' },
    })
    if (!res.ok) return null
    return await res.json()
  } catch {
    return null
  }
}
