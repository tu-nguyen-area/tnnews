import Link from 'next/link';
import { deletePost } from '@/app/lib/actions';

export function EditPost({ id }: { id: string }) {
  return (
  <>

  <Link href={`/profile/${id}/edit`}>
    <button className="bg-black dark:bg-white rounded-lg text-white dark:text-black p-2 w-full md:w-36 h-10 hover:bg-gradient-to-r hover:from-red-500 hover:via-orange-500 hover:to-yellow-500 hover:text-white">Edit</button>
  </Link>

  </>
  );
}

export function DeletePost({ id }: { id: string }) {
  const deletePostId = deletePost.bind(null, id);

  return (
  <>

  <form action={deletePostId}>
    <button type="submit" className="bg-black dark:bg-white rounded-lg text-white dark:text-black p-2 w-full md:w-36 h-10 hover:bg-gradient-to-r hover:from-red-500 hover:via-orange-500 hover:to-yellow-500 hover:text-white">Delete</button>
  </form>

  </>
  );
}
