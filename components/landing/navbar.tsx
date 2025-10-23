"use client"
import Link from "next/link"
import Image from "next/image"
import { PulseButton } from "../PulseButton"
import { ArrowUpRight, Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <motion.nav
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="fixed top-4 left-1/2 -translate-x-1/2 flex justify-between items-center p-3 sm:p-4 w-[calc(100%-2rem)] sm:min-w-3xl sm:max-w-3xl mx-auto backdrop-blur-md bg-black/5 border border-white/20 rounded-full shadow-lg shadow-black/10 ring-1 ring-white/10 z-50"
        >
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
                <Image 
                    src="/logo-black.png" 
                    alt="Pulse Logo" 
                    className="font-bold w-20 h-auto sm:w-30" 
                    width={200} 
                    height={100} 
                />
            </Link>

            {/* Desktop CTA Button */}
            <div className="hidden sm:block">
                <PulseButton size="sm" className="!px-5 !py-7 rounded-full !font-black text-base">
                    Try it now <ArrowUpRight className="size-6" />
                </PulseButton>
            </div>

            {/* Mobile Menu Button */}
            <button
                onClick={toggleMenu}
                className="sm:hidden p-2 rounded-full hover:bg-white/10 transition-colors"
                aria-label="Toggle menu"
            >
                {isMenuOpen ? (
                    <X className="size-6" />
                ) : (
                    <Menu className="size-6" />
                )}
            </button>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 right-0 mt-2 mx-4 sm:hidden"
                    >
                        <div className="backdrop-blur-md bg-black/10 border border-white/20 rounded-2xl shadow-lg shadow-black/10 ring-1 ring-white/10 p-4">
                            <PulseButton 
                                size="sm" 
                                className="w-full !px-5 !py-7 rounded-full !font-black text-base"
                            >
                                Try it now <ArrowUpRight className="size-6" />
                            </PulseButton>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    )
}