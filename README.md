# SMK NEGERI 3 Metro Web Remake

Petunjuk File:
- index -> File Utama
- labs -> Laboratorium atau file eksperimental yang digunakan untuk uji coba sebelum masuk ke file utama
- context -> Konteks yang diberikan ke Masyud
\- vercel.json -> Konfigurasi deploy Vercel

## Setup Backend Proxy

Proyek ini menggunakan backend proxy Node.js biiar aman menggunakan Google Generative AI API.

### Instalasi Lokal

Install dependencies:
   ```
   npm install
   ```

### Cara Kerja

- Frontend kirinm pesan ke `/api/chat` via POST.
- Backend membaca `context.txt` menggabungkan dengan pesan user dan memanggil Google Generative AI.
- Response dikirim kembali ke frontend.
