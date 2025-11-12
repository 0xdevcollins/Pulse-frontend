"use client"
import { PulseButton } from "@/components/PulseButton";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";

export const CTA = () => {
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

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 " />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center"
        >
          {/* Icon decoration */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center mb-6"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full blur-xl opacity-30 animate-pulse" />
              <div className="relative bg-gradient-to-r from-blue-500 to-cyan-400 p-4 rounded-full">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
            </div>
          </motion.div>

          {/* Main heading */}
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
          >
            Ready to Transform Your
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-400 bg-clip-text text-transparent">
              Financial Future?
            </span>
          </motion.h2>

          {/* Subheading */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Join thousands of users who are already experiencing the future of finance. 
            Start your journey today and unlock unlimited possibilities.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <PulseButton 
              size="lg" 
              className="!px-8 !py-7 rounded-full !font-bold text-lg shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 group"
            >
              Get Started Free
              <ArrowUpRight className="size-5 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </PulseButton>
            
            <button className="px-8 py-4 rounded-full border-2 border-gray-300 text-gray-700 font-semibold hover:border-gray-400 hover:bg-white hover:shadow-lg transition-all duration-300">
              Schedule a Demo
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};