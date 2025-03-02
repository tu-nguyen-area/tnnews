import Link from 'next/link';

export default function Header() {
  return (
  <>

  <header>
    <section className="flex justify-between text-white bg-gradient-to-r from-red-500 via-orange to-yellow-500 p-1">
      <Link href="/">
        TN NEWS
      </Link>
      <p>tudellg33579@protonmail.com</p>
    </section>
  </header>

  </>
  );
}
