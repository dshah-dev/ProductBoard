'use server'

import { cookies } from 'next/headers'

export async function createSession(name) {
  const cookieStore = await cookies()
  cookieStore.set('auth_token', 'true', { path: '/' })
  cookieStore.set('user_name', name, { path: '/' })
}

export async function deleteSession() {
  const cookieStore = await cookies()
  cookieStore.delete('auth_token')
  cookieStore.delete('user_name')
}