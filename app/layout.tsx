import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EnergyFlow",
  description: "Ваш надійний партнер у світі спорту",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk">
      <body>{children}</body>
    </html>
  );
}
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
</head>