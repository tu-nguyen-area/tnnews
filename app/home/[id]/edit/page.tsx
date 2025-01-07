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
        <div>
          <label>Title</label>
          <input name="title" defaultValue={post.title} className="rounded-md w-full m-2 border-2 border-indigo-500" required></input>
        </div>
        <div>
          <input name="author_id" type="hidden" value="47d555f3-72ce-4df1-aa3f-912567d3556b"></input>
        </div>
        <div>
          <label>Content</label>
          <textarea name="content" defaultValue={post.content} className="rounded-lg w-full m-2 border-2 border-indigo-500" required></textarea>
        </div>
        <div className="flex justify-between">
          <Link className="rounded-xl border-2 border-indigo-500 p-2 m-2" href={`/home/${post.post_id}`}>Cancel</Link>
          <button className="rounded-xl border-2 border-indigo-500 p-2 m-2" type="submit">Confirm</button>
        </div>
      </form>
    </div>
      );
    })}

  </>
  );
}
