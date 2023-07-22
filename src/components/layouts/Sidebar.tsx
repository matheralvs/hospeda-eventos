import { siteConfig } from "@/config/site";

import { MainNav } from "./MainNav";

export function Sidebar() {
  return (
    <div className="h-full bg-layout-spotlight px-3 py-6">
      <MainNav.Root>
        {siteConfig.mainNav.map((navItem) => (
          <MainNav.Link key={navItem.title} href={navItem.href}>
            <MainNav.Icon icon={navItem.icon} />
          </MainNav.Link>
        ))}
      </MainNav.Root>
    </div>
  );
}
