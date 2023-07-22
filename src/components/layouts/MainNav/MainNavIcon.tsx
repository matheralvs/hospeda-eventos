import { Icon } from "@/components/Icon";

import dynamicIconImports from "lucide-react/dynamicIconImports";

interface MainNavIconProps {
  icon: keyof typeof dynamicIconImports;
}

export function MainNavIcon({ icon }: MainNavIconProps) {
  return <Icon name={icon} className="h-5 w-5" />;
}
