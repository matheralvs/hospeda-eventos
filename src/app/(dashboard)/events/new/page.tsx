import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { ChevronLeft } from "lucide-react";

import logoImage from "@/assets/images/brand/logo.svg";

import { NewEventForm } from "@/components/forms/NewEventForm";
import { Heading } from "@/components/ui/Heading";

export const metadata: Metadata = {
  title: "Novo Evento",
};

export default function NewEvent() {
  return (
    <main className="flex h-full flex-col items-center gap-6 bg-layout-body">
      <div className="mt-24 flex min-w-[1199px] flex-col gap-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/events">
              <ChevronLeft className="h-5 w-5" />
            </Link>
            <Heading text="Criar evento" />
          </div>

          <Image src={logoImage} alt="Hospeda Eventos" />
        </div>

        <div className="h-max w-full rounded-tl-2xl rounded-tr-2xl border bg-white p-12 shadow-sm">
          <NewEventForm />
        </div>
      </div>
    </main>
  );
}
