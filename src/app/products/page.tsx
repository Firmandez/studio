import Link from "next/link";
import Image from "next/image"; // ✅ Import Next.js Image
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { products } from "@/lib/products-data";

export default function ProductsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section id="products" className="py-20 md:py-32 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h1 className="text-4xl font-headline font-bold text-foreground md:text-5xl">
                Bibit Segar Kami
              </h1>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                Bibit unggulan yang kami rawat dengan sepenuh hati untuk kebun anda.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <Link 
                  href={`/products/${product.slug}`} 
                  key={product.slug}
                  className="group" // ✅ Tambah group untuk hover effect
                >
                  <Card className="overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer h-full group-hover:scale-[1.02]">
                    <CardHeader className="p-0 relative">
                      {/* ✅ Ganti <img> dengan Next.js <Image> */}
                      <div className="relative w-full h-56 overflow-hidden">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-110"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          priority={false} // Lazy load by default
                        />
                      </div>
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-2 gap-2">
                        <CardTitle className="text-2xl font-headline m-0 p-0 leading-tight group-hover:text-primary transition-colors">
                          {product.name}
                        </CardTitle>
                        <span className="text-lg font-bold text-primary whitespace-nowrap flex-shrink-0">
                          {product.price}
                        </span>
                      </div>
                      <CardDescription className="line-clamp-2">
                        {product.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}