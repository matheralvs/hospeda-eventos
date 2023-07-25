import { CalendarSearch } from "lucide-react";

interface EmptyProps {}

export function Empty(props: EmptyProps) {
  return (
    <div className="flex h-[400px] flex-col items-center justify-center gap-4">
      <CalendarSearch className="h-20 w-20 text-primary-pure" />
      <div className="flex flex-col items-center gap-1">
        <strong className="text-2xl text-content-base">
          Nenhum evento cadastrado!
        </strong>
        <span className="text-content-base/60">Cadastre um agora mesmo.</span>
      </div>
    </div>
  );
}
