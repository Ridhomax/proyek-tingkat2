"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              Property  <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Liban Group
              </span>
            </h1>
          </>
        }
      >
        <img
          src={`https://i.imgur.com/jm3Ej96.png`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-center-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
