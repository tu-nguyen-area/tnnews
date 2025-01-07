import Link from 'next/link';
import { fetchEachPost } from "@/app/lib/data";
import styles from '@/app/utils/post.module.css';
import { deletePost, addComment } from '@/app/lib/actions';

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const id = params.id;
  const dataPost = await fetchEachPost(id);
  const deletePostWithId = deletePost.bind(null, id);
  const addCommentWithId = addComment.bind(null, id);

  return (
  <>
  
    {dataPost.map((post) => {
      return (
        <div key={Math.random()}>
          <div className={`${styles.eachPostLayout} break-words`}>
            <h1 className="text-xl">{post.title}</h1>
            <p className="text-xs">{`By ${post.name}`}</p>
            <p>{post.content}</p>
            <div className="flex justify-between">
              <Link className="rounded-xl border-2 border-indigo-500 p-2 m-4" href="/home">Cancel</Link>
              <form action={deletePostWithId}>
                <button type="submit" className="rounded-xl border-2 border-indigo-500 p-2 m-4">Delete</button>
              </form>
              <Link className="rounded-xl border-2 border-indigo-500 p-2 m-4" href={`/home/${post.post_id}/edit`}>
                <button>Edit</button>
              </Link>
            </div>
          </div>

          <div className={`${styles.eachPostLayout} break-words`}>
            <label>{`Comments By ${post.name}`}</label>
            <p className="m-4">{post.comments}</p>
            <form action={addCommentWithId}>
              <textarea name="comment" className="rounded-md w-full m-2 border-2 border-indigo-500">
              </textarea>
              <button className="rounded-xl border-2 border-indigo-500 p-2 m-2" type="submit">Send comments</button>
            </form>
          </div>
        </div>
      );
    })}

  </>
  );
}
