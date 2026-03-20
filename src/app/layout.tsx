import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import LoadingScreen from "@/components/loading-screen";

export const metadata: Metadata = {
  title: 'Sahid Tani',
  description: 'Bibit tanaman berkualitas tinggi dari Sahid Tani. Jelajahi katalog kami dan mulailah berkebun hari ini.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-background">
        <LoadingScreen />
        {children}
        <Toaster />
      </body>
    </html>
  );
}