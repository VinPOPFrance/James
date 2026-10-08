export default async function Login({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const { error } = await searchParams;
  return <main className="login">
    <div className="card">
      <p className="eyebrow">JAMES DAIME / PRIVATE DASHBOARD</p>
      <h1>A clearer view of what works.</h1>
      <p>Sign in to review your advertising and website performance.</p>
      {error && <p role="alert" className="notice">
        {error === 'config' ? 'Dashboard password is not configured on the server.' : 'Incorrect password. Please try again.'}
      </p>}
      <form action="/api/login" method="post">
        <label htmlFor="password">Password</label>
        <input id="password" name="password" type="password" autoComplete="current-password" required maxLength={1024} />
        <button type="submit">Access dashboard</button>
      </form>
    </div>
  </main>;
}
