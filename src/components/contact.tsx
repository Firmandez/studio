"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Mail, Phone, MapPin, Send, CheckCircle2, XCircle } from "lucide-react";

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
    mode: "onChange", // Enable real-time validation
    defaultValues: {
      name: "",
      subject: "",
      message: "",
    },
  });

  const messageLength = form.watch("message")?.length || 0;
  const maxMessageLength = 500;

  // Function to check if field is valid
  const isFieldValid = (fieldName: keyof z.infer<typeof formSchema>) => {
    const fieldState = form.getFieldState(fieldName);
    return !fieldState.error && fieldState.isDirty && form.getValues(fieldName);
  };

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Format pesan untuk WhatsApp
    const whatsappMessage = `*Pesan Baru dari Website*\n\n` +
                           `*Nama:* ${values.name}\n` +
                           `*Alamat:* ${values.subject}\n` +
                           `*Pesan:*\n${values.message}`;
    
    // Encode pesan untuk URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    // Nomor WhatsApp (format: kode negara + nomor tanpa +, -, atau spasi)
    const whatsappNumber = "6283836927824";
    
    // Buat URL WhatsApp
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    // Buka WhatsApp di tab baru
    window.open(whatsappUrl, '_blank');

    toast({
      title: "Membuka WhatsApp!",
      description: "Anda akan diarahkan ke WhatsApp untuk mengirim pesan.",
    });

    // Reset form setelah membuka WhatsApp
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
          <div className="space-y-6">
            <Card className="shadow-lg">
              <CardHeader>
                  <CardTitle className="text-2xl font-headline">Informasi Kontak</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-lg">
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

            {/* Google Maps Embed */}
            <Card className="shadow-lg overflow-hidden">
              <CardHeader>
                <CardTitle className="text-2xl font-headline flex items-center gap-2">
                <MapPin className="h-6 w-6 text-primary"/>
                  Lokasi Kami
                  </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1624.437966844424!2d110.50494684765759!3d-7.342907875940861!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a79cc11934a49%3A0x59def18ab53e0353!2sSahid%20Tani!5e0!3m2!1sid!2sid!4v1761538620229!5m2!1sid!2sid"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lokasi Sahidtani"
                  className="w-full"
                />
              </CardContent>
            </Card>
          </div>
          
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
                          <div className="relative">
                            <Input placeholder="John Doe" {...field} className="pr-10" />
                            {isFieldValid("name") && (
                              <CheckCircle2 className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-green-500" />
                            )}
                            {form.getFieldState("name").error && form.getFieldState("name").isDirty && (
                              <XCircle className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-red-500" />
                            )}
                          </div>
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
                          <div className="relative">
                            <Input placeholder="Nama Jalan, Kelurahan, Kecamatan, Kota, Provinsi" {...field} className="pr-10" />
                            {isFieldValid("subject") && (
                              <CheckCircle2 className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-green-500" />
                            )}
                            {form.getFieldState("subject").error && form.getFieldState("subject").isDirty && (
                              <XCircle className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-red-500" />
                            )}
                          </div>
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
                        <FormLabel className="flex justify-between items-center">
                          <span>Pesan</span>
                          <span className={`text-sm ${messageLength > maxMessageLength ? 'text-red-500' : messageLength > maxMessageLength * 0.9 ? 'text-orange-500' : 'text-muted-foreground'}`}>
                            {messageLength}/{maxMessageLength}
                          </span>
                        </FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Textarea placeholder="Beritahu apa yang bisa kami bantu..." {...field} rows={5} className="resize-none"/>
                            {isFieldValid("message") && (
                              <CheckCircle2 className="absolute right-3 top-3 h-5 w-5 text-green-500" />
                            )}
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full" size="lg" disabled={form.formState.isSubmitting}>
                    {form.formState.isSubmitting ? 'Mengirim...' : <>Kirim via WhatsApp <Send className="ml-2 h-4 w-4"/></>}
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