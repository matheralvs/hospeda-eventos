import Image from "next/image";
import Link from "next/link";

import { ChevronLeft } from "lucide-react";

import logoImage from "@/assets/images/brand/logo.svg";

import { Heading } from "@/components/ui/Heading";

interface EventHeaderProps {
  text: string;
}

export function EventHeader({ text }: EventHeaderProps) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Link href="/events">
          <ChevronLeft className="h-5 w-5" />
        </Link>
        <Heading text={text} />
      </div>

      <Image src={logoImage} alt="Hospeda Eventos" />
    </div>
  );
}
