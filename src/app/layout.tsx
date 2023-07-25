import { Metadata } from "next";

import { RootLayoutProvider } from "@/providers/RootLayoutProvider";

import { Toaster } from "@/components/ui/Toaster";

import { roboto } from "@/lib/fonts";

import "@/styles/globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s | Hospeda Eventos",
    default: "Hospeda Eventos",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={roboto.className}>
        <RootLayoutProvider>
          {children}
          <Toaster />
        </RootLayoutProvider>
      </body>
    </html>
  );
}
