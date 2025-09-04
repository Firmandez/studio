import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const products = [
  { name: "Tomato Seedling", description: "Juicy, ripe tomatoes waiting to grow.", image: "https://picsum.photos/400/300?random=1", hint: "tomato plant" },
  { name: "Basil Seedling", description: "Aromatic basil perfect for any dish.", image: "https://picsum.photos/400/300?random=2", hint: "basil plant" },
  { name: "Chili Pepper Seedling", description: "Spice up your life with homegrown chili.", image: "https://picsum.photos/400/300?random=3", hint: "chili plant" },
];

export default function Products() {
  return (
    <section id="products" className="py-20 md:py-32 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-headline font-bold text-foreground md:text-5xl">
            Our Fresh Seedlings
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            A sneak peek at some of our most popular seedlings.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.name} className="overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="p-0">
                <Image
                  src={product.image}
                  alt={`A healthy ${product.name}`}
                  data-ai-hint={product.hint}
                  width={400}
                  height={300}
                  className="object-cover w-full h-56"
                />
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-2xl font-headline mb-2">{product.name}</CardTitle>
                <CardDescription>{product.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
            <Button asChild size="lg">
                <Link href="/products">
                    View All Products
                    <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
