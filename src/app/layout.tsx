import type { Metadata } from "next";
import { Noto_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Além da conta",
  description: "Desenvolva o pensamento que atravessa problemas complexos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${notoSans.variable} ${jetBrainsMono.variable} antialiased`}
      >
        <Header />
        <div className="pt-16"> {/* Espaço para o header fixo */}
          {children}
        </div>
      </body>
    </html>
  );
}
