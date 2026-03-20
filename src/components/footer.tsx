import Image from "next/image";
import Link from "next/link";
import SahidTaniLogo from "@/app/img/SahidTaniLogo.png"; // ✅ Gunakan alias @

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo & Brand */}
          <Link 
            href="/" 
            className="flex items-center gap-2 mb-4 md:mb-0 group"
          >
            <div className="relative h-10 w-10">
              <Image 
                src={SahidTaniLogo} 
                alt="Logo Sahid Tani" 
                fill
                className="object-contain transition-transform duration-300 group-hover:scale-110"
                sizes="40px"
              />
            </div>
            <span className="text-xl font-bold font-headline text-foreground group-hover:text-primary transition-colors">
              Sahid Tani
            </span>
          </Link>
          
          {/* Copyright */}
          <p className="text-sm text-muted-foreground text-center md:text-right">
            © {currentYear} Sahid Tani. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}