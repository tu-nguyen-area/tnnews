import CreateForm from '@/components/custom/create-form';
import { auth } from '@/app/(auth)/auth';

export default async function Page() {
  const session = await auth();

  return (
  <>

  <section>
    <CreateForm
      author_id={session?.user?.id}
    />
  </section>

  </>
  );
}
