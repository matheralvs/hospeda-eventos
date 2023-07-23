"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

import clsx from "clsx";

interface MainNavLinkProps {
  href: string;
  children: ReactNode;
}

export function MainNavLink({ href, children }: MainNavLinkProps) {
  const pathName = usePathname();

  const isPathSelected = href === pathName;

  return (
    <Link
      href={href}
      className={clsx(
        "rounded-[10px] p-2 text-content-base/60 transition-colors hover:bg-layout-body",
        {
          "bg-primary-pure text-white hover:bg-primary-pure/90": isPathSelected,
        },
      )}
    >
      {children}
    </Link>
  );
}
