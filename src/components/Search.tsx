import { InputHTMLAttributes } from "react";

import { Search as LucideSearch } from "lucide-react";

interface SearchProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Search({ ...props }: SearchProps) {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Buscar Eventos"
        className="w-[470px] rounded-xl border border-interactive-secondary  pl-11 text-black transition-colors hover:bg-interactive-secondary/5 focus-visible:border-interactive-primary focus-visible:bg-interactive-secondary/5 focus-visible:ring-interactive-primary"
        {...props}
      />
      <LucideSearch className="absolute top-1/2 ml-3 h-5 w-5 -translate-y-1/2 text-content-base" />
    </div>
  );
}
