import { cryptoCoins } from '@/assets/data';

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props) {
  const result: CryptoCoin | null = cryptoCoins
    ? cryptoCoins.find(({ slug }) => slug === params.slug) || null
    : null;

  if (result) {
    const {
      seoProperties: { metaTitle, metaDescription },
    } = result;

    return {
      title: metaTitle,
      description: metaDescription,
    };
  }
}

export default function Coin({ params }: { params: { slug: string } }) {
  const result: CryptoCoin | null = cryptoCoins
    ? cryptoCoins.find(({ slug }) => slug === params.slug) || null
    : null;

  if (result) {
    const { name, description } = result;

    return (
      <main>
        <h1>{name}</h1>
        <p>{description}</p>
      </main>
    );
  }
}
