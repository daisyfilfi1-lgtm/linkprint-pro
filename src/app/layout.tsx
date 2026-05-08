import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

const manrope = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Top Printing — Premium Paper Packaging for Growing Brands",
  description:
    "Premium paper packaging for DTC brands, sustainable switch, creator economy, exhibition collateral, and pharma. MOQ 500, 72H prototyping, 15-day delivery.",
  keywords: [
    "paper packaging",
    "printing",
    "luxury printing",
    "small batch packaging",
    "DTC packaging",
    "sustainable packaging",
    "custom boxes",
    "MOQ 500",
  ],
  openGraph: {
    title: "Top Printing — Premium Paper Packaging for Growing Brands",
    description:
      "Premium paper packaging for DTC brands. MOQ 500, 72H prototyping, 15-day delivery.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html
      lang="en"
      className={`${cormorantGaramond.variable} ${manrope.variable} ${jetbrainsMono.variable} h-full`}
    >
      <head>
        {/* Google Analytics (placeholder) */}
        {gaId && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${gaId}');
                `,
              }}
            />
          </>
        )}
      </head>
      <body className="min-h-full flex flex-col bg-warm text-text-primary font-body antialiased">
        <Nav />
        <main className="flex-1 fade-in">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
