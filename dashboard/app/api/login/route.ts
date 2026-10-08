import { timingSafeEqual } from 'node:crypto';
import { NextRequest, NextResponse } from 'next/server';
import { authToken, COOKIE_NAME } from '../../../lib/auth';

export async function POST(request: NextRequest) {
  if (request.headers.get('origin') !== request.nextUrl.origin) {
    return new NextResponse('Invalid origin', { status: 403 });
  }
  const expected = process.env.DASHBOARD_PASSWORD;
  if (!expected) return NextResponse.redirect(new URL('/login?error=config', request.url), 303);
  const form = await request.formData();
  const password = form.get('password');
  if (typeof password !== 'string' || password.length > 1024) {
    return NextResponse.redirect(new URL('/login?error=invalid', request.url), 303);
  }
  const actualToken = await authToken(password);
  const expectedToken = await authToken(expected);
  if (!timingSafeEqual(Buffer.from(actualToken), Buffer.from(expectedToken))) {
    return NextResponse.redirect(new URL('/login?error=invalid', request.url), 303);
  }
  const response = NextResponse.redirect(new URL('/', request.url), 303);
  response.cookies.set(COOKIE_NAME, expectedToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 60 * 60 * 24 * 7,
    path: '/',
  });
  return response;
}
