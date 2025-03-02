'use server';

import { genSaltSync, hashSync } from 'bcrypt-ts';
import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL!);

export async function getUser(email: string) {
  try {
    const data = await sql`
      SELECT * FROM "User"
      WHERE "email" = ${`${email}`};
    `;

    return data;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch user data.');
  }
}

export async function createUser(email: string, password: string) {
  const salt = genSaltSync(10);
  const hash = hashSync(password, salt);
  const name = email;

  try {
    await sql`
      INSERT INTO "User" (name, email, password)
      VALUES(${name}, ${email}, ${hash});
    `;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to create user.');
  }
}

export async function fetchPost() {
  try {
    const data = await sql`
      SELECT * FROM "Post" JOIN "User"
      ON "Post"."author_id" = "User"."id"
      WHERE "Post"."published" = 'TRUE'
      ORDER BY "date" DESC;
    `;

    return data;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch post data.');
  }
}

export async function fetchPostProfile(id: string) {
  try {
    const data = await sql`
      SELECT * FROM "Post" JOIN "User"
      ON "Post"."author_id" = "User"."id"
      WHERE "Post"."author_id" = ${`${id}`}
      ORDER BY "date" DESC;
    `;

    return data;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch profile data');
  }
}

export async function fetchEachPost(post_id: string) {
  try {
    const data = await sql`
      SELECT * FROM "Post" JOIN "User"
      ON "Post"."author_id" = "User"."id"
      WHERE "Post"."post_id" = ${`${post_id}`};
    `;

    return data;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch each post data.');
  }
}
