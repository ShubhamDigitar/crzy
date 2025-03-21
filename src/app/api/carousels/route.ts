import { NextRequest, NextResponse } from "next/server";
import mysql from "mysql2/promise";

export async function GET(req: NextRequest) {
  try {
   //mysql conncetion
    const db = await mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "fxcn",               
      database: "crazy_offers",   
    });

    // debug :: to check tables db me hai ki nahi
    
    // const [rows] = await db.query(`SHOW TABLES;`);
    // console.log("Tables in database:", rows);  

    // company fetch
    const [companies] = await db.query(`
      SELECT id, name, image_url
      FROM co_companynametable
    `);
    // console.log("Companies:", companies);  

    // fetch prodcust compnay wise
    const companiesWithProducts = await Promise.all(
      (companies as any[]).map(async (company) => {
        const [products] = await db.query(`
          SELECT id, title, description, price, link, image_url, created_at
          FROM co_carouselproductcardtable
          WHERE company_id = ?
        `, [company.id]);

        console.log(`Products for ${company.name}:`, products); 

        return {
          id: company.id,
          name: company.name,
          image_url: company.image_url,
          products: products,
        };
      })
    );

    await db.end();

   //repsonse
    return NextResponse.json(companiesWithProducts, { status: 200 });

  } catch (error) {
    console.error("Error fetching carousels:", error);
    return NextResponse.json({ error: "Failed to fetch carousel data" }, { status: 500 });
  }
}
