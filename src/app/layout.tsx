import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lead RnnR",
  description: "Changing the game.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        <main>{children}</main>
        <ContactForm />
        <Footer />
      </body>
    </html>
  );
}
