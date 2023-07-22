import Image from "next/image";

import hospedaLogo from "@/assets/images/brand/logo.svg";

import { Avatar } from "../ui/Avatar";

export function Header() {
  return (
    <header className="flex h-24 items-center justify-between bg-layout-body px-8">
      <Image src={hospedaLogo} alt="Hospeda Eventos" />

      <Avatar />
    </header>
  );
}
