# Ilustrasi Alur Kerja AI di Proyek SMK Negeri 3 Metro

## Pendahuluan

Proyek web remake SMK Negeri 3 Metro ini mengintegrasikan kecerdasan buatan (AI) untuk fitur chat interaktif menggunakan Google Generative AI. Alur kerja AI di sini mencakup pengumpulan konteks, integrasi API, interaksi frontend-backend, evaluasi, dan deployment ke platform Vercel untuk akses publik. Dokumen ini mengilustrasikan langkah-langkah alur kerja tersebut secara visual dan deskriptif, disesuaikan dengan arsitektur proyek yang menggunakan Node.js sebagai backend proxy untuk keamanan API.

## Alur Kerja AI: Diagram dan Langkah-Langkah

Berikut adalah ilustrasi alur kerja AI dalam bentuk diagram ASCII sederhana, diikuti penjelasan langkah demi langkah. Alur ini fokus pada generative AI untuk respons chat dinamis.

```
[1. Pengumpulan Konteks] --> [2. Integrasi API] --> [3. Frontend-Backend Flow] --> [4. Evaluasi] --> [5. Deployment]
       |                           |                           |                           |                           |
       v                           v                           v                           v                           v
   context.txt                 server.js                   index.html + main.js       Testing Manual            Vercel Platform
   (Data statis)               (Node.js proxy)            (UI Chat)                  (Respons AI)              (Hosting)
```

### 1. Pengumpulan Konteks (Data Preparation)
   - **Deskripsi**: Langkah awal adalah mengumpulkan dan menyusun data konteks yang akan digunakan AI untuk menghasilkan respons yang relevan. Di proyek ini, konteks disimpan dalam file `context.txt`, yang berisi informasi statis tentang SMK Negeri 3 Metro (misalnya, deskripsi sekolah, jurusan, atau aturan umum).
   - **Proses**:
     - Edit `context.txt` secara manual untuk menambahkan atau memperbarui informasi.
     - Pastikan data bersih, akurat, dan tidak mengandung informasi sensitif.
   - **Tujuan**: Memberikan dasar pengetahuan bagi AI agar respons lebih kontekstual dan sesuai dengan tema SMK.

### 2. Integrasi API (Model Training/Setup)
   - **Deskripsi**: Integrasi dengan Google Generative AI API dilakukan melalui backend Node.js (`server.js`). Backend bertindak sebagai proxy untuk menghindari paparan kunci API di frontend.
   - **Proses**:
     - Instal dependensi: Jalankan `npm install` untuk mengunduh paket seperti `@google/generative-ai`.
     - Konfigurasi API: Set kunci API Google Generative AI di environment variable (misalnya, `GOOGLE_API_KEY`).
     - Kode utama di `server.js`: Membaca `context.txt`, menggabungkan dengan pesan user, dan memanggil API untuk generate respons.
   - **Tujuan**: Memastikan AI dapat memproses input dan menghasilkan output tanpa risiko keamanan.

### 3. Frontend-Backend Flow (Inference/Interaction)
   - **Deskripsi**: Interaksi antara frontend (HTML/CSS/JS) dan backend untuk alur chat real-time.
   - **Proses**:
     - User mengirim pesan via form di `index.html` atau `labs/index.html`.
     - Frontend mengirim POST request ke `/api/chat` (ditangani oleh `server.js`).
     - Backend memproses: Gabungkan pesan user dengan konteks dari `context.txt`, kirim ke Google Generative AI, dan kembalikan respons JSON.
     - Frontend tampilkan respons di UI (misalnya, menggunakan JavaScript di `main.js`).
   - **Tujuan**: Membuat pengalaman chat interaktif di mana AI merespons berdasarkan konteks SMK.

### 4. Evaluasi (Testing and Validation)
   - **Deskripsi**: Menguji performa AI untuk memastikan respons akurat, relevan, dan aman.
   - **Proses**:
     - Jalankan server lokal: `npm start` atau `node server.js`.
     - Test manual: Kirim berbagai pesan (misalnya, pertanyaan tentang jurusan SMK) dan periksa respons.
     - Evaluasi: Pastikan AI tidak menghasilkan konten berbahaya, respons sesuai konteks, dan tidak ada error API.
     - Jika ada masalah, edit `context.txt` atau `server.js` untuk perbaikan.
   - **Tujuan**: Memvalidasi bahwa alur kerja AI berfungsi dengan baik sebelum deployment.

### 5. Deployment ke Vercel
   - **Deskripsi**: Deploy aplikasi ke Vercel untuk hosting serverless, memungkinkan akses publik tanpa server fisik.
   - **Prasyarat**:
     - Akun Vercel (daftar di vercel.com).
     - Vercel CLI terinstall: `npm install -g vercel` (jika belum ada).
     - Proyek sudah diinisialisasi Git (untuk deployment otomatis).
   - **Langkah Deployment**:
     1. Login ke Vercel: `vercel login`.
     2. Deploy: `vercel --prod` (untuk production).
     3. Konfirmasi: Vercel akan mendeteksi `vercel.json` untuk konfigurasi (misalnya, rewrite untuk API routes).
     4. Verifikasi: Akses URL yang diberikan Vercel (misalnya, https://smk-negri-3-metro.vercel.app) dan test fitur chat AI.
   - **Tujuan**: Membuat aplikasi AI dapat diakses secara global dengan skalabilitas tinggi.

## Kesimpulan

Alur kerja AI ini menjadikan proyek SMK Negeri 3 Metro lebih interaktif dengan fitur chat berbasis generative AI. Dengan fokus pada keamanan (via backend proxy), relevansi (via konteks), dan kemudahan deployment (via Vercel), aplikasi dapat memberikan pengalaman belajar yang dinamis. Untuk pengembangan lanjutan, pertimbangkan penambahan fitur seperti logging respons AI atau integrasi dengan database untuk konteks dinamis.

Jika ada perubahan atau penambahan, edit file ini atau hubungi tim pengembang.
