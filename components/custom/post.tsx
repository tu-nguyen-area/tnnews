import Link from 'next/link';
import styles from '@/app/modules/post.module.css';

export function Post({
  post_id,
  title,
  name,
  content,
}: {
  post_id: string;
  title: string;
  name: string;
  content: string;
}) {
  return (
  <>

  <section className={`${styles.postSection} bg-orange-100 rounded-lg border-2 break-words hover:bg-gradient-to-r hover:from-red-500 hover:via-orange-500 hover:to-yellow-500 hover:text-white dark:text-white dark:bg-neutral-900`}>
    <Link href={`${post_id}`}>
      <div className={`${styles.postLayout} truncate`}>
        <h2 className="text-xl text-left md:text-center font-bold">{title}</h2>
        <p className="text-sm text-center">{`By ${name}`}</p>
        <p>{content}</p>
      </div>
    </Link>
  </section>

  </>
  );
}
