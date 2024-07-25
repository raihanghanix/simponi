import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "SIMPONI",
  description:
    "SIMPONI merupakan website khusus bagian produksi Badan Pusat Statistik Provinsi Jambi untuk me-monitoring dan mengevaluasi produksi di Provinsi Jambi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>{children}</body>
    </html>
  );
}
