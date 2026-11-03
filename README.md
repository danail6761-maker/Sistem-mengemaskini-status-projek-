# Pengemaskini Status Perlaksanaan Projek Dibawah Peruntukan Pembangunan (P55)

Sistem web untuk mengemaskini status pelaksanaan projek P55 (Jabatan Kerja Raya) dan menjana **Laporan Single Page** bagi setiap projek.

## Fungsi

- **Senarai projek** dikumpulkan mengikut program (41000 – 49000), dengan ringkasan peruntukan, belanja, baki, peratus belanja dan tapisan status pelaksanaan.
- **Laporan Single Page** dalam susunan A4 asal: maklumat projek, status terkini (fizikal, kewangan, perbelanjaan dan baki), bayaran kemajuan, aktiviti, isu, skop, peta dan gambar.
- **Borang kemaskini**: Maklumat Projek → Status Terkini → Bayaran → Aktiviti/Isu/Catatan → Gambar. Nilai RM diformat dengan koma secara automatik. Baki dikira sendiri (peruntukan − tanggungan − belanja).
- **Lampu status** (hijau / kuning / merah) dikira daripada beza fizikal. Had boleh diubah dalam "Tetapan lampu status".
- **Sejarah kemaskini** dengan graf kemajuan fizikal.
- **Muat turun PPTX**: menjana slaid A4 sehalaman.

## Cara guna

Buka `index.html` melalui GitHub Pages atau mana-mana pelayan web statik:

```bash
python3 -m http.server 8000
```

Kemudian layari `http://localhost:8000`.

### Penyimpanan data

Di luar claude.ai, data disimpan dalam **pelayar pengguna** (localStorage) dan dimulakan daripada `data/seed.json`.

- **Eksport data**: simpan semua projek ke fail JSON (sandaran atau untuk dikongsi).
- **Import data**: muatkan fail JSON yang dieksport.
- Untuk mengemaskini data permulaan bagi semua pengguna, gantikan `data/seed.json` dengan fail eksport terkini dan commit ke repo ini. Pengguna yang sudah ada data dalam pelayar perlu Import fail itu.

Apabila dibuka sebagai artifact di claude.ai, sistem menggunakan pangkalan data dikongsi claude.ai. Semua pengguna yang diberi akses melihat data yang sama.

## Struktur

| Fail | Kandungan |
|---|---|
| `index.html` | Keseluruhan aplikasi (HTML, CSS, JavaScript) |
| `data/seed.json` | Data projek P55 (setakat 30 Sept 2026) |
| `img/` | Peta dan gambar tapak projek |

Sumber data: *Laporan Peruntukan Pembangunan Negeri Tahun 2026 (P55), 30 Sept 2026* dan *Laporan Single Page N101 (Nov 2025)*.
