import { HTMLAttributes } from "react";

import { cn } from "@/lib";

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  text: string;
}

export function Heading({ text = "", className, ...props }: HeadingProps) {
  return (
    <h2
      className={cn("text-3xl font-bold text-content-base", className)}
      {...props}
    >
      {text}
    </h2>
  );
}
