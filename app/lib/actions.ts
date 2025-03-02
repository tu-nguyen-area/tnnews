'use server';

import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { neon } from "@neondatabase/serverless";

const sql = neon(process.env.DATABASE_URL!);

const FormSchema = z.object({
  post_id: z.string(),
  title: z.string(),
  author_id: z.string(),
  author_name: z.string(),
  published: z.string(),
  content: z.string(),
  date: z.string(),
});

export type State = {
  errors?: {
    title?: string[];
    author_id?: string[];
    author_name?: string[];
    published?: string[];
    content?: string[];
  };

  message?: string | null;
};

const CreatePost = FormSchema.omit({ post_id: true, date: true });
const EditPost = FormSchema.omit({ post_id: true, date: true });

export async function createPost(prevState: State, formData: FormData) {
  const validatedFields = CreatePost.safeParse({
    title: formData.get('title'),
    author_id: formData.get('author_id'),
    author_name: formData.get('name'),
    published: formData.get('published'),
    content: formData.get('content'),
  });

  if(!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing fields. Failed to create post.',
    };
  }

  const { title, author_id, content, author_name, published } = validatedFields.data;
  const date = new Date().toISOString().split('T')[0];

  try {
    //console.log('Creating note data...');
    //await new Promise((resolve) => setTimeout(resolve, 3000));
    
    await sql`
      INSERT INTO "Post" (title, content, published, author_id, date)
      VALUES(${title}, ${content}, false, ${author_id}, ${date});
    `;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to create post data.');
  }

  revalidatePath('/', 'layout');
  redirect('/profile');
}

export async function editPost(post_id: string, prevState: State, formData: FormData) {
  const validatedFields = EditPost.safeParse({
    title: formData.get('title'),
    author_id: formData.get('author_id'),
    author_name: formData.get('name'),
    published: formData.get('published'),
    content: formData.get('content'),
  });

  if(!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing fields. Failed to edit post.',
    };
  }

  const { title, content, author_id, author_name, published } = validatedFields.data;

  try {
    await sql.transaction([
      sql`UPDATE "Post" SET title = ${title}, content = ${`${content}`},
      published =${`${published}`} WHERE "post_id" = ${`${post_id}`};`,
      sql`UPDATE "User" SET name = ${`${author_name}`}
      WHERE "id" = ${`${author_id}`};`,
    ]);
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to edit post data.');
  }

  revalidatePath('/', 'layout');
  redirect(`/profile/${post_id}`);
  //redirect('/profile');
}

export async function deletePost(post_id: string) {
  try {
    await sql`
      DELETE FROM "Post" WHERE "post_id" = ${`${post_id}`};
    `;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to delete post data.');
  }

  revalidatePath('/', 'layout');
  redirect('/profile');
}
