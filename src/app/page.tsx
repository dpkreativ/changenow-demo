import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <h1>Limitless Crypto Exchange</h1>
      <Link href="/currencies">Currencies</Link>
    </main>
  );
}
