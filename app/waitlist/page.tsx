"use client";
import { Star } from "lucide-react";
import Image from "next/image";
import { siteConfigs } from "@/configs/config";
import JoinWaitList from "@/components/ui/waitlist-button";

function Hero() {
  return (
    <div className="pt-20 md:pt-44 lg:pt-44 pb-20 text-center flex flex-col items-center">
      <div className="flex flex-col items-center space-y-4 lg:items-start">
        <h1 className="mx-auto max-w-3xl text-balance font-bold text-5xl lg:text-5xl">
          {siteConfigs.tagline}
        </h1>
        <p className="mx-auto mt-4 max-w-lg text-balance text-foreground/60 text-lg">
          {siteConfigs.description}
        </p>
      </div>

      <div className="mt-6 flex flex-col items-center justify-center gap-3 md:flex-row">
        <JoinWaitList
          text="Join the waitlist"
          toolTipText="Join the waitlist"
        />
      </div>
      <div className="flex items-center gap-4 pt-6">
        <div className="flex -space-x-4">
          <Image
            height={100}
            width={100}
            className="inline-block h-10 w-10 rounded-full ring-2 ring-background"
            src="/images/deeps.png"
            alt="user image"
            draggable={false}
          />
          <Image
            height={100}
            width={100}
            className="inline-block h-10 w-10 rounded-full ring-2 ring-background"
            src="/images/avatar.png"
            alt="user image"
            draggable={false}
          />
          <Image
            height={100}
            width={100}
            className="inline-block h-10 w-10 rounded-full ring-2 ring-background"
            src="/images/manjesh.jpg"
            alt="user image"
            draggable={false}
          />
          <Image
            height={100}
            width={100}
            className="inline-block object-cover h-10 w-10 rounded-full ring-2 ring-background"
            src="/images/vincent.jpg"
            alt="user image"
            draggable={false}
          />
        </div>

        <div className="flex flex-col justify-between">
          <div className="flex gap-0.5">
            <Star className="h-4 w-4 text-amber-400 fill-amber-400" />
            <Star className="h-4 w-4 text-amber-400 fill-amber-400" />
            <Star className="h-4 w-4 text-amber-400 fill-amber-400" />
            <Star className="h-4 w-4 text-amber-400 fill-amber-400" />
            <Star className="h-4 w-4 text-amber-400 fill-amber-400" />
          </div>

          <p className="text-sm font-medium text-foreground mt-1">
            Our users love us
          </p>
        </div>
      </div>
    </div>
  );
}
export default Hero;
