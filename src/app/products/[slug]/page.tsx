import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { getProductVarieties } from "@/lib/products-data";

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const productData = getProductVarieties(params.slug);

  if (!productData) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section className="py-12 md:py-20 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <Link href="/products">
              <Button variant="ghost" className="mb-8">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Kembali ke Produk
              </Button>
            </Link>

            <div className="text-center mb-12">
              <h1 className="text-4xl font-headline font-bold text-foreground md:text-5xl">
                {productData.name}
              </h1>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                {productData.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {productData.varieties.map((variety) => (
                <Card key={variety.name} className="overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                  <CardHeader className="p-0">
                    <Image
                      src={variety.image}
                      alt={variety.name}
                      width={400}
                      height={300}
                      className="object-cover w-full h-56"
                    />
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-2xl font-headline m-0 p-0 leading-tight">
                        {variety.name}
                      </CardTitle>
                      <span className="text-l font-bold text-primary whitespace-nowrap ml-2">
                        {variety.price}
                      </span>
                    </div>
                    <CardDescription className="mb-4">
                      {variety.description}
                    </CardDescription>
                    <div className="mt-4">
                      <h4 className="font-semibold text-sm mb-2">Keunggulan:</h4>
                      <ul className="space-y-1">
                        {variety.features.map((feature, index) => (
                          <li key={index} className="text-sm text-muted-foreground flex items-start">
                            <span className="mr-2">•</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button className="w-full mt-6">
                      Tambah ke Keranjang
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}