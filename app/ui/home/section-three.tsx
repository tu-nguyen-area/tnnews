import EditForm from '@/components/custom/edit-form';
import { fetchEachPost } from '@/app/lib/data';
import { notFound } from 'next/navigation';
import { auth } from '@/app/(auth)/auth';

export default async function SectionThree({ id }: { id: string }) {
  const eachPost = await fetchEachPost(id);
  const session = await auth();

  return (
  <>

  <section>
    {eachPost.map((post) => {
      if(session?.user?.id !== post.author_id) {
        notFound();
      }
      return (
        <EditForm
          key={post.post_id}
          post_id={post.post_id}
          author_id={post.author_id}
          author_name={post.name}
          published={post.published}
          title={post.title}
          content={post.content}
        />
      );
    })}
  </section>

  </>
  );
}
