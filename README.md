# POI Noise Logger · by ProKuiz

Alat peta untuk POI noise logger: pelan paip, laluan paip, sensor A/B dan lokasi sasaran kebocoran (berkelip), dengan simulasi video.

| Fail | Fungsi |
|---|---|
| `index.html` | Alat utama (peta, pelan JPG/PNG/PDF/DXF, paip, sensor, kira bocor, simulasi, simpan projek) |
| `simulasi.html` | Simulasi demo 46 saat (boleh rakam video .webm) |
| `favicon.svg` | Ikon laman |
| `.nojekyll` | Supaya GitHub Pages terbitkan fail apa adanya |

## Terbitkan di GitHub Pages

1. Log masuk ke GitHub, tekan **New repository**, contohnya nama `poi-noise-logger`, pilih **Public**, tekan **Create repository**.
2. Dalam repo baru, tekan **uploading an existing file**.
3. Extract zip ini dahulu, kemudian seret **semua fail di dalamnya** (bukan folder zip) ke halaman upload. Pastikan `.nojekyll` ikut sekali (di Windows, tunjukkan fail tersembunyi jika perlu; jika tertinggal, laman masih berfungsi).
4. Tekan **Commit changes**.
5. Pergi ke **Settings → Pages**. Di **Source** pilih **Deploy from a branch**, branch **main**, folder **/ (root)**, tekan **Save**.
6. Tunggu 1–2 minit. Laman akan berada di:
   - `https://<nama-github-anda>.github.io/poi-noise-logger/`
   - `https://<nama-github-anda>.github.io/poi-noise-logger/simulasi.html`

## Kemas kini

Upload semula `index.html` yang baru ke repo yang sama (Add file → Upload files) dan Commit. Laman dikemas kini dalam beberapa minit.

## Nota

- Data (paip, sensor, bocor) disimpan dalam browser setiap pengguna. Guna **💾 Simpan projek** untuk dapatkan fail projek `.html` yang boleh dibuka terus atau dihantar kepada orang lain.
- Repo **Public** bermaksud sesiapa boleh lihat kod alat ini, tetapi data projek anda tidak disimpan di GitHub.
- Perlukan internet untuk peta satelit (Esri), pembaca PDF dan carian lokasi.

## Pembuka link pendek Google Maps (pilihan, percuma)

Link `maps.app.goo.gl` dalam Excel dibaca secara automatik melalui perkhidmatan awam. Jika ada link yang gagal, atau anda mahu lebih stabil dan peribadi, pasang pembuka link sendiri (±5 minit):

1. Daftar percuma di https://dash.cloudflare.com → **Workers & Pages** → **Create** → **Create Worker** → beri nama (cth `pembuka-link`) → **Deploy**.
2. Tekan **Edit code**, padam kod contoh, tampal isi fail `pembuka-link-worker.js` → **Deploy**.
3. Salin URL Worker (cth `https://pembuka-link.namaanda.workers.dev`).
4. Dalam alat: **⑤ Projek → 🔗 Pembuka link pendek** → tampal URL → **💾 Simpan key**.

Fail `pembuka-link-worker.js` tidak perlu di-upload ke GitHub Pages; ia hanya untuk Cloudflare.
