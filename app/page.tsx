"use client";
import React from "react";
import { AppleCardsCarouselDemo } from "@/components/AppleCardsCarouselDemo";
import { TracingBeam } from "@/components/ui/tracing-beam";

const dummyContent = [
  { id: 1, text: "Content 1" },
];

export default function Home() {
  return (
    <div className="pt-6">
      <div className="container mx-auto px-4 text-left">
        <TracingBeam>
          {dummyContent.map((item, index) => (
            <div key={`content-${index}`} className="mb-10">
              <AppleCardsCarouselDemo />
            </div>
          ))}
        </TracingBeam>
      </div>
    </div>
  );
}
