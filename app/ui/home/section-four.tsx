import { Post } from '@/components/custom/post';
import { fetchPostProfile } from '@/app/lib/data';
import { auth } from '@/app/(auth)/auth';

export default async function SectionFour() {
  const session = await auth();
  const user_id = session?.user?.id || "";
  const listPostProfile = await fetchPostProfile(user_id);

  return (
  <>

  <section>
    {listPostProfile.map((post) => {
      return (
        <Post
          key={post.post_id}
          post_id={`/profile/${post.post_id}`}
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
