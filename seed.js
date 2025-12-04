const fs = require("fs");
const pool = require("./db");

async function seed() {
  try {
    const raw = fs.readFileSync("./data.json", "utf8");
    const products = JSON.parse(raw);

    // Hapus data lama dulu (optional)
    await pool.query("DELETE FROM vendor_b");

    for (const p of products) {
      await pool.query(
        `INSERT INTO vendor_b (sku, product_name, price, is_available)
         VALUES ($1, $2, $3, $4)`,
        [p.sku, p.productName, p.price, p.isAvailable]
      );
    }

    console.log("Seeding selesai! Data berhasil dimasukkan ke NeonDB.");
    process.exit(0);
  } catch (err) {
    console.error("Gagal saat seeding:", err);
    process.exit(1);
  }
}

seed();

