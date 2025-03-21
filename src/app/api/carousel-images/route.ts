import { NextResponse } from "next/server";
import mysql from "mysql2/promise";

export async function GET() {
  try {
    const db = await mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "fxcn",   // Add your MySQL password here
      database: "crazy_offers",
    });

    const [rows] = await db.query(`
      SELECT image_link, priority
      FROM co_carouselimagetable
      ORDER BY priority ASC
    `);

    await db.end();
    return NextResponse.json(rows);
  } catch (error: any) {
    console.error("Error fetching images:", error);
    return NextResponse.json({ error: "Failed to fetch images", details: error.message }, { status: 500 });
  }
}
