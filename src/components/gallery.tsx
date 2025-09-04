import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const galleryImages = [
  { src: "https://picsum.photos/800/600?random=11", hint: "greenhouse interior" },
  { src: "https://picsum.photos/800/600?random=12", hint: "rows seedlings" },
  { src: "https://picsum.photos/800/600?random=13", hint: "watering plants" },
  { src: "https://picsum.photos/800/600?random=14", hint: "sunlight plants" },
  { src: "https://picsum.photos/800/600?random=15", hint: "farmer hands" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-headline font-bold text-foreground md:text-5xl">
            From Our Fields
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            A glimpse into the life and growth at Sahid Tani.
          </p>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {galleryImages.map((image, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="overflow-hidden">
                    <CardContent className="flex aspect-square items-center justify-center p-0">
                      <Image
                        src={image.src}
                        alt={`Gallery image ${index + 1}`}
                        data-ai-hint={image.hint}
                        width={800}
                        height={600}
                        className="object-cover w-full h-full"
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
