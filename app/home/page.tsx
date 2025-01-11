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
          <Link className="rounded-xl bg-white border-2 border-indigo-500 p-2 sm:ml-4" href="/home/create">New post</Link>
          <form
            action={async () => {
              'use server';
              await signOut();
            }}
          >
            <div>
              <label className="pr-1">{session?.user?.email}</label>
              <button className="rounded-xl bg-white border-2 border-indigo-500 p-2 sm:mr-4" type="submit">
                Sign Out
              </button>
            </div>
          </form>
      </div>
      <div className="flex justify-center">
        <h1>Public Feed</h1>
      </div>
      <Post />
    </section>

  </>
  );
}
