"use client";

import { useSidebar } from "@/hooks/useSlidebar";
import { cn } from "@/lib/utils";
import { ArrowLeft, ChevronsLeft } from "lucide-react";
import { useState } from "react";
import SideNav from "./SideNav";
import { NavItems } from "@/components/constants/NavItems";

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
        "relative h-screen border-r pt-20 md:block hidden",
        status && "duration-500",
        isOpen ? "w-72" : "w-[78px]",
        className
      )}
    >
      <ChevronsLeft
        className={cn(
          "absolute -right-3 top-20 cursor-pointer rounded-full border bg-background text-3xl text-foreground p-0.5",
          isOpen && "rotate-180"
        )}
        onClick={handleToggle}
      />
      <div className="space-y-4 py-4 h-full">
        <div className="px-3 py-2 h-full">
          <SideNav
            className="
            text-background opacity-0 transition-all duration-300 group-hover:z-50 group-hover:ml-4 group-hover:rounded group-hover:bg-forground group-hover:p-2 group-hover:opacity-100
          "
            items={NavItems}
          />
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
