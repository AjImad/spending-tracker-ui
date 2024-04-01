"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import { useEffect, useState } from "react";
import SideNav from "./SideNav";
import { NavItems } from "@/components/constants/NavItems";

const MobileSidebar = () => {
  const [open, setOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <MenuIcon className="text-muted-foreground" />
      </SheetTrigger>
      <SheetContent
        side="left"
        className="w-72 bgbackdrop-filter backdrop-blur-lg bg-opacity-30"
      >
        <SheetHeader>
          <SheetTitle className="flex justify-start uppercase text-customBlue">
            Swiftecs.
          </SheetTitle>
        </SheetHeader>
        <div className="h-full py-6">
          <SideNav items={NavItems} setOpen={setOpen} />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
