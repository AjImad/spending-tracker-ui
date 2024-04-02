import { Languages } from "@/components/constants/Langues";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button, buttonVariants } from "@/components/ui/button";
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
import { useMediaQuery } from "@uidotdev/usehooks";
import {
  Bell,
  Calculator,
  Calendar,
  CreditCard,
  Search,
  Settings,
  Smile,
  User,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import MobileSidebar from "./MobileSidebar";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const Header = () => {
  const CustomOption = ({ country, icon }: Language) => (
    <div className="flex justify-center items-center space-x-3">
      <Image src={icon} alt="United Kingdom" width={25} height={25} />
      <span className="text-muted-foreground">{country}</span>
    </div>
  );

  const isMobile = useMediaQuery("(max-width: 786px)");

  const [open, setOpen] = useState(false);

  const [lang, setLang] = useState(Languages[1].icon);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <nav className="sticky bg-[#eff1f5] py-2 backdrop-filter backdrop-blur-lg bg-opacity-30 left-0 right-0 top-0 z-20 flex h-16 items-center justify-between px-6">
      <div className="flex justify-between items-center space-x-3">
        {isMobile && <MobileSidebar />}
        {/* Search command */}
        <Button
          variant="ghost"
          className="flex justify-between px-1 hover:bg-muted/70"
          onClick={() => setOpen(true)}
        >
          <div className="flex justify-center items-center space-x-2 text-muted-foreground">
            <Search className="text-muted-foreground w-4 h-4" />
            <kbd className="hidden pointer-events-none md:inline-flex h-6 select-none justify-center items-center gap-1 rounded-lg border bg-muted p-2 text-sm  font-mono font-bold text-muted-foreground opacity-100">
              <span className="text-lg">⌘</span>
              <p>J</p>
            </kbd>
          </div>
        </Button>
        <CommandDialog open={open} onOpenChange={setOpen}>
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              <CommandItem>
                <Calendar className="mr-2 h-4 w-4" />
                <span>Calendar</span>
              </CommandItem>
              <CommandItem>
                <Smile className="mr-2 h-4 w-4" />
                <span>Search Emoji</span>
              </CommandItem>
              <CommandItem>
                <Calculator className="mr-2 h-4 w-4" />
                <span>Calculator</span>
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Settings">
              <CommandItem>
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
                <CommandShortcut>⌘P</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <CreditCard className="mr-2 h-4 w-4" />
                <span>Billing</span>
                <CommandShortcut>⌘B</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
                <CommandShortcut>⌘S</CommandShortcut>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </CommandDialog>
      </div>
      <div className="flex justify-center items-end space-x-4 md:space-x-7">
        {/* Language Selector */}
        <Select value={lang} onValueChange={setLang}>
          <SelectTrigger
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "p-0 border-none focus-visible:ring-offset-0 focus-visible:ring-0  bg-transparent hover:bg-muted/70"
            )}
          >
            {isMobile ? (
              <SelectValue>
                <Image src={lang} alt="United Kingdom" width={30} height={30} />
              </SelectValue>
            ) : (
              <SelectValue
                placeholder={
                  <CustomOption
                    country={Languages[1].country}
                    icon={Languages[1].icon}
                  />
                }
                className="border-none focus:ring-transparent"
              />
            )}
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {Languages.map((language) => (
                <SelectItem
                  key={language.country}
                  value={language.icon ?? Languages[1].icon}
                  aria-checked={false}
                >
                  <CustomOption {...language} />
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        {/* Notification Bell */}
        <div className="relative cursor-pointer">
          <Bell className="text-muted-foreground w-7 h-7" />
          <div className="px-1 bg-[#e44146] rounded-full text-center text-white text-sm absolute -top-2 -end-2">
            3
          </div>
        </div>
        {/* Account Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar className="h-9 w-9 md:h-10 md:w-10 cursor-pointer">
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
  );
};

export default Header;
