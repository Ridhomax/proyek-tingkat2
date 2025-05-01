"use client";

import { Carousel } from "@/components/ui/carousel";
export function CarouselDemo() {
  const slideData = [
    {
      title: "Taman Raya",
      src: "https://i.imgur.com/Oui73K8.jpeg",
    },
    {
      title: "Botania Garden Tahap 2",
      src: "https://i.imgur.com/jNahlD9.jpeg",
    },
    {
      title: "Botania Garden Tahap 1",
      src: "https://i.imgur.com/RDO82tk.jpeg",
    },
    {
      title: "Taman Raya",
      src: "https://i.imgur.com/Oui73K8.jpeg",
    },
  ];
  return (
    <div className="relative overflow-hidden w-full h-full py-20">
      <Carousel slides={slideData} />
    </div>
  );
}
