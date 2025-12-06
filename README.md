# UAS – Vendor B (Distro Modern) M2

## I. Deskripsi Kasus: “Banyuwangi Marketplace”

Kasus ini mensimulasikan proyek integrasi data untuk aplikasi **Banyuwangi Marketplace**, yaitu dashboard terpusat yang menyajikan data produk UMKM dari berbagai aplikasi kasir.  
Setiap vendor memiliki struktur data (JSON Schema) yang berbeda, sehingga diperlukan proses parsing dan normalisasi data sebelum dapat digabungkan ke dalam satu format standar.

Repository ini berisi implementasi **Vendor B**, salah satu penyedia data yang harus diintegrasikan.

---

## II. Vendor B: Distro Modern

Vendor B menggunakan konsep *distro modern* dengan karakteristik:

- Seluruh key JSON menggunakan **CamelCase**
- Bahasa yang digunakan adalah **Bahasa Inggris**
- Struktur data lebih menyerupai API e-commerce internasional
- Memiliki field utama seperti `sku`, `productName`, `price`, dan `isAvailable`

---

## III. Struktur Output JSON Vendor B

Data Vendor B yang digunakan dalam project ini sebagai berikut:

```json
[
  {
    "sku": "TECH-451",
    "productName": "Ijen BlueFire Smart LED Lamp",
    "price": 215000,
    "isAvailable": true
  },
  {
    "sku": "WEAR-882",
    "productName": "Gandrung Motion Sensor Fitness Band",
    "price": 178000,
    "isAvailable": true
  },
  {
    "sku": "AUDIO-334",
    "productName": "Red Island Wireless Pocket Speaker",
    "price": 98000,
    "isAvailable": false
  },
  {
    "sku": "ACC-129",
    "productName": "Osing Engraved Stainless Keyholder",
    "price": 59000,
    "isAvailable": true
  },
  {
    "sku": "HOME-721",
    "productName": "Banyuwangi Breeze Aroma Diffuser",
    "price": 145000,
    "isAvailable": true
  }
]
