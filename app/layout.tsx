import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Suelen & André",
  description: "",
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
        {children}
      </body>
    </html>
  );
}