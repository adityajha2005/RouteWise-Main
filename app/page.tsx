"use client";
// import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { FaCheck, FaGithub } from "react-icons/fa";
import Pricing from "@/components/Pricing";
import { CardHoverEffectDemo } from "@/components/CardHoverEffectDemo";
import { HeroScrollDemo } from "@/components/Heroscroll";
import { HeroHighlightDemo } from "@/components/hero-high";
import { SparklesPreview } from "@/components/sparkleprev";
import { motion } from "framer-motion";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { AnimatedTestimonialsDemo } from "@/components/AnimatedTestimonials ";
import AnimatedImage from "@/components/AnimatedImage";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
// import Footer from "@/components/Footer copy";
export default function Home() {
  return (
    <div className="bg-black text-white">
      <Navbar />

      {/* Sparkles Preview Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <SparklesPreview />
      </motion.div>

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <AnimatedImage
          src="/hero-image.png"
          alt="Image"
          width={1200}
          height={900}
          className="w-full h-auto max-w-6xl mx-auto rounded-2xl shadow-lg"
        />
      </motion.div>

      {/* How It Works Section */}
      <motion.section
        className="flex flex-col items-center mt-32"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div>
          <h2 className="text-4xl font-bold text-foreground dark:text-gray-100">
            ⭐ Features
          </h2>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <CardHoverEffectDemo />
        </motion.div>
      </motion.section>

      {/* Pricing Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <Pricing />
      </motion.div>

      {/* Testimonials Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <AnimatedTestimonialsDemo />
      </motion.div>

      {/* FAQ Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <FAQ />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >

      <Footer />
      </motion.div>
    </div>
  );
}
