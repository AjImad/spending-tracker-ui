import { useSidebar } from "@/hooks/useSlidebar";
import { cn } from "@/lib/utils";
import { ChevronsRight } from "lucide-react";
import { useState } from "react";
import SideNav from "./SideNav";
import { NavItems } from "@/components/constants/NavItems";
import Link from "next/link";

interface SidebarProps {
  className?: string;
}

const Sidebar = ({ className }: SidebarProps) => {
  const { isOpen, toggle } = useSidebar();
  const [status, setStatus] = useState(false);

  const handleToggle = () => {
    setStatus(!status);
    toggle();
    setTimeout(() => setStatus(false), 500);
  };

  return (
    <nav
      className={cn(
        "relative h-screen border-r pt-6 pb-6 px-3 md:block hidden md:z-50",
        status && "duration-500",
        isOpen ? "w-64" : "w-[78px]",
        className
      )}
    >
      <Link
        href="/dashboard"
        className="hidden md:flex items-center justify-between gap-2"
      >
        <h1
          className={cn(
            "text-lg font-semibold text-customBlue uppercase transition-all duration-300",
            !isOpen && "text-sm"
          )}
        >
          {isOpen ? "Swiftecs." : "Swftx"}
        </h1>
      </Link>
      <ChevronsRight
        className={cn(
          "absolute -right-3 top-19 cursor-pointer rounded-full border bg-background text-3xl text-foreground p-0.5",
          isOpen && "rotate-180"
        )}
        onClick={handleToggle}
      />
      <div className="space-y-4 py-4 h-full">
        <div className=" pt-6 h-full">
          <SideNav
            className="
            text-background opacity-0 transition-all duration-300 group-hover:z-50 group-hover:ml-4 group-hover:rounded group-hover:bg-forground group-hover:p-2 group-hover:opacity-0
          "
            items={NavItems}
          />
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
