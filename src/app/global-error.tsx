"use client";

export default function GlobalError({ reset }: { reset: () => void }) {
  return (
    <html>
      <body className="flex min-h-screen flex-col items-center justify-between p-24">
        <h2>Something went wrong!</h2>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  );
}
