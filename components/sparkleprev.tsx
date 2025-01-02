"use client";
import React from "react";
import { SparklesCore } from "./ui/sparkles";
import Link from "next/link";
import AnimatedGradientText from "./ui/animated-gradient-text";

export function SparklesPreview() {
  return (
    <div className="h-[40rem] relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      <h1 className="flex flex-col items-center text-center mb-5">
      <AnimatedGradientText>
  <Link
  href="https://github.com/adityajha2005/RouteWise-Main"
  className="text-xl md:text-xl sm:text-xl font-semibold tracking-wide text-white cursor-pointer"
  >
    🐧 | Proudly Open Source
  </Link>
    </AnimatedGradientText>

        <div className="md:text-5xl text-3xl lg:text-6xl font-bold text-white relative z-20 mt-6">
          Welcome to{" "}
          <span className="bg-gradient-to-r from-emerald-300 via-green-500 to-lime-300 bg-clip-text tracking-tight text-transparent">
            Routewise
          </span>
        </div>
        <p className="mt-6 text-lg max-w-[35rem] text-gray-300">
          Empower Your Journey: Let AI Craft Your Roadmap. Personalized,
          Efficient, and Future-Forward.
        </p>
        <div className="mt-8 flex justify-center">
          <Link href="/roadmap">
            <button className="bg-black no-underline group cursor-pointer relative shadow-xl shadow-emerald-500/30 rounded-full p-px text-xs font-semibold leading-5 text-white inline-block">
              <span className="absolute inset-0 overflow-hidden rounded-full">
                <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.4)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </span>
              <div className="relative flex space-x-2 items-center z-10 rounded-full bg-gradient-to-r from-emerald-300 via-green-500 to-lime-300 py-2 px-6 ring-1 ring-emerald-400/20 hover:ring-emerald-400 text-sm">
                <span className="font-medium">Get Started</span>
                <svg
                  fill="none"
                  height="16"
                  viewBox="0 0 24 24"
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.75 8.75L14.25 12L10.75 15.25"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
              <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
            </button>
          </Link>
        </div>
      </h1>
    </div>
  );
}
