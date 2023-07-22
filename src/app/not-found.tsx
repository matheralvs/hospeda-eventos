"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import logoImage from "@/assets/images/brand/logo.svg";

import { Button } from "@/components/ui/buttons/Button";
import { Heading } from "@/components/ui/Heading";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-8">
      <Image src={logoImage} alt="Hospeda Eventos" />
      <Heading text="Página em construção..." />

      <Button onClick={() => router.push("/events")}>Voltar</Button>
    </div>
  );
}
