"use client";
import { NavItems } from "@/components/constants/NavItems";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { MenuIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import SideNav from "./SideNav";

const MobileSidebar = () => {
  const [open, setOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const { i18n } = useTranslation("dashboard");

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <MenuIcon
          className={cn(
            "text-muted-foreground",
            i18n.language === "ar" ? "ml-2" : "mr-2"
          )}
        />
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
