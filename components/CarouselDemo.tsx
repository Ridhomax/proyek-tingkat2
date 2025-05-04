"use client";

import { Carousel } from "@/components/ui/carousel";
export function CarouselDemo() {
  const slideData = [
    {
      title: "Taman Raya",
      button: "Rp. 1.250.000,00",
      src: "https://i.imgur.com/Oui73K8.jpeg",
    },
    {
      title: "Botania Garden Tahap 2",
      button: "Rp. 1.250.000,00",
      src: "https://i.imgur.com/jNahlD9.jpeg",
    },
    {
      title: "Botania Garden Tahap 1",
      button: "Rp. 1.250.000,00",
      src: "https://i.imgur.com/RDO82tk.jpeg",
    },
    {
      title: "Taman Raya",
      button: "Rp. 1.250.000,00",
      src: "https://i.imgur.com/Oui73K8.jpeg",
    },
  ];
  return (
    <div className="relative overflow-hidden w-full h-full py-20">
      <Carousel slides={slideData} />
    </div>
  );
}
