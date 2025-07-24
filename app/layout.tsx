import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "../components/ui/footer";

const apfelGrotezk = localFont({
  src: [
    {
      path: "./fonts/apfel-grotezk-latin-400-normal.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/apfel-grotezk-latin-700-normal.woff2",
      weight: "700",
      style: "bold",
    },
  ],
  variable: "--apfel-grotezk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bakery",
  description: "Bakery shop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${apfelGrotezk.className} antialiased`}>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
