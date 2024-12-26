import React from "react";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { FiAlignJustify } from "react-icons/fi";
import { ModeToggle } from "./theme-btn";
const Header = () => {
  return (
    <nav className="p-4 bg-background/50 sticky top-0 backdrop-blur border-b">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <div className="text-lg font-bold font-serif">Future Syntax</div>
        </Link>

        <div className="hidden md:flex space-x-4 items-center">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <Link href="/Blog" className="hover:underline">
            Blog
          </Link>
          <Link href="/About" className="hover:underline">
            About
          </Link>
          <Link href="/Contact" className="hover:underline">
            Contact
          </Link>

          <ModeToggle />
        </div>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger>
              <FiAlignJustify className="text-2xl" />
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col items-center space-y-4 p-4">
                <Link href="/" className="hover:underline">
                  Home
                </Link>
                <Link href="/Blog" className="hover:underline">
                  Blog
                </Link>
                <Link href="/About" className="hover:underline">
                  About
                </Link>
                <Link href="/Contact" className="hover:underline">
                  Contact
                </Link>
                <ModeToggle />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Header;
