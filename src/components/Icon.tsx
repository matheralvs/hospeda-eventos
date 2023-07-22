import React, { lazy, Suspense } from "react";

import { LucideProps } from "lucide-react";
import dynamicIconImports from "lucide-react/dynamicIconImports";

const fallback = (
  <div className="h-5 w-5 animate-pulse rounded-md border border-zinc-600/50 bg-white/60" />
);

interface IconProps extends Omit<LucideProps, "ref"> {
  name: keyof typeof dynamicIconImports;
}

export function Icon({ name, ...props }: IconProps) {
  const LucideIcon = lazy(dynamicIconImports[name]);

  return (
    <Suspense fallback={fallback}>
      <LucideIcon {...props} />
    </Suspense>
  );
}
