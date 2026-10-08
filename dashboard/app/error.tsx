'use client';

export default function ErrorPage({ reset }: { reset: () => void }) {
  return <main className="shell"><div className="card">
    <h1>Data is temporarily unavailable</h1>
    <p role="alert">The report could not be loaded. Check database configuration and Airbyte imports.
      This error does not mean there was no activity.</p>
    <button onClick={reset}>Try again</button>
  </div></main>;
}
