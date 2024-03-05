import type { Metadata } from "next";
import { openSans } from "@/lib/fonts";
import "./globals.css";
import Footer from "@/components/footer/Footer";

export const metadata: Metadata = {
  title: "Wielocha Ring Configurator",
  description: "Create your own ring with Wielocha",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className={openSans.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
