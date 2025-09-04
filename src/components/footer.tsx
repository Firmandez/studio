import { Leaf } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Leaf className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold font-headline text-foreground">
              Sahid Tani
            </span>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Sahid Tani. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
