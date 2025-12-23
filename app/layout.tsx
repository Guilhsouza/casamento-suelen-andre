import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Suelen & André",
  description: "",
  metadataBase: new URL('https://casamento-suelen-andre.vercel.app/'),
  openGraph: {
    images: [
      {
        url: '/save-the-date.png',
        width: 1200,
        height: 630,
      },
    ]
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  );
}