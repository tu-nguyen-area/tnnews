import { db } from "@vercel/postgres";

const client = await db.connect();

async function listUser() {
  const data = await client.sql`
    SELECT * FROM "User" WHERE email = 'tu@gmail.com';
  `;

  return data.rows;
}

async function listAuthor() {
  const data = await client.sql`
    SELECT "User"."name" FROM "User" WHERE "User"."user_id" = '47d555f3-72ce-4df1-aa3f-912567d3556b';
  `;

  return data.rows;
}

export async function GET() {
  try {
    return Response.json(await listUser());
    return Response.json(await listAuthor());
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}