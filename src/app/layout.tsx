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
  metadataBase: new URL("https://fitness.abdelhadygabriel.me"),
  alternates: { canonical: "/" },
  title: "Fitness House — Re-life Your Body",
  description:
    "Fitness House is a boutique studio for yoga, pilates, HIIT and strength training. Re-life your body with expert coaches and a vibrant community.",
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
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Fitness House — Re-life Your Body" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fitness House — Re-life Your Body",
    description:
      "Boutique fitness studio. Yoga, pilates, HIIT and strength. Re-life your body today.",
    images: ["/og.png"],
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
