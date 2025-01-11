import CreateForm from '@/components/create-form';
import { fetchUser } from '@/app/lib/data';
import { auth } from '@/app/(auth)/auth';

export default async function Page() {
  const session = await auth();
  const user = session?.user?.email;
  const author_id = await fetchUser(user);

  return (
  <>

    {author_id.map((author) => {
      return (
        <CreateForm key={author.user_id} value={author.user_id} />
      );
    })}

  </>
  );
}
