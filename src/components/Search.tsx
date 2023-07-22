import { InputHTMLAttributes } from "react";

import { Search as LucideSearch } from "lucide-react";

import { Input } from "./ui/Input";

interface SearchProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Search({ ...props }: SearchProps) {
  return (
    <div className="relative">
      <Input placeholder="Buscar eventos" className="w-[470px] pl-11" />
      <LucideSearch className="absolute top-1/2 ml-3 h-5 w-5 -translate-y-1/2 text-content-base" />
    </div>
  );
}
