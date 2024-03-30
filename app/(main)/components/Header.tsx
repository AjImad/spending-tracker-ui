import { Languages } from "@/components/constants/Langues";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Language } from "@/types";
import { Bell } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import MobileSidebar from "./MobileSidebar";

const Header = () => {
  const CustomOption = ({ country, icon }: Language) => (
    <div className="flex justify-center items-center space-x-3">
      <Image src={icon} alt="United Kingdom" width={25} height={25} />
      {country && <span>{country}</span>}
    </div>
  );

  return (
    <div className="supports-backdrop-blur:bg-background/60 px-2 fixed left-0 right-0 top-0 z-20 border-b bg-background/95 backdrop-blur">
      <nav className="flex h-16 items-center justify-between px-4">
        <Link
          href="/dashboard"
          className="hidden md:flex items-center justify-between gap-2"
        >
          <h1 className="text-lg font-semibold text-customBlue">Swiftecs</h1>
        </Link>
        <div className="block md:hidden">
          <MobileSidebar />
        </div>
        <div className="flex justify-center items-end space-x-7">
          <div>
            <Select defaultValue={Languages[1].country}>
              <SelectTrigger className="w-content focus-visible:ring-transparent">
                <SelectValue
                  placeholder={
                    <CustomOption
                      country={Languages[1].country}
                      icon={Languages[1].icon}
                    />
                  }
                  className="border-none focus:ring-transparent"
                />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {Languages.map((language) => (
                    <SelectItem
                      key={language.country}
                      value={language?.country ?? "English"}
                      aria-checked={false}
                    >
                      <CustomOption {...language} />
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="relative cursor-pointer">
            <Bell className="text-customBlue w-7 h-7" />

            <div className="px-1 bg-[#e44146] rounded-full text-center text-white text-sm absolute -top-2 -end-2">
              3
              <div className="absolute top-0 start-0 rounded-full -z-10 animate-ping bg-[#e44146] w-full h-full"></div>
            </div>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar className="h-10 w-10 cursor-pointer">
                <AvatarImage
                  src="https://avatars.githubusercontent.com/u/83509351?v=4"
                  alt="@shadcn"
                />
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-40">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>

              <DropdownMenuSeparator />
              <DropdownMenuItem
                // onClick={handleLogout}
                className="cursor-pointer"
              >
                Log out
                <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
    </div>
  );
};

export default Header;
