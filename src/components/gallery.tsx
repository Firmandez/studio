"use client"; // ✅ Tambahkan ini karena Carousel butuh interactivity

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// ✅ Gunakan gambar real dari folder public atau placeholder yang lebih baik
const galleryImages = [
  { 
    src: "/img/Gallery/KebunBelakang.jpeg", 
    alt: "Kebun Belakang Sahid Tani" 
  },
  { 
    src: "/img/Gallery/KebunDepan.jpeg", 
    alt: "Kebun Depan Sahid Tani" 
  },
  { 
    src: "/img/Gallery/KebunBelakang3.jpeg", 
    alt: "Bibit Alpukat di Kebun Belakang" 
  },
  { 
    src: "/img/Gallery/KebunDepan3.jpg", 
    alt: "Kebun Depan Sahid Tani dengan Teras" 
  },
  { 
    src: "/img/Gallery/jeruk2.jpg", 
    alt: "Tanaman yang ada di Kebun Depan" 
  },
] as const;

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-headline font-bold text-foreground md:text-5xl">
            Dari Kebun Kami
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Sebuah gambaran tentang kehidupan dan perkembangan di Sahid Tani.
          </p>
        </div>

        {/* Carousel */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {galleryImages.map((image, index) => (
              <CarouselItem 
                key={index} 
                className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
              >
                <Card className="overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group">
                  <CardContent className="flex aspect-square items-center justify-center p-0 relative overflow-hidden">
                    {/* ✅ Image dengan fill untuk better optimization */}
                    <div className="relative w-full h-full">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        quality={85}
                      />
                      {/* ✅ Overlay effect saat hover */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* ✅ Navigation buttons dengan style lebih baik */}
          <CarouselPrevious className="left-2 md:-left-12" />
          <CarouselNext className="right-2 md:-right-12" />
        </Carousel>
      </div>
    </section>
  );
}