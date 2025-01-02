import Link from "next/link"
import { Button } from "./ui/button"
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs"
import Image from "next/image"
import { FiSearch } from "react-icons/fi"
import { useState } from "react"
// import { Button, buttonVariants } from "@/components/ui/button";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const scrollToTop = () => {
    scrollToSection("top");
  };
    return (
        <div>
            <nav className="p-2">
                <div className="sm:px-12 mx-auto flex items-center justify-between p-4 bg-dark shadow-lg rounded-2xl">
                    {/* Logo and Brand Name */}
                    <Link href={"/"} className="flex flex-row items-center gap-1">
                        <Image
                            src={"/icon.svg"}
                            alt="Routewise"
                            width={40}
                            height={40}
                        />
                        <h1 className="hidden sm:block bg-gradient-to-r from-emerald-300 via-green-500 to-lime-300 bg-clip-text text-2xl tracking-tight text-transparent font-bold hover:scale-105 transition-transform">
                            Routewise
                        </h1>
                    </Link>

                    {/* Auth Buttons */}
                    <div className="flex items-center">
                        <SignedOut>
                            <SignInButton>
                                <Button className="bg-gradient-to-r from-emerald-400 via-green-500 to-lime-400 text-white px-4 py-2 rounded-lg shadow-lg hover:shadow-emerald-500/50 transition-shadow">
                                    Sign in
                                </Button>
                            </SignInButton>
                        </SignedOut>
                        <SignedIn>
                            <UserButton />
                        </SignedIn>
                    </div>
                </div>
            </nav>
            
            {/* Gradient line below the navbar */}
            <div className="w-full h-0.5 bg-gradient-to-r from-emerald-400 via-green-500 to-lime-400"></div>
        </div>
    )
}
