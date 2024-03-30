import { BookOpenCheck, LayoutDashboard } from "lucide-react";
import { NavItem } from "@/types";

export const NavItems: NavItem[] = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-sky-500",
  },
  {
    title: "Transactions",
    icon: BookOpenCheck,
    href: "/transactions",
    color: "text-orange-500",
    // isChidren: true,
    // children: [
    //   {
    //     title: "Transaction-01",
    //     icon: BookOpenCheck,
    //     color: "text-red-500",
    //     href: "/Transaction/employees",
    //   },
    //   {
    //     title: "Transaction-02",
    //     icon: BookOpenCheck,
    //     color: "text-red-500",
    //     href: "/Transaction/Transaction-02",
    //   },
    //   {
    //     title: "Transaction-03",
    //     icon: BookOpenCheck,
    //     color: "text-red-500",
    //     href: "/example/example-03",
    //   },
    // ],
  },
  {
    title: "My Wallet",
    icon: BookOpenCheck,
    href: "/my-wallet",
    color: "text-orange-500",
  },
  {
    title: "Budgets",
    icon: BookOpenCheck,
    href: "/budgets",
    color: "text-orange-500",
  },
  {
    title: "Account",
    icon: BookOpenCheck,
    href: "/account",
    color: "text-orange-500",
  },
  {
    title: "Reports",
    icon: BookOpenCheck,
    href: "/reports",
    color: "text-orange-500",
  },
  {
    title: "Settings",
    icon: BookOpenCheck,
    href: "/settings",
    color: "text-orange-500",
  },
];
