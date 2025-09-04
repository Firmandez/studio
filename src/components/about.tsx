import Image from "next/image";
import { Sprout, Leaf, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const values = [
  {
    icon: Sprout,
    title: "Quality Growth",
    description: "We cultivate every seedling with expert care to ensure robust and healthy growth from the start.",
  },
  {
    icon: Leaf,
    title: "Sustainable Practices",
    description: "Our farming methods are eco-friendly, promoting a healthier planet for future generations.",
  },
  {
    icon: Heart,
    title: "Passionate Support",
    description: "We're dedicated to helping you succeed, offering guidance and support for your gardening journey.",
  },
]

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-headline font-bold text-foreground md:text-5xl">
              Our Story of Growth
            </h2>
            <p className="text-lg text-muted-foreground">
              Sahid Tani was born from a passion for nature and a desire to make gardening accessible to everyone. We believe that nurturing a plant is a rewarding experience, and our mission is to provide the highest quality seedlings to help you create the garden of your dreams.
            </p>
            <p className="text-lg text-muted-foreground">
              From humble beginnings, we have grown into a trusted source for gardeners, landscapers, and plant enthusiasts, all while staying true to our core values.
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
            Our Core Values
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
