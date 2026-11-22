# Inventaris & Arketipe Soal OSN Astronomi

Dokumen ini merupakan hasil riset dan inventarisasi gaya soal, topik, dan arketipe berdasarkan:
1. **Silabus IOAA (International Olympiad on Astronomy and Astrophysics)** dan Adendum Panduan OSN 2026 Jenjang Dikmen.
2. **Karakteristik Soal OSN Astronomi 2025** (OSN-K, OSN-P, Semifinal, dan Final).
3. **Pustaka Bobot Frekuensi Topik** (`content/frekuensi.ts`).

---

## 1. Arketipe Soal Utama

Soal OSN Astronomi tidak sekadar memasukkan angka ke dalam rumus (*plug-and-chug*). Level menengah ke atas dan khususnya **level olimpiade** memiliki ciri khas:

### A. Rantai Multi-Rumus (Multi-Concept Chaining)
Menggabungkan dua hingga tiga konsep berurutan tanpa perantara nilai yang eksplisit:
* **Kepler III + Vis-Viva + Efek Doppler**: Menghitung semi-amplitudo kecepatan radial $K$ dari massa bintang pendamping dan sudut inklinasi $i$.
* **Stefan-Boltzmann + Modulus Jarak + Hukum Kuadrat Terbalik**: Menentukan radius bintang $R$ dari magnitudo tampak $m$, paralaks $p$, suhu efektif $T_{\text{eff}}$, dan koreksi bolometrik $BC$.
* **Hukum Gravitasi + Tekanan Hidrostatis / Teorema Virial**: Menaksir suhu pusat bintang atau waktu keruntuhan gravitasi bebas (*free-fall timescale* $\tau_{\text{ff}} \approx \sqrt{1/(G\rho)}$).
* **Ekspansi Alam Semesta + Parameter Hubble + Jarak Luminositas**: Menghitung pergeseran merah $z$, jarak sudut, dan ukuran fisik objek ekstragalaksi.

### B. Manipulasi Rasio & Eliminasi Simbolik (Symbolic Ratio Manipulation)
Menghilangkan konstanta fisis dengan membandingkan dua keadaan atau membandingkan suatu objek dengan Matahari/Bumi:
* Rasio radius planet terhadap bintang dari kedalaman transit: $\Delta F / F = (R_p / R_*)^2$.
* Rasio luminositas dari skala temperatur dan radius: $L_1 / L_2 = (R_1 / R_2)^2 (T_1 / T_2)^4$.
* Perbandingan fluks pada perihelion vs aphelion: $F_p / F_a = ((1+e)/(1-e))^2$.

### C. Pembacaan Grafik & Diagram Observasional (Graphic / Observational Data)
Mengambil parameter fisika dari kurva terukur (didukung oleh sistem gambar registry SVG):
* **Diagram HR**: Membaca kelas luminositas, titik belok (*turn-off point*) gugus untuk menentukan usia gugus, dan garis iso-radius.
* **Kurva Cahaya Gerhana & Transit**: Membaca periode $P$, durasi total $t_4 - t_1$, durasi datar $t_3 - t_2$, dan rasio temperatur $(T_s / T_p)^4$ dari kedalaman gerhana primer/sekunder.
* **Kurva Rotasi Galaksi**: Membaca kecepatan rotasi datar $v_c$ pada radius luar untuk menghitung fraksi massa halo materi gelap $M(r) = v_c^2 r / G$.
* **Diagram Hubble / Spektrum**: Menghitung konstanta Hubble $H_0$ dari gradien grafik kecepatan terhadap jarak, atau mengukur geseran garis emisi/absorpsi $\Delta \lambda / \lambda_0$.

### D. Estimasi Orde Magnitudo & Masalah Fermi (Fermi Problems)
Membuat asumsi fisis yang masuk akal ketika parameter tidak diberikan secara lengkap:
* Estimasi massa atmosfer planet dari tekanan permukaan dan gravitasi.
* Estimasi jumlah foton yang mengenai detektor CCD per detik untuk bintang magnitudo tertentu.
* Estimasi umur hidup deret utama bintang berdasarkan fraksi massa hidrogen di inti yang dapat difusi ($\tau_{\text{MS}} \approx 10^{10} (M/M_\odot)^{-2.5}\text{ tahun}$).

---

## 2. Struktur Distribusi 30 Soal per Bab

