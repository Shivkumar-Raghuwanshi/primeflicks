import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { IoLanguageSharp } from "react-icons/io5";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const LandingNavbar = () => {
  return (
    <div className="">
      <nav className="flex flex-wrap items-center justify-between bg-slate-950 bg-opacity-30 px-8">
        <Image src="/logo.png" width={300} height={80} alt="logo" className="w-full sm:w-auto" />

        <div className="flex sm:flex-row gap-4 w-full sm:w-auto mt-4 sm:mt-0">
          <div className="w-full">
            <Select>
              <SelectTrigger className="w-full md:w-[120px] bg-transparent text-white">
              <IoLanguageSharp /> <SelectValue placeholder="English" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="english">English</SelectItem>
                <SelectItem value="hindi">Hindi</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Link href="/auth/signin">
            <Button variant="primary" className="rounded-xl">
              Sign in
            </Button>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default LandingNavbar;
