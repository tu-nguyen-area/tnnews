import Link from 'next/link';

export default function Footer() {
  return (
  <>

  <footer className="flex justify-center text-white bg-gradient-to-r from-red-500 via-orange to-yellow-500 p-3 md:p-6">
    <section>
      <p>Privacy Policy | Terms of Use</p>
      <p>A product from <Link href="https://tnadvancement.pages.dev/" target="_blank">TN ADVANCEMENT</Link></p>
      <p>&#169; 2025 TN News Project. All rights reserved</p>
    </section>
  </footer>

  </>
  );
}