Setiap bab dari 19 bab dirancang seragam memenuhi standar:
* **Total:** 30 soal per bab (19 bab × 30 = **570 soal**)
* **Distribusi Level:**
  * 6 Fondasi
  * 9 Menengah
  * 9 Penalaran
  * **6 Olimpiade**
* **Distribusi Tipe:**
  * 12 Pilihan Ganda (`pilihan-ganda`)
  * 4 Pilihan Jamak (`pilihan-jamak`)
  * 10 Isian Singkat (`isian`)
  * 4 Esai Terstruktur (`esai`)
* **Spesifikasi Gambar:**
  * Minimal 10 soal per bab wajib memiliki atribut `gambar` yang merujuk pada `GAMBAR_IDS` di `src/components/figures/daftar.ts`.
  * Minimal 4 dari 6 soal level `olimpiade` wajib membaca visual/grafik data.
* **Spesifikasi Pembahasan:**
  * Pembahasan ditulis bertahap (minimal 2 langkah untuk fondasi/menengah, minimal 4 langkah untuk olimpiade).
  * Menampilkan rumus matematika dalam format KaTeX (`$...$` dan `$$...$$`).
  * Soal esai menyertakan rubrik penilaian yang jelas (poin-poin kriteria evaluasi).

---

## 3. Matriks Topik & Gelombang Pengerjaan

| Gelombang | Bab | Judul Bab | Topik Primer | Gambar Terkait di Registry |
|---|---|---|---|---|
| **W1** | **A5** | Radiasi & Magnitudo | `radiasi-magnitudo` | `warna-suhu`, `kurva-benda-hitam`, `tangga-magnitudo`, `modulus-jarak-grafik` |
| **W1** | **L1** | Sifat Dasar & Spektroskopi Bintang | `bintang`, `spektroskopi` | `hr-skematis`, `hr-iso-radius`, `spektrum-absorpsi`, `spektrum-emisi`, `doppler-geser` |
| **W1** | **A4** | Mekanika Langit & Orbit | `mekanika-langit` | `elips-orbit`, `transfer-hohmann`, `kepler-loglog`, `orbit-lingkaran-rasio` |
| **W2** | **A2** | Waktu, Kalender & Gerak Semu | `waktu-kalender` | `fase-bulan`, `gerhana-geometri` |
| **W2** | **A6** | Teleskop & Detektor | `instrumen` | `refraktor`, `pola-airy` |
| **W2** | **L6** | Analisis Data & Pengolahan Observasi | `analisis-data` | `kurva-transit-data`, `kurva-cahaya-variabel`, `skala-log` |
| **W2** | **A1** | Astronomi Bola | `astronomi-bola` | `bola-langit`, `segitiga-bola`, `paralaks-tahunan` |
| **W3** | **F1** | Bahasa Angka Astronom | `matematika`, `analisis-data` | `skala-log`, `kepler-loglog` |
| **W3** | **F3** | Kalkulus & Analisis Data | `kalkulus`, `analisis-data` | `kurva-transit-data`, `skala-log` |
| **W3** | **F4** | Mekanika Newton | `mekanika` | `segitiga-vektor`, `orbit-lingkaran-rasio` |
| **W3** | **L3** | Bintang Ganda & Eksoplanet | `bintang-ganda` | `kurva-gerhana`, `kurva-kecepatan-radial`, `kurva-transit` |
| **W3** | **L5** | Kosmologi & Alam Semesta | `kosmologi` | `ekspansi-redshift`, `hubble-diagram` |
| **W4** | **F2** | Trigonometri & Vektor | `trigonometri-vektor` | `lingkaran-satuan`, `segitiga-vektor` |
| **W4** | **F5** | Gelombang & Optik | `gelombang-optik` | `pola-airy`, `refraktor` |
| **W4** | **F6** | Termodinamika & Fisika Modern | `listrik-modern` | `tingkat-energi-hidrogen`, `kurva-benda-hitam` |
| **W4** | **A3** | Tata Surya | `tata-surya` | `skala-tata-surya`, `fase-bulan` |
| **W4** | **A7** | Matahari & Angin Bintang | `bintang` | `tingkat-energi-hidrogen`, `warna-suhu` |
| **W4** | **L2** | Struktur & Evolusi Bintang | `evolusi-bintang` | `hr-evolusi`, `hr-skematis` |
| **W4** | **L4** | Galaksi & Medium Antarbintang | `galaksi` | `kurva-rotasi`, `lensa-gravitasi` |
