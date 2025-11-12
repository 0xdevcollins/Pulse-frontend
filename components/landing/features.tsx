"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import {  Shield, Zap, Globe, Lock } from "lucide-react"

export function Features() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 }
    }

    const features = [
        {
            id: 1,
            title: "Instant Off-Ramp",
            description: "Swap USDT, USDC, cNGN and other stablecoins to local currency instantly with competitive rates.",
            icon: Shield,
            color: "from-blue-500 to-cyan-400",
            bgColor: "bg-blue-50",
            textColor: "text-white",
            image: "/security.png",
            span: "row-span-2"
        },
        {
            id: 2,
            title: "Lightning Fast",
            description: "Instant transactions and real-time balance updates across all platforms.",
            icon: Zap,
            color: "from-yellow-400 to-orange-500",
            bgColor: "bg-white",
            textColor: "text-gray-900",
            image: "/instant.png",
            span: "row-span-1"
        },
        {
            id: 3,
            title: "Card Management",
            description: "Order and track your physical Pulse card with real-time spending controls and security features.",
            icon: Globe,
            color: "from-green-500 to-emerald-400",
            bgColor: "bg-white",
            textColor: "text-gray-900",
            image: "/card.png",
            span: "row-span-1"
        },
        {
            id: 4,
            title: "Savings Plans",
            description: "Create and manage savings plans effortlessly to stay on top of your financial goals.",
            icon: Lock,
            color: "from-purple-500 to-pink-400",
            bgColor: "bg-white",
            textColor: "text-gray-900",
            image: "/savings.png",
            span: "row-span-1"
        },
        {
            id: 5,
            title: "Global Reach",
            description: "Connect with users worldwide through our borderless payment network. Send money anywhere, anytime.",
            icon: Globe,
            color: "from-red-500 to-rose-400",
            bgColor: "bg-white",
            textColor: "text-gray-900",
            image: "/world.png",
            span: "row-span-1"
        },
    ]

    return (
        <section className="py-20 px-6 max-w-7xl mx-auto">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="text-center mb-16"
            >
                <motion.h2
                    variants={itemVariants}
                    className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
                >
                    Why Choose Pulse?
                </motion.h2>
            </motion.div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4"
            >
                {features.map((feature) => {
                    return (
                        <motion.div
                            key={feature.id}
                            variants={itemVariants}
                            className={`${feature.span} relative overflow-hidden ${
                                feature.id === 1 ? 'bg-gradient-primary rounded-[12px] rounded-l-[28px]' :
                                feature.id === 3 ? 'rounded-[12px] rounded-tr-[28px]' :
                                feature.id === 5 ? 'rounded-[12px] rounded-br-[28px]' :
                                'rounded-[12px]'
                            } p-6 md:p-8 bg-white group hover:scale-105 transition-all duration-300 cursor-pointer flex flex-col-reverse justify-between`}
                        >
                            {/* <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`} /> */}

                            <div className="relative z-10">
                                <h3 className={`text-2xl font-bold mb-4 ${feature.textColor}`}>
                                    {feature.title}
                                </h3>

                                <p className={`text-lg ${feature.textColor} opacity-80 leading-relaxed`}>
                                    {feature.description}
                                </p>
                            </div>
                            
                            <Image
                                src={feature.image}
                                alt={feature.title}
                                width={128}
                                height={128}
                                className="w-[128px] h-[128px] object-cover duration-300"
                            />

                            <div className={`absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-900 opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                        </motion.div>
                    )
                })}
            </motion.div>
        </section>
    )
}
