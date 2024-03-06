import type { Metadata } from "next";
import { openSans } from "@/lib/fonts";
import "./globals.css";
import Footer from "@/components/footer/Footer";
import { Fragment } from "react";

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
    <Fragment>
      <html lang="pl">
        <body className={`${openSans.className} flex flex-col min-h-screen`}>
          <div className="flex-grow h-full">{children}</div>
          <Footer />
        </body>
      </html>
    </Fragment>
  );
}
