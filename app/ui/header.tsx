import Link from 'next/link';

export default function Header() {
  return (
  <>
    <div className="flex justify-between">
      <Link href="/home">Home</Link>
      <p>tudellg33579@protonmail.com</p>
    </div>
  </>
  );
}
