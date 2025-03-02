import { EachPost } from '@/components/custom/each-post';
import { fetchEachPost } from '@/app/lib/data';

export default async function SectionTwo({ id }: { id: string }) {
  const eachPost = await fetchEachPost(id);

  return (
  <>

  <section>
    {eachPost.map((post) => {
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
