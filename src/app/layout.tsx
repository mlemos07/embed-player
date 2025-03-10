import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "./Providers";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Embed player",
  description: "Embed player",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script src="https://beyond.spalla.io/player/js/spalla-player.js" />
        <Script id="spalla-init" strategy="afterInteractive">
          {`window.Spalla = window.Spalla || {};`}
        </Script>
      </head>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
