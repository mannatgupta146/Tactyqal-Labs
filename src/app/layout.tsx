import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import { Navbar, Footer } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tactyqal Labs | Empower Your Kid To Build The Next App in 8 Weeks",
  description:
    "1:1 Mentoring • Idea To Full-Stack App • No Coding • Admissions To Top Universities • Grants • Media Coverage.",
  keywords: [
    "teen entrepreneurship",
    "tactyqal labs",
    "startup incubator for kids",
    "no-code development",
    "college admissions extracurricular",
    "1:1 mentoring",
  ],
  openGraph: {
    title: "Tactyqal Labs | Empower Your Kid To Build The Next App in 8 Weeks",
    description:
      "1:1 Mentoring • Idea To Full-Stack App • No Coding • Admissions To Top Universities • Grants • Media Coverage.",
    url: "https://tactyqal.com",
    siteName: "Tactyqal Labs",
    images: [
      {
        url: "https://images.unsplash.com/photo-1551836022-d5d88e9218df",
        width: 1200,
        height: 630,
        alt: "Tactyqal Labs Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tactyqal Labs | Empower Your Kid To Build The Next App in 8 Weeks",
    description:
      "1:1 Mentoring • Idea To Full-Stack App • No Coding • Admissions To Top Universities.",
    images: ["https://images.unsplash.com/photo-1551836022-d5d88e9218df"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-[#FDFCF7] text-slate-900 antialiased selection:bg-emerald-500/20 selection:text-emerald-900`}>
        <Providers>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
