import "dotenv/config";
import { neon } from "@neondatabase/serverless";

async function main() {
  const databaseUrl = process.env.DATABASE_URL;

  if (!databaseUrl) {
    throw new Error("DATABASE_URL no está configurada");
  }

  const sql = neon(databaseUrl);

  const result = await sql`
    SELECT
      NOW() AS current_time,
      version() AS postgres_version
  `;

  console.log("Conexión exitosa con Neon PostgreSQL");
  console.log(result);
}

main().catch((error) => {
  console.error("Error de conexión:", error);
  process.exit(1);
});
