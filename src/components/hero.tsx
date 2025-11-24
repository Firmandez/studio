import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-[80vh] min-h-[500px] w-full flex items-center justify-center text-center text-white">
      <Image
        src="https://picsum.photos/1920/1080"
        alt="A lush green field of seedlings under the sun"
        data-ai-hint="greenhouse seedlings"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 max-w-4xl px-4">
        <h1 className="text-4xl font-headline font-bold drop-shadow-md md:text-6xl lg:text-7xl">
          Dari Kebun Kami untuk Kebun Anda
        </h1>
        <p className="mt-6 text-lg drop-shadow-sm md:text-xl">
          Temukan berbagai macam bibit tanaman berkualitas tinggi untuk menghidupkan taman Anda.
        </p>
        <div className="mt-8">
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="/products">Lihat Bibit Kami</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
