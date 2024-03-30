import { buttonVariants } from "@/components/ui/button";
import { useSidebar } from "@/hooks/useSlidebar";
import { cn } from "@/lib/utils";
import { NavItem } from "@/types";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SideNavProps {
  items: NavItem[];
  setOpen?: (open: boolean) => void;
  className?: string;
}

const SideNav = ({ items, setOpen, className }: SideNavProps) => {
  const path = usePathname();
  const { isOpen } = useSidebar();
  const lastItem = items[items.length - 1];
  return (
    <nav className="flex flex-col justify-between h-full">
      <div className="space-y-2">
        {items.slice(0, items.length - 1).map((item) => (
          <Link
            href={item.href}
            key={item.title}
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "group relative flex h-12 justify-start",
              path === item.href &&
                "bg-[#252d49] text-white hover:bg-[#3b425b] hover:text-white"
            )}
          >
            <item.icon
              className={cn(
                "h-5 w-5 text-[#252d49]",
                path === item.href && "text-white"
              )}
            />
            <span
              className={cn(
                "absolute left-12 text-base duration-200",
                !isOpen && className
              )}
            >
              {item.title}
            </span>
          </Link>
        ))}
      </div>
      <div>
        <Separator className="w-full" />
        <Link
          href={lastItem.href}
          key={lastItem.title}
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "group relative flex h-12 justify-start",
            path === lastItem.href &&
              "bg-[#252d49] text-white hover:bg-[#3b425b] hover:text-white"
          )}
        >
          <lastItem.icon
            className={cn(
              "h-5 w-5 text-[#252d49]",
              path === lastItem.href && "text-white"
            )}
          />
          <span
            className={cn(
              "absolute left-12 text-base duration-200",
              !isOpen && className
            )}
          >
            {lastItem.title}
          </span>
        </Link>
      </div>
    </nav>
  );
};

export default SideNav;
