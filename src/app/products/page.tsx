import Image from "next/image";
import Link from "next/link";
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
                Our Fresh Seedlings
              </h1>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                Choose from our carefully nurtured selection of seedlings to start your garden.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <Link href={`/products/${product.slug}`} key={product.slug}>
                  <Card className="overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer h-full">
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
                      <div className="flex justify-between items-start mb-2">
                        <CardTitle className="text-2xl font-headline m-0 p-0 leading-tight">
                          {product.name}
                        </CardTitle>
                        <span className="text-l font-bold text-primary whitespace-nowrap">
                          {product.price}
                        </span>
                      </div>
                      <CardDescription>{product.description}</CardDescription>
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