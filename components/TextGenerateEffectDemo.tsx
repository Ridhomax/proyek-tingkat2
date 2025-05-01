"use client";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const words = `liban group Kios kami terletak di area strategis Taman Raya, tepat berdekatan dengan Sekolah Dasar (SD). Lokasinya ramai oleh lalu lintas orang tua, siswa, dan warga sekitar, terutama pada pagi, siang, dan sore hari. Ini menjadi peluang besar untuk bisnis yang menyasar kebutuhan harian anak sekolah dan keluarga`;

export function TextGenerateEffectDemo() {
  return <TextGenerateEffect words={words} />;
}
