import styles from '@/app/modules/post.module.css';

export function EachPost({
  title,
  name,
  content,
}: {
  title: string;
  name: string;
  content: string;
}) {
  return (
  <>

  <section className={`${styles.postSection} bg-orange-100 dark:bg-neutral-900 dark:text-white rounded-lg break-words`}>
    <div className={`${styles.postLayout}`}>
      <h2 className="text-xl">{title}</h2>
      <p className="text-sm">{`By ${name}`}</p>
      <p className="whitespace-pre-line md:whitespace-pre-wrap">{content}</p>
    </div>
  </section>

  </>
  );
}
