import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export const COOKIE_NAME = 'james_dashboard_auth';

export async function authToken(password: string): Promise<string> {
  const bytes = await crypto.subtle.digest(
    'SHA-256', new TextEncoder().encode(`james-dashboard:${password}`),
  );
  return Array.from(new Uint8Array(bytes), value => value.toString(16).padStart(2, '0')).join('');
}

export async function requireAuth() {
  const password = process.env.DASHBOARD_PASSWORD;
  if (!password) redirect('/login?error=config');
  const token = (await cookies()).get(COOKIE_NAME)?.value;
  if (token !== await authToken(password)) redirect('/login');
}
