import Link from 'next/link';
import styles from '@/app/utils/post.module.css';
import { fetchPost } from '@/app/lib/data';

export default async function Post() {
  const postList = await fetchPost();

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
