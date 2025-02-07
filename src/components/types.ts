import { LucideIcon } from "lucide-react";

export interface NavigationSubMenuItem {
  name: string;
  desc: string;
  icon?: LucideIcon;
}

export interface NavigationMenuItem {
  name: string;
  gridCols: number;
  subMenu?: NavigationSubMenuItem[];
}
