'use client'
import { siteConfigs } from "@/configs/config";
import { RocketLaunch } from "phosphor-react";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="font-bold flex items-center gap-2">
      <RocketLaunch size={22} weight="fill" className="color-white" />
      <span className="font-bold text-lg tracking-tight">
        {siteConfigs.name}
      </span>
    </Link>
  );
};

export default Logo;
