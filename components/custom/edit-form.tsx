'use client';

import { editPost, State } from '@/app/lib/actions';
import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import Link from 'next/link';

function Submit() {
  const { pending } = useFormStatus();
  return (
    <button className="bg-black dark:bg-white rounded-lg text-white dark:text-black p-2 w-full md:w-36 h-10 hover:bg-gradient-to-r hover:from-red-500 hover:via-orange-500 hover:to-yellow-500 hover:text-white" type="submit" disabled={pending}>
      {pending ? "Confirming..." : "Confirm"}
    </button>
  );
}

export default function EditForm({ post_id, title, author_id, author_name, published, content }: { post_id: string, title: string, author_id: string, author_name: string, published: string, content: string }) {
  const initialState: State = { message: null, errors: {} };
  const editPostId = editPost.bind(null, post_id );
  const [state, formAction] = useActionState(editPostId, initialState);

  return (
  <>

  <section className="m-8">
    <form action={formAction}>
      <div className="my-6">
          <label className="text-xl bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text font-bold text-transparent">Title</label>
          <input name="title" defaultValue={title} placeholder="Title..." className="rounded-lg w-full border-2 p-2" required></input>
      </div>
      <div className="my-6 flex justify-between gap-16">
        <div className="w-full">
          <label className="text-xl bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text font-bold text-transparent">Author</label>
          <input name="name" defaultValue={author_name} placeholder="Author..." className="rounded-lg w-full border-2 p-2" required></input>
        </div>
        <div className="w-full">
          <label className="text-xl bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text font-bold text-transparent">Published</label>
          <select name="published" defaultValue={published} className="rounded-lg w-full border-2 p-2" required>
            <option value="true">Public</option>
            <option value="false">Private</option>
          </select>
        </div>
      </div>
      <div>
        <input name="author_id" defaultValue={author_id} type="hidden"></input>
      </div>
      <div className="my-6">
        <label className="text-xl bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text font-bold text-transparent">Content</label>
        <textarea name="content" defaultValue={content} placeholder="Content..." className="rounded-lg w-full h-64 md:h-96 border-2 p-2" required></textarea>
      </div>
      <div className="grid gap-6 md:flex md:justify-between my-6 md:my-12">
        <Link href={`/profile/${post_id}`}>
          <button className="bg-black dark:bg-white rounded-lg text-white dark:text-black p-2 w-full md:w-36 h-10 hover:bg-gradient-to-r hover:from-red-500 hover:via-orange-500 hover:to-yellow-500 hover:text-white">Cancel</button>
        </Link>
        <Submit />
      </div>
    </form>
  </section>

  </>
  );
}
