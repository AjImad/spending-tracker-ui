import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { NavItem } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SideNavProps {
  items: NavItem[];
  setOpen?: (open: boolean) => void;
  className?: string;
}

const SideNav = ({ items, setOpen, className }: SideNavProps) => {
  const path = usePathname();
  return (
    <nav>
      {items.map((item) => (
        <Link
          href={item.href}
          key={item.title}
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "group relative flex h-12 justify-start",
            path === item.href && "bg-muted font-bold hover:bg-muted"
          )}
        >
          <item.icon className={cn("h-5 w-5", item.color)} />
          <span className={cn("absolute left-12 text-base duration-200")}>
            {item.title}
          </span>
        </Link>
      ))}
    </nav>
  );
};

export default SideNav;
