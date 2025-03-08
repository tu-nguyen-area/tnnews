import SectionFive from '@/app/ui/home/section-five';
import { EditPost, DeletePost } from '@/app/ui/home/buttons';
import Link from 'next/link';

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const id = params.id;

  return (
  <>

  <main>
    <SectionFive id={id}/>
    <div className="grid gap-6 md:flex md:justify-between m-6 md:m-8">
      <Link href="/profile">
        <button className="bg-black dark:bg-white rounded-lg text-white dark:text-black p-2 w-full md:w-36 h-10 hover:bg-gradient-to-r hover:from-red-500 hover:via-orange-500 hover:to-yellow-500 hover:text-white">Back</button>
      </Link>
      <DeletePost id={id} />
      <EditPost id={id} />
    </div>
  </main>

  </>
  );
}
