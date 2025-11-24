import Image from "next/image";
import { Sprout, Leaf, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const values = [
  {
    icon: Sprout,
    title: "Tumbuh dengan Kualitas",
    description: "Dari setiap bibit yang kami tanam, kami berkomitmen menghadirkan pertumbuhan yang tangguh dan sehat melalui sentuhan ahli di setiap langkah perawatan.",
  },
  {
    icon: Leaf,
    title: "Menanam untuk Masa Depan",
    description: "Setiap langkah pertanian kami dirancang agar selaras dengan alam, menjaga kelestarian bumi untuk generasi yang akan datang.",
  },
  {
    icon: Heart,
    title: "Dukungan Sepenuh Hati Melayani",
    description: "Dukungan kami tidak hanya sekadar layanan kami menjadi mitra yang setia dalam membantu Anda tumbuh dan berhasil di dunia tanaman.",
  },
]

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-headline font-bold text-foreground md:text-5xl">
              Cerita Perkebunan Kami
            </h2>
            <p className="text-lg text-muted-foreground">
              Sahid Tani lahir dari kecintaan terhadap alam dan keinginan untuk membuat berkebun menjadi lebih mudah diakses oleh semua orang. Kami percaya bahwa merawat tanaman adalah pengalaman yang memuaskan, dan misi kami adalah menyediakan bibit berkualitas tinggi untuk membantu Anda menciptakan taman impian Anda.
            </p>
            <p className="text-lg text-muted-foreground">
            Berawal dari langkah sederhana, kami telah tumbuh menjadi mitra terpercaya bagi para pekebun, perancang lanskap, dan penggemar tanaman, tanpa meninggalkan nilai-nilai dasar yang kami junjung.
            </p>
          </div>
          <div>
            <Image
              src="https://picsum.photos/600/700"
              alt="Close-up of a person's hands holding a small seedling with soil"
              data-ai-hint="hands seedling"
              width={600}
              height={700}
              className="rounded-xl shadow-lg object-cover"
            />
          </div>
        </div>
        <div className="mt-20">
          <h3 className="text-3xl font-headline font-bold text-center text-foreground mb-12">
            Nilai-Nilai Utama Kami
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value) => (
              <Card key={value.title} className="text-center bg-card shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="mb-4 inline-flex items-center justify-center rounded-full bg-primary/20 p-4">
                    <value.icon className="h-10 w-10 text-primary" />
                  </div>
                  <h4 className="text-2xl font-bold font-headline mb-2 text-card-foreground">{value.title}</h4>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
