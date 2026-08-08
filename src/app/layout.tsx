import type { Metadata } from "next";
import { Bebas_Neue, Montserrat } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fitness House — Re-life Your Body",
  description:
    "Fitness House is a boutique studio for yoga, pilates, HIIT and strength training. Re-life your body with expert coaches, premium equipment and a vibrant community.",
  keywords: [
    "Fitness House",
    "yoga studio",
    "pilates",
    "HIIT",
    "strength training",
    "personal trainer",
    "boutique fitness",
    "Re-life Your Body",
  ],
  authors: [{ name: "Fitness House" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Fitness House — Re-life Your Body",
    description:
      "Boutique fitness studio. Yoga, pilates, HIIT and strength. Re-life your body today.",
    siteName: "Fitness House",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fitness House — Re-life Your Body",
    description:
      "Boutique fitness studio. Yoga, pilates, HIIT and strength. Re-life your body today.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${bebasNeue.variable} ${montserrat.variable} font-sans antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
