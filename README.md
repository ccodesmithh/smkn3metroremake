# SMK NEGERI 3 Metro Web Remake

Petunjuk File:
- index -> File Utama
- labs -> Laboratorium atau file eksperimental yang digunakan untuk uji coba sebelum masuk ke file utama
- context -> Konteks yang diberikan ke Masyud
- .gitignore -> File yang diabaikan oleh Git (termasuk .env untuk keamanan)
- vercel.json -> Konfigurasi deploy Vercel

## Setup Backend Proxy

Proyek ini menggunakan backend proxy Node.js untuk aman menggunakan Google Generative AI API.

### Instalasi Lokal

1. Install dependencies:
   ```
   npm install
   ```
### Cara Kerja

- Frontend mengirim pesan ke `/api/chat` via POST.
- Backend membaca `context.txt`, menggabungkan dengan pesan user, dan memanggil Google Generative AI.
- Response dikirim kembali ke frontend.
