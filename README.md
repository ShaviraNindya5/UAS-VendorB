# UAS – Vendor B (Distro Modern)

## I. Deskripsi Kasus: “Banyuwangi Marketplace”

Kasus ini mensimulasikan integrasi data untuk aplikasi **Banyuwangi Marketplace**, yaitu dashboard yang mengumpulkan data produk UMKM dari berbagai aplikasi kasir.  
Setiap vendor memiliki struktur data (JSON Schema) yang berbeda, sehingga diperlukan proses parsing dan normalisasi sebelum data dapat digabungkan ke dalam format standar.

Repository ini berisi implementasi **Vendor B**, salah satu penyedia data yang digunakan dalam proses integrasi.

---

## II. Vendor B: Distro Modern

Vendor B menggunakan konsep *distro modern* dengan karakteristik:

- Menggunakan **CamelCase** pada setiap key JSON  
- Menggunakan **Bahasa Inggris**  
- Struktur JSON rapi dan konsisten  
- Field utama: `sku`, `productName`, `price`, `isAvailable`

---

## III. Struktur Output JSON Vendor B

Data JSON Vendor B yang digunakan:

```json
[
  {
    "sku": "TSHIRT-001",
    "productName": "Ijen Crater T-Shirt",
    "price": 75000,
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
