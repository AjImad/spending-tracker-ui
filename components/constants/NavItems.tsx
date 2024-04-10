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
    title: "dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "#252d49",
  },
  {
    title: "transactions",
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
    title: "my_wallet",
    icon: Wallet,
    href: "/my-wallet",
    color: "#252d49",
  },
  {
    title: "budgets",
    icon: PiggyBank,
    href: "/budgets",
    color: "#252d49",
  },
  // {
  //   title: "Account",
  //   icon: User,
  //   href: "/account",
  //   color: "#252d49",
  // },
  {
    title: "reports",
    icon: LineChart,
    href: "/reports",
    color: "#252d49",
  },
  {
    title: "settings",
    icon: Settings,
    href: "/settings",
    color: "#252d49",
  },
];
