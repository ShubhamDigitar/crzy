import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: "localhost", 
  user: "root",     
  password: "fxcn", 
  database: "crazy_offers", 
  waitForConnections: true,
  connectionLimit: 10,
});

export default pool;
