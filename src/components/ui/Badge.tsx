import clsx from "clsx";

interface BadgeProps {
  type?: "public" | "private";
}

export function Badge({ type = "public" }: BadgeProps) {
  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full border px-6 py-2 text-sm",
        {
          "border-success-dark bg-success-light text-content-base":
            type === "public",
          "border-[#8D3012] bg-[#ED9C79] text-content-base": type === "private",
        },
      )}
    >
      {type === "public" ? "Publico" : "Privado"}
    </span>
  );
}
