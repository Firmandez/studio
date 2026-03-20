"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react"; // ✅ Tambah icon X untuk close
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetTitle } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import SahidTaniLogo from "@/app/img/SahidTaniLogo.png"; // ✅ Gunakan alias @

const navLinks = [
  { href: "/#about", label: "Tentang Kami" },
  { href: "/products", label: "Produk" },
  { href: "/#gallery", label: "Galeri" },
  { href: "/#contact", label: "Kontak" },
] as const;

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // ✅ Track mobile menu state

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled ? "bg-background/95 backdrop-blur-md shadow-md" : "bg-background/80 backdrop-blur-sm"
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link 
          href="/" 
          className="flex items-center gap-2 group" 
          aria-label="Sahid Tani Home"
        >
          <div className="relative h-10 w-10">
            <Image 
              src={SahidTaniLogo} 
              alt="Logo Sahid Tani" 
              fill
              className="object-contain transition-transform duration-300 group-hover:scale-110"
              sizes="40px"
              priority // ✅ Logo penting, load prioritas
            />
          </div>
          <span className="text-2xl font-bold font-headline text-foreground group-hover:text-primary transition-colors">
            Sahid Tani
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-base font-medium text-muted-foreground transition-colors hover:text-primary relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[350px]">
              {/* ✅ Header dengan close button */}
              <div className="flex items-center justify-between mb-8">
                <SheetTitle className="text-xl font-bold font-headline">
                  Menu
                </SheetTitle>
                <SheetClose asChild>
                  <Button variant="ghost" size="icon" aria-label="Close menu">
                    <X className="h-5 w-5" />
                  </Button>
                </SheetClose>
              </div>

              {/* Logo di mobile menu */}
              <Link 
                href="/" 
                className="flex items-center gap-2 mb-8 group"
                onClick={() => setIsOpen(false)}
              >
                <div className="relative h-10 w-10">
                  <Image 
                    src={SahidTaniLogo} 
                    alt="Logo Sahid Tani" 
                    fill
                    className="object-contain"
                    sizes="40px"
                  />
                </div>
                <span className="text-xl font-bold font-headline text-foreground">
                  Sahid Tani
                </span>
              </Link>

              {/* Navigation Links */}
              <nav className="flex flex-col gap-4" aria-label="Mobile navigation">
                {navLinks.map((link) => (
                  <SheetClose asChild key={link.href}>
                    <Link
                      href={link.href}
                      className="text-lg font-medium text-muted-foreground transition-colors hover:text-primary py-2 px-4 rounded-lg hover:bg-secondary/50"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </SheetClose>
                ))}
              </nav>

              {/* ✅ Divider & Additional Info (Opsional) */}
              <div className="mt-8 pt-8 border-t">
                <p className="text-sm text-muted-foreground text-center">
                  © {new Date().getFullYear()} Sahid Tani
                </p>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}