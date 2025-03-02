import Header from '@/app/ui/header';
import Footer from '@/app/ui/footer';
import Link from 'next/link';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
  <>

  <div>
    <Header />
    <div className="flex justify-center my-8 md:justify-end m-16">
        <Link href="/signin">
          <button className="bg-black dark:bg-white rounded-lg text-white dark:text-black p-2 w-24 md:w-36 h-10 hover:bg-gradient-to-r hover:from-red-500 hover:via-orange-500 hover:to-yellow-500 hover:text-white">Sign In</button>
        </Link>
        <h1 className="mx-6 m-2 font-bold">Or</h1>
        <Link href="/signup">
          <button className="bg-black dark:bg-white rounded-lg text-white dark:text-black p-2 w-24 md:w-36 h-10 hover:bg-gradient-to-r hover:from-red-500 hover:via-orange-500 hover:to-yellow-500 hover:text-white">Sign Up</button>
        </Link>
      </div>
    {children}
    <Footer />
  </div>

  </>
  );
}
