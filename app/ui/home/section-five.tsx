import { EachPost } from '@/components/custom/each-post';
import { fetchEachPost } from '@/app/lib/data';
import { notFound } from 'next/navigation';
import { auth } from '@/app/(auth)/auth';

export default async function SectionFive({ id }: { id: string }) {
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
        <EachPost
          key={post.post_id}
          title={post.title}
          name={post.name}
          content={post.content}
        />
      );
    })}
  </section>

  </>
  );
}
