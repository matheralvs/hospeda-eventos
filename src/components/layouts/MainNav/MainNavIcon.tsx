import dynamicIconImports from "lucide-react/dynamicIconImports";

import { Icon } from "@/components/Icon";

interface MainNavIconProps {
  icon: keyof typeof dynamicIconImports;
}

export function MainNavIcon({ icon }: MainNavIconProps) {
  return <Icon name={icon} className="h-5 w-5" />;
}
