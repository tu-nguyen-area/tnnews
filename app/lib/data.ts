import { sql } from '@vercel/postgres';

export async function fetchPost() {
  try {
    const data = await sql`
      SELECT * FROM "Post" JOIN "User"
      ON "Post"."author_id" = "User"."user_id";
    `;

    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch Post data.');
  }
}

export async function fetchEachPost(post_id: string) {
  try {
    const data = await sql`
      SELECT * FROM "Post" JOIN "User"
      ON "Post"."author_id" = "User"."user_id"
      WHERE "Post"."post_id" = ${`${post_id}`};
    `;

    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch Each Post data.');
  }
}

//export async function fetchPost() {
//  try {
//    const data = await sql`SELECT * FROM "Post"`;

//    return data.rows;
//  } catch (error) {
//    console.error('Database Error:', error);
//    throw new Error('Failed to fetch Post data.');
//  }
//}

//export async function fetchAuthor(author_id: string) {
//  try {
//    const data = await sql`
//      SELECT "User"."name" FROM "User"
//      WHERE "User"."user_id" = ${`${author_id}`};
//    `;
//  } catch (error) {
//    console.error('Database Error:', error);
//    throw new Error('Failed to fetch Author data.');
//  }
//}