"use client";
import React from "react";
import { RocketLaunch } from "phosphor-react";
import { footerConfig } from "@/configs/config";
import Logo from "@/components/Logo";
import Link from "next/link";

const Footer: React.FC = () => {
  const { description, sections } = footerConfig;

  return (
    <footer
      className="bg-background-primary border-t border-border-color-primary/65"
      id="footer"
    >
      <div className="max-w-7xl mx-auto px-8 py-24">
        <div className="flex lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-80 max-w-full flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <Link
              href="/"
              className="flex gap-2 justify-center md:justify-start items-center text-primary-color"
            >
              <Logo />
            </Link>
            <p className="mt-3 text-sm text-foreground-hsl/70 leading-relaxed">
              {description}
              <br />
              Copyright ©2025 All rights reserved
            </p>
            <Link
              href="https://getRoutewise.com" target="_blank"
              className="inline-block mt-4 text-sm border border-border-color-primary hover:border-border-color-primary/40 hover:text-foreground-hsl/90 hover:bg-background-primary/35 duration-200 cursor-pointer rounded text-foreground-hsl/80 px-2 py-1"
            >
              {/* <div className="flex gap-1 items-center">
                <span className="text-foreground-hsl/55">Built with</span>
                <span className="font-bold text-base-content flex gap-0.5 items-center tracking-tight text-primary-color">
                  <RocketLaunch size={20} weight="fill" />
                  <span className="text-foreground-hsl">Routewise</span>
                </span>
              </div> */}
            </Link>
          </div>
          <div className="flex-grow flex flex-wrap md:pl-24 -mb-10 md:mt-0 mt-10 text-center md:text-left">
            {sections.map((section, index) => (
              <div key={index} className="lg:w-1/3 md:w-1/2 w-full px-4">
                <div className="font-semibold text-foreground-hsl/65 tracking-widest text-sm md:text-left mb-3">
                  {section.title}
                </div>
                <div className="flex flex-col justify-center items-center md:items-start gap-2 mb-10 text-sm">
                  {section.links.map((link, linkIndex) => (
                    <Link
                      key={linkIndex}
                      className="hover:underline"
                      href={link.href}
                    >
                      {link.text}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
