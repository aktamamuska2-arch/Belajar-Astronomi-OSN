// Bobot frekuensi topik dari analisis soal OSN Astronomi 2025
// (OSN-K, OSN-P, Semifinal, Final; ~110 soal bertag).
export const FREKUENSI: Record<string, number> = {
  'mekanika-langit': 15,
  'radiasi-magnitudo': 14,
  'astronomi-bola': 12,
  'tata-surya': 10,
  'analisis-data': 9,
  kosmologi: 8,
  galaksi: 8,
  bintang: 7,
  instrumen: 7,
  spektroskopi: 6,
  matematika: 5,
  'waktu-kalender': 5,
  mekanika: 5,
  'trigonometri-vektor': 4,
  'gelombang-optik': 3,
  'listrik-modern': 3,
  'evolusi-bintang': 3,
  'bintang-ganda': 3,
  'pengantar-astronomi': 2,
  kalkulus: 2,
}

export function bobotTopik(topik: string): number {
  return FREKUENSI[topik] ?? 1
}
