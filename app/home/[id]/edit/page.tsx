import Link from 'next/link';
import { fetchEachPost } from "@/app/lib/data";
import styles from '@/app/utils/post.module.css';
import { editPost } from '@/app/lib/actions';

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const id = params.id;
  const dataPost = await fetchEachPost(id);
  const editPostWithId = editPost.bind(null, id);

  return (
  <>

  {dataPost.map((post) => {
    return (
    <div key={Math.random()} className={`${styles.eachPostLayout}`}>
      <form action={editPostWithId}>
        <div className="m-2">
          <label>Title</label>
          <input name="title" defaultValue={post.title} className="rounded-md w-full border-2 border-indigo-500 p-1" required></input>
        </div>
        <div className="m-5">
        </div>
        <div className="m-2">
          <label>Content</label>
          <textarea name="content" defaultValue={post.content} className="rounded-lg w-full border-2 border-indigo-500 p-1" required></textarea>
        </div>
        <div className="flex justify-between">
          <Link className="rounded-xl border-2 border-indigo-500 p-2 m-2" href={`/home/${post.post_id}`}>Cancel</Link>
          <button className="rounded-xl border-2 border-indigo-500 p-2 m-2 w-20 text-center" type="submit">Confirm</button>
        </div>
      </form>
    </div>
      );
    })}

  </>
  );
}
