import Post from '@/app/ui/post';
import styles from '@/app/utils/home.module.css';
import Link from 'next/link';
import { signOut, auth } from '@/app/(auth)/auth';

export default async function Page() {
  const session = await auth();

  return (
  <>

    <section>
      <div className={`${styles.homeHeader}`}>
        <h1>Public Feed</h1>
        <Link href="/home">Home</Link>
        <Link href="/home/create">New post</Link>
      </div>
        <form
          action={async () => {
            'use server';
            await signOut();
          }}
        >
          <div className="flex justify-center p-3">
          <label className="pr-3">({session?.user?.email})</label>
          <button type="submit">
            Sign Out
          </button>
          </div>
        </form>
      <Post />
    </section>

  </>
  );
}
