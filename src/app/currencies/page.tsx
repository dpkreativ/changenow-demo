import { cryptoCoins } from '@/assets/data';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Currencies',
  description: 'Lorem currencies',
};

export default function Currencies() {
  return (
    <main className="grid gap-10">
      {cryptoCoins?.map((coin) => (
        <Link key={`kts-${coin.slug}`} href={`/currencies/${coin.slug}`}>
          {coin.name}
        </Link>
      ))}
    </main>
  );
}
