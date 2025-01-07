'use client';

import Link from 'next/link';
import styles from '@/app/utils/post.module.css';
import { createPost } from '@/app/lib/actions';
import { useFormStatus } from 'react-dom';

function Submit() {
  const { pending } = useFormStatus();
  return (
    <button className="rounded-xl border-2 border-indigo-500 p-2 m-2" type="submit" disabled={pending}>
      {pending ? "Confirming..." : "Confirm"}
    </button>
  );
}

export default function Page() {

  return (
  <>

    <div className={`${styles.eachPostLayout}`}>
      <form action={createPost}>
        <div>
          <label>Title</label>
          <input name="title" className="rounded-md w-full m-2 border-2 border-indigo-500" required></input>
        </div>
        <div>
          <input name="author_id" type="hidden" value="47d555f3-72ce-4df1-aa3f-912567d3556b" className="w-full m-2 border-2 border-indigo-500"></input>
        </div>
        <div>
          <label>Content</label>
          <textarea name="content" className="rounded-lg w-full m-2 border-2 border-indigo-500" required></textarea>
        </div>
        <div className="flex justify-between">
          <Link className="rounded-xl border-2 border-indigo-500 p-2 m-2" href="/home">Cancel</Link>
          <Submit />
        </div>
      </form>
    </div>
    
  </>
  );
}
