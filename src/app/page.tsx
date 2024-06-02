"use client"

import Image from "next/image";
import { Carousel } from "@/components"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <section className="w-full">
        <Carousel />
      </section>
    </main>
  );
}
