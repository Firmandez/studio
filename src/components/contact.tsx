"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Mail, Phone, MapPin, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const formSchema = z.object({
  name: z.string().min(2, { message: "Nama setidaknya memiliki 2 karakter." }),
  subject: z.string().min(5, { message: "Subjek harus memiliki setidaknya 5 karakter." }),
  message: z.string().min(10, { message: "Pesan harus memiliki minimal 10 karakter & maksimal 500 karakter." }).max(500),
});

export default function Contact() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      subject: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // In a real app, you'd send this to a backend.
    console.log(values);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Pesan Terkirim!",
      description: "Terimakasih sudah menghubungi kami. Akan kami respon secepatnya",
    });

    form.reset();
  }

  return (
    <section id="contact" className="py-20 md:py-32 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-headline font-bold text-foreground md:text-5xl">
            Kontak Kami
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Memiliki pertanyaan atau permintaan khusus? Hubungi kami!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          <Card className="shadow-lg">
            <CardHeader>
                <CardTitle className="text-2xl font-headline">Informasi Kontak</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-lg">
                <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 mt-1 text-primary"/>
                    <a 
                      href= "https://maps.app.goo.gl/4SdYDw1ZVppPawVh9"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors cursor-pointer"
                    >
                    Jl. Plongkowati No.7, Tegalrejo, Kec. Argomulyo, Kota Salatiga, Jawa Tengah
                    </a>
                </div>
                <div className="flex items-center gap-4">
                    <Phone className="h-6 w-6 text-primary"/>
                    <a href="https://wa.me/6283836927824" className="hover:text-primary transition-colors">(+62) 838-3692-7824</a>
                </div>
                <div className="flex items-center gap-4">
                    <Mail className="h-6 w-6 text-primary"/>
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=hello@sahidtani.com" className="hover:text-primary transition-colors">hello@sahidtani.com</a>
                </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-lg">
             <CardHeader>
                <CardTitle className="text-2xl font-headline">Kirim Kami Sebuah Pesan</CardTitle>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nama Lengkap</FormLabel>
                        <FormControl>
                          <Input placeholder="Alif" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Alamat</FormLabel>
                        <FormControl>
                          <Input placeholder="Jl. Plongkowati No.7, Tegalrejo, Kec. Argomulyo, Kota Salatiga, Jawa Tengah" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Pesan</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Beritahu apa yang bisa kami bantu..." {...field} rows={5}/>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full" size="lg" disabled={form.formState.isSubmitting}>
                    {form.formState.isSubmitting ? 'Sending...' : <>Kirim Pesan <Send className="ml-2 h-4 w-4"/></>}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
