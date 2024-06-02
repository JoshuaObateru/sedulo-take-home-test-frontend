"use client"

import Image from "next/image";
import { Carousel, NavBar } from "@/components"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <section className="w-full">
        <NavBar />
        <Carousel />
      </section>
    </main>
  );
}
