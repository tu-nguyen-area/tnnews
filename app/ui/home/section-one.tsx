import { Post } from '@/components/custom/post';
import { fetchPost } from '@/app/lib/data';

export default async function SectionOne() {
  const listPost = await fetchPost();

  return (
  <>

  <section>
    {listPost.map((post) => {
      return (
        <Post
          key={post.post_id}
          post_id={`/home/${post.post_id}`}
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
