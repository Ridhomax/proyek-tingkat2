"use client";
import React from "react";
import { BackgroundGradient } from "@/components/ui/background-gradient";

const products = [
  {
    title: "Kos Botania Garden",
    description:
      "Botania, Belian, Kec. Batam Kota, Kota Batam, Kepulauan Riau 29462.",
    image: "https://i.imgur.com/RDO82tk.jpeg",
    price: "Rp. 850.000,00",
  },
  {
    title: "Kios Taman Raya",
    description: "A classic silhouette with modern comfort.",
    image: "https://i.imgur.com/Oui73K8.jpeg",
    price: "Rp. 1.250.000,00",
  },
  {
    title: "Kos Botania Garden",
    description: "Botania, Belian, Kec. Batam Kota, Kota Batam, Kepulauan Riau 29462.",
    image: "https://i.imgur.com/jNahlD9.jpeg",
    price: "Rp. 950.000,00",
  },
  {
    title: "Kos Botania Garden",
    description: "Botania, Belian, Kec. Batam Kota, Kota Batam, Kepulauan Riau 29462.",
    image: "https://i.imgur.com/jNahlD9.jpeg",
    price: "Rp. 950.000,00",
  },
];

export function BackgroundGradientDemo() {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {products.map((product, index) => (
          <BackgroundGradient
            key={index}
            className="rounded-[22px] max-w-sm w-full p-4 sm:p-6 bg-white dark:bg-zinc-900 flex flex-col justify-between h-[520px]"
          >
            <div className="flex flex-col flex-grow">
              {/* Gambar fix tinggi dan rapi */}
              <img
                src={product.image}
                alt={product.title}
                className="h-[260px] w-full object-cover rounded-md"
              />

              {/* Judul */}
              <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                {product.title}
              </p>

              {/* Deskripsi dibatasi 2 baris */}
              <p className="text-sm text-neutral-600 dark:text-neutral-400 line-clamp-2">
                {product.description}
              </p>
            </div>

            {/* Tombol original */}
            <div>
            <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
              <span>Booking now</span>
              <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                {product.price}
              </span>
            </button>
            </div>
          </BackgroundGradient>
        ))}
      </div>
    </div>
  );
}
