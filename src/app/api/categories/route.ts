// import { NextResponse } from "next/server";
// import pool from "../../lib/db";

// export async function GET() {
//   try {
//     const [rows] = await pool.query("SELECT * FROM category ORDER BY view_priority ASC");

//     return NextResponse.json(rows);
//   } catch (err) {
//     console.error("Error:", err);
//     return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
//   }
// }
import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ message: "Coming soon" }, { status: 200 });
}