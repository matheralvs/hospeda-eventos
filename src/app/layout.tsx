import type { Metadata } from "next";
import { Roboto } from "next/font/google";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-roboto" });

export const metadata: Metadata = {
  title: {
    template: "%s - Hospeda Eventos",
    default: "Hospeda Eventos",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
