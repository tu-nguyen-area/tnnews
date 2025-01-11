import Post from '@/app/ui/post';
import styles from '@/app/utils/home.module.css';
import Link from 'next/link';

export default async function Page() {
  return (
  <>

    <section>
      <div className={`${styles.homeHeader}`}>
        <h1 className="p-2 ml-4 mt-1">Public Feed</h1>
        <Link className="rounded-xl border-2 border-indigo-500 p-2 bg-white" href="/signin">Sign In</Link>
      </div>
      <Post />
    </section>

  </>
  );
}
