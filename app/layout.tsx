import "./global.css";

export const metadata = {
  title: "EnergyFlow",
  description: "Ваш надійний партнер у світі спорту",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uk">
      <body>{children}</body>
    </html>
  );
}
