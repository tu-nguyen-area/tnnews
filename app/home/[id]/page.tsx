import Link from 'next/link';
import { fetchEachPost } from "@/app/lib/data";
import styles from '@/app/utils/post.module.css';

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const id = params.id;
  const dataPost = await fetchEachPost(id);

  return (
  <>
  
    {dataPost.map((post) => {
      return (
          <div key={Math.random()} className={`${styles.eachPostLayout}`}>
            <h1 className="text-xl">{post.title}</h1>
            <p className="text-xs">{`By ${post.name}`}</p>
            <p>{post.content}</p>
            <div className="flex justify-between">
            <Link className="rounded-xl border-2 border-indigo-500 p-2 m-4" href="/home">Cancel</Link>
              <Link className="rounded-xl border-2 border-indigo-500 p-2 m-4" href={`/home/${post.post_id}/edit`}>
                <button>Edit</button>
              </Link>
            </div>
          </div>
      );
    })}

  </>
  );
}
