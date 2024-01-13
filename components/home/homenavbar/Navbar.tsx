"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BellIcon } from "lucide-react";
import Sidebar from "./Sidebar";
import { Input } from "@/components/ui/input";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import User from "@/components/user/User";

const navbarItems = [
  { label: "Home", href: "/home" },
  { label: "Movies", href: "/home/movies" },
  { label: "TV Shows", href: "/home/shows" },
  { label: "New & Popular", href: "/home/new" },
  { label: "My List", href: "/home/user/list" },
];

const Navbar = () => {
  const pathName = usePathname();
  return (
    <>

        <div className="lg:flex space-x-4 justify-between px-4 mt-0 hidden bg-black/60 rounded-3xl">
          <div className="flex space-x-4 justify-center items-center h-20">
            <div className="reltive">
              <Link href={"/home"}>
                <Image
                  src="/logo.png"
                  width={300}
                  height={40}
                  alt="logo"
                  priority
                />
              </Link>
            </div>
            <ul className="flex justify-start items-center gap-2 lg:text-xl text-white">
              {navbarItems.map((item) => (
                <li key={item.href}>
                  {" "}
                  <Link
                    href={item.href}
                    className={cn(
                      "text-lg group flex p-3 w-full justify-start font-normal cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
                      pathName === item.href
                        ? "text-white bg-white/10"
                        : "text-zinc-400"
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex gap-6 justify-center items-center">
            <Input type="text" placeholder="Search" />
            <BellIcon className="text-white w-10 h-10" />
            <User />
          </div>
        </div>
        <div className="flex items-center justify-between px-4 py-4 lg:hidden inset-y-0">
          <Sidebar />
          <div className="flex gap-2 justify-center items-center">
            {/* <Input type="text" placeholder="Search" className="hidden h-8 " /> */}
            <User />
          </div>
        </div>
     
    </>
  );
};

export default Navbar;
