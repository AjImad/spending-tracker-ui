import { type LucideIcon } from "lucide-react";

export interface NavItem {
  title: string;
  icon: LucideIcon;
  href: string;
  color?: string;
  isChidren?: boolean;
  children?: NavItem[];
}
