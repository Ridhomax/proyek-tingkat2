"use client";

import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Get to know your iSad.
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                Peraturan Kost / Kios Liban Group.
              </span>{" "}
              <br />
              1. Tamu:
              <br />
              - Dilarang menerima tamu di dalam kos tanpa izin dari pengelola.
              - Tamu yang diizinkan hanya boleh berada di ruang tamu dan tidak diperbolehkan masuk ke dalam kamar penghuni.
              <br />
              2. Kebersihan dan Pengelolaan Sampah:
              <br />
              - Dilarang memiliki tong sampah di dalam kamar atau area kos, kecuali yang telah disediakan di tempat tertentu.
              - Penghuni kos diharapkan untuk membuang sampah pada tempat yang telah ditentukan dan mengikuti jadwal pembersihan.
              <br />
              3. Penyimpanan Barang:
              <br />
              - Semua barang milik penghuni kos harus disimpan di kamar masing-masing.
              - Penghuni kos bertanggung jawab atas keamanan dan kerapian barang-barang pribadi.

              Pastikan untuk mempertimbangkan kebutuhan dan kenyamanan penghuni kos saat membuat peraturan. Jika perlu, kamu bisa melakukan penyesuaian untuk meningkatkan kepatuhan dan kenyamanan bersama..
            </p>
            <img
              src="https://i.imgur.com/jm3Ej96.png"
              alt="Liban Group"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "Taman Raya ",
    title: "Sewa Kios.",
    src: "https://i.imgur.com/Oui73K8.jpeg",
    content: <DummyContent />,
  },
  {
    category: "Botania Garden",
    title: "Sewa Kos.",
    src: "https://i.imgur.com/jNahlD9.jpeg",
    content: <DummyContent />,
  },
  {
    category: "Botania Garden", 
    title: "Sewa Kos.",
    src: "https://i.imgur.com/RDO82tk.jpeg",
    content: <DummyContent />,
  },

  {
    category: "Botania Garden",
    title: "Sewa Kos.",
    src: "https://i.imgur.com/RDO82tk.jpeg",
    content: <DummyContent />,
  },
  {
    category: "Botania Garden",
    title: "Sewa Kos.",
    src: "https://i.imgur.com/jNahlD9.jpeg",
    content: <DummyContent />,
  },
  {
    category: "Taman Raya",
    title: "Sewa Kios.",
    src: "https://i.imgur.com/Oui73K8.jpeg",
    content: <DummyContent />,
  },
];
