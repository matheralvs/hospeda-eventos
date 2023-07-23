import Image from "next/image";
import Link from "next/link";

import { ChevronLeft } from "lucide-react";

import logoImage from "@/assets/images/brand/logo.svg";

import { Heading } from "@/components/ui/Heading";

export function NewEventHeader() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Link href="/events">
          <ChevronLeft className="h-5 w-5" />
        </Link>
        <Heading text="Criar evento" />
      </div>

      <Image src={logoImage} alt="Hospeda Eventos" />
    </div>
  );
}
