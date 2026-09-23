import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Položi Test - Online priprema za polaganje vozačkog ispita",
  description: "Koristite najsavremeniji AI algoritam za pripremu vozačkog ispita. Preko 90% naših studenata polaže iz prvog pokušaja. Prilagođeno učenje, neograničeno pitanja, dostupno 24/7.",
  keywords: ["vozački ispit", "polaganje", "auto škola", "online učenje", "teorijski ispit", "AI algoritam", "položi test", "vozačka dozvola"],
  authors: [{ name: "Položi Test" }],
  creator: "Položi Test",
  publisher: "Položi Test",
  metadataBase: new URL("https://polozitest.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Položi Test - Položi vozački ispit iz prve",
    description: "Preko 90% naših studenata polaže vozački ispit iz prvog pokušaja. Najsavremeniji AI algoritam za pripremu.",
    url: "https://polozitest.com",
    siteName: "Položi Test",
    locale: "sr_RS",
    type: "website",
    images: [
      {
        url: "/images/Logo5.png",
        width: 1200,
        height: 630,
        alt: "Položi Test Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Položi Test - Položi vozački ispit iz prve",
    description: "Preko 90% naših studenata polaže iz prvog pokušaja. AI algoritam koji prilagođava učenje.",
    images: ["/images/Logo5.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Dodaj kasnije: google: "your-google-verification-code",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="sr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
