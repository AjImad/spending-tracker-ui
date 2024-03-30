import { NavItem } from "@/types";
import {
  ArrowRightLeft,
  LayoutDashboard,
  LineChart,
  PiggyBank,
  Settings,
  User,
  Wallet,
} from "lucide-react";

export const NavItems: NavItem[] = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "#252d49",
  },
  {
    title: "Transactions",
    icon: ArrowRightLeft,
    href: "/transactions",
    color: "#252d49",
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
    icon: Wallet,
    href: "/my-wallet",
    color: "#252d49",
  },
  {
    title: "Budgets",
    icon: PiggyBank,
    href: "/budgets",
    color: "#252d49",
  },
  {
    title: "Account",
    icon: User,
    href: "/account",
    color: "#252d49",
  },
  {
    title: "Reports",
    icon: LineChart,
    href: "/reports",
    color: "#252d49",
  },
  {
    title: "Settings",
    icon: Settings,
    href: "/settings",
    color: "#252d49",
  },
];
