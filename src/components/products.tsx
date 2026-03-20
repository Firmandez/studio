import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const products = [
  { name: "Alpukat", 
    description: "Buah tropis yang memiliki pohon hijau dan daun yang mengeluarkan aroma seperti adas manis.", 
    image: "/img/Alpukat/Alpukat-Aligator.jpg", 
    hint: "tanaman alpukat"
  },
  { name: "Anggur", 
    description: "Buah beri yang berasal dari tanaman merambat dari genus Vitis, tumbuh dalam kelompok, dan tersedia dalam berbagai warna seperti merah, hijau, dan ungu.", 
    image: "https://picsum.photos/400/300?random=2", 
    hint: "tanaman anggur" 
  },
  { name: "Apel", 
    description: "Buah bulat dari pohon Malus domestica yang berasal dari Asia Tengah dan dibudidayakan di seluruh dunia.", 
    image: "/img/Apel/Apel-Futsa2.jpg", 
    hint: "tanaman apel" },
];

export default function Products() {
  return (
    <section id="products" className="py-20 md:py-32 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-headline font-bold text-foreground md:text-5xl">
            Bibit dari Kebun Kami
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Sekilas Tentang Beberapa Bibit Tanaman Terpopuler Kami.
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
                    Lihat Semua Produk
                    <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
