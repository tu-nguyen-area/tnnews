'use client'

import Link from 'next/link';
import styles from '@/app/utils/post.module.css';
import { createPost } from '@/app/lib/actions';

export default function Page() {
  
  return (
  <>

    <div className={`${styles.eachPostLayout}`}>
      <form action={createPost}>
        <div>
          <label>Title</label>
          <input name="title" className="w-full m-2 border-2 border-indigo-500"></input>
        </div>
        <div>
          <input name="author_id" type="hidden" value="47d555f3-72ce-4df1-aa3f-912567d3556b" className="w-full m-2 border-2 border-indigo-500"></input>
        </div>
        <div>
          <label>Content</label>
          <textarea name="content" className="w-full m-2 border-2 border-indigo-500"></textarea>
        </div>
        <div className="flex justify-between">
          <Link className="rounded-xl border-2 border-indigo-500 p-2 m-2" href="/home">Cancel</Link>
          <button className="rounded-xl border-2 border-indigo-500 p-2 m-2" type="submit">Confirm</button>
        </div>
      </form>
    </div>
    
  </>
  );
}
