import Link from "next/link";
import { cn } from "@/lib/utils";
import MobileSidebar from "./MobileSidebar";

const Header = () => {
  return (
    <div className="supports-backdrop-blur:bg-background/60 fixed left-0 right-0 top-0 z-20 border-b bg-background/95 backdrop-blur">
      <nav className="flex h-16 items-center justify-between px-4">
        <Link
          href="/dashboard"
          className="hidden md:flex items-center justify-between gap-2"
        >
          <h1 className="text-lg font-semibold text-[#252d49]">Swiftecs</h1>
        </Link>
        <div className="block md:hidden">
          <MobileSidebar />
        </div>
      </nav>
    </div>
  );
};

export default Header;
