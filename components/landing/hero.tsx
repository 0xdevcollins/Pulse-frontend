"use client"
import { PulseButton } from "@/components/PulseButton";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export function Hero() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    return (
        <div className="min-h-screen relative">
            <div className="min-h-[calc(100vh-250px)] flex flex-col items-center justify-center relative z-10">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="px-6 text-center max-w-4xl mx-auto"
                >
                    <div className="relative z-10">
                        <h1 className="font-bold mb-8 text-4xl md:text-6xl lg:text-7xl leading-[120%]">
                            Bankless, Borderless, and Always on.
                        </h1>
                        <PulseButton size="sm" className="!px-5 !py-7 rounded-full !font-black text-base">
                            Try it now <ArrowUpRight className="size-6" />
                        </PulseButton>
                    </div>
                </motion.div>

                {/* Background Image - Positioned at bottom */}
            </div>
            <Image
                src="/world.svg"
                alt="Pulse Hero"
                width={1000}
                height={1000}
                className="absolute bottom-0 left-1/2 -translate-x-1/2 h-2/5 object-contain z-0 pointer-events-none"
            />
        </div>
    );
}
