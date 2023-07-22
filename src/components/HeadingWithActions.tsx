"use client";

import { useRouter } from "next/navigation";

import { Search } from "./Search";
import { Button } from "./ui/buttons/Button";
import { Heading } from "./ui/Heading";

export function HeaderWithActions() {
  const router = useRouter();

  return (
    <>
      <Heading text="Meus Eventos" />

      <div className="flex items-center justify-center md:gap-4 lg:justify-between">
        <Search />

        <Button onClick={() => router.push("/events/new")}>Criar Evento</Button>
      </div>
    </>
  );
}
