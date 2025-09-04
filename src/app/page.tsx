import Header from '@/components/header';
import Hero from '@/components/hero';
import About from '@/components/about';
import Products from '@/components/products';
import Gallery from '@/components/gallery';
import Contact from '@/components/contact';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <Products />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
