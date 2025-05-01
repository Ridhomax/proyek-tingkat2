"use client";
import React from "react";
import { BackgroundGradient } from "@/components/ui/background-gradient";

const products = [
  {
    title: "Air Jordan 4 Retro Reimagined",
    description:
      "The Air Jordan 4 Retro Reimagined Bred will release on Saturday, February 17, 2024.",
    image: "/jordans.webp",
    price: "$100",
  },
  {
    title: "Air Jordan 1 High OG",
    description: "A classic silhouette with modern comfort.",
    image: "/jordans.webp",
    price: "$120",
  },
  {
    title: "Air Jordan 11 Concord",
    description: "One of the most iconic Jordans of all time.",
    image: "/jordans.webp",
    price: "$150",
  },
  {
    title: "Air Jordan 11 Concord",
    description: "One of the most iconic Jordans of all time.",
    image: "/jordans.webp",
    price: "$150",
  },
];

export function BackgroundGradientDemo() {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {products.map((product, index) => (
          <BackgroundGradient
            key={index}
            className="rounded-[22px] max-w-sm w-full p-4 sm:p-10 bg-white dark:bg-zinc-900 flex flex-col justify-between h-[520px]"
          >
            <div>
              <img
                src={product.image}
                alt={product.title}
                height="400"
                width="400"
                className="object-contain"
              />
              <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                {product.title}
              </p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                {product.description}
              </p>
            </div>

            {/* Tombol original */}
            <div>
                <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
          <span>Buy now </span>
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
