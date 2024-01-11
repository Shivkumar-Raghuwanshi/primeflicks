"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import UserAvatar from "./UserAvatar";
import { useSession, signOut } from "next-auth/react";
import { useState, useEffect } from "react";
import { CircleUserRound, Mail, LogOut, UserPlus } from "lucide-react";
const User = () => {
  const [isMounted, setIsMounted] = useState(false);
  const { data: session } = useSession();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <UserAvatar />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="text-white bg-black/50 mt-3 mr-6 border-2 border-yellow-400">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="flex items-center justify-start gap-2">
            <CircleUserRound /> {session?.user?.name}
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-center justify-start gap-2">
            <Mail />
            {session?.user?.email}
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => signOut({ callbackUrl: "/" })}
            className="flex items-center justify-start gap-2 cursor-pointer"
          >
            {" "}
            <LogOut />
            Sign out
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-center justify-start gap-2 cursor-pointer">
            <UserPlus /> Subscription
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default User;
