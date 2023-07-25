import { Metadata } from "next";

import { RootLayoutProvider } from "@/providers";

import { Toaster } from "@/components/ui/Toaster";

import { fontRoboto } from "@/lib";

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
      <body className={fontRoboto.className}>
        <RootLayoutProvider>
          {children}
          <Toaster />
        </RootLayoutProvider>
      </body>
    </html>
  );
}
