import Link from 'next/link';
import styles from '@/app/utils/post.module.css';
import { fetchProfile } from '@/app/lib/data';
import { auth } from '@/app/(auth)/auth';

export default async function Post() {
  const session = await auth();
  const email = session?.user?.email;
  const postList = await fetchProfile(email);

  return (
  <>

    {postList.map((post) => {
      return (
        <div key={Math.random()} className={`${styles.postLink}`}>
          <Link key={Math.random()} href={`/home/${post.post_id}`}>
            <div className={`${styles.postLayout} truncate`}>
              <h2 className="text-xl">{post.title}</h2>
              <p className="text-xs">{`By ${post.name}`}</p>
              <p>{post.content}</p>
            </div>
          </Link>
        </div>
      );
    })}

  </>
  );
}
