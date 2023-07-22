"use client";

import * as AvatarPrimitive from "@radix-ui/react-avatar";

export function Avatar() {
  return (
    <AvatarPrimitive.Root className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-pure text-white">
      <AvatarPrimitive.Fallback>TD</AvatarPrimitive.Fallback>
    </AvatarPrimitive.Root>
  );
}
