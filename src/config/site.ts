import dynamicIconImports from "lucide-react/dynamicIconImports";

export type SiteConfig = typeof siteConfig;

export type MainNavLinks = {
  title: string;
  href: string;
  icon: keyof typeof dynamicIconImports;
};

export const siteConfig = {
  mainNav: [
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: "home",
    },
    {
      title: "Eventos",
      href: "/events",
      icon: "calendar",
    },
    {
      title: "Financeiro",
      href: "/finances",
      icon: "dollar-sign",
    },
    {
      title: "Estatísticas",
      href: "/statistics",
      icon: "pie-chart",
    },
    {
      title: "Tags",
      href: "/tags",
      icon: "tag",
    },
  ] as MainNavLinks[],
};
