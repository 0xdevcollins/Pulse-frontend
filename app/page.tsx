"use client"
import { Navbar } from "@/components/landing/navbar";
import { Hero } from "@/components/landing/hero";
import { Features } from "@/components/landing/features";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Features />
    </div>
  );
}
