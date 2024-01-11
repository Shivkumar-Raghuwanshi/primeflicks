"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Menu,
  Facebook,
  LinkedinIcon,
  GithubIcon,
  Home,
  Film,
  MonitorPlay,
  ListVideo,
  ListPlus,
  BellIcon
} from "lucide-react";
import { FaSquareXTwitter } from "react-icons/fa6";

const navbarItems = [
  { label: "Home", href: "/home", icon: Home, iconColor: "text-white" },
  {
    label: "Movies",
    href: "/home/movies",
    icon: Film,
    iconColor: "text-white",
  },
  {
    label: "TV Shows",
    href: "/home/shows",
    icon: MonitorPlay,
    iconColor: "text-white",
  },
  {
    label: "New & Popular",
    href: "/home/new",
    icon: ListPlus,
    iconColor: "text-white",
  },
  {
    label: "My List",
    href: "/home/user/list",
    icon: ListVideo,
    iconColor: "text-white",
  },
  {
    label: "Notification",
    href: "",
    icon: BellIcon,
    iconColor: "text-white",
  },
];
const socialItems = [
  {
    id: 1,
    icon: Facebook,
    iconColor: "text-blue-500",
    link: "/",
  },
  {
    id: 2,
    icon: FaSquareXTwitter,
    iconColor: "text-white",
    link: "/",
  },
  {
    id: 3,
    icon: LinkedinIcon,
    iconColor: "text-blue-700",
    link: "/",
  },
  {
    id: 4,
    icon: GithubIcon,
    iconColor: "text-white",
    link: "/",
  },
];

const Sidebar = () => {
  const pathName = usePathname();
  return (
    <>
      <Sheet>
        <SheetTrigger>
          <Menu
            className="lg:hidden hover:bg-accent hover:text-accent-foreground h-6 w-6 text-white "
            type="button"
          >
            Menu
          </Menu>
        </SheetTrigger>
        <SheetContent side="left" className="p-0 text-white w-48 ">
          <div className="space-y-4 py-4 flex flex-col h-full bg-black text-white">
            <div className="px-3 py-2">
              <Link href="/home">
                <div className="relative ">
                  <Image
                    src="/logo.png"
                    width={300}
                    height={80}
                    alt="primeflicks"
                  />
                </div>
              </Link>
              <div className="space-y-1">
                {navbarItems.map((item) => (
                  <Link
                    href={item.href}
                    key={item.href}
                    className={cn(
                      "text-sm group flex p-3 w-full justify-start font-normal cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
                      pathName === item.href
                        ? "text-white bg-white/10"
                        : "text-zinc-400"
                    )}
                  >
                    <div className="flex flex-1 items-start">
                      <item.icon
                        className={cn("w-5 h-5 mr-3", item.iconColor)}
                      />
                      {item.label}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            <h1 className="text-center">Follow us on</h1>
            <div className="px-3 flex items-center justify-center">
              {socialItems.map((social) => (
                <Link href={social.link} target="_blank" key={social.id}>
                  <social.icon
                    className={cn("w-5 h-5 gap-2 p-1", social.iconColor)}
                  />
                </Link>
              ))}
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default Sidebar;
