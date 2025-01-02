import Post from '@/app/ui/post';
import styles from '@/app/utils/home.module.css';
import Link from 'next/link';

export default async function Page() {
  return (
  <>

    <section>
      <div className={`${styles.homeHeader}`}>
        <h1>Public Feed</h1>
        <Link href="/">Home</Link>
        <Link href="/home/create">New post</Link>
      </div>
      <Post />
    </section>

  </>
  );
}
