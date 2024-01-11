// import Navbar from "@/components/home/homenavbar/Navbar";
import { getServerSession } from "next-auth";
import React, { ReactNode } from "react";
import { authOptions } from "../api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";
import Header from "@/components/home/header/Header";

const Homelayout = async ({ children }: { children: ReactNode }) => {
  const session = await getServerSession(authOptions);
  if (!session) {
    return redirect("/login");
  }
  return (
    <div>
      <main>
        <div className="fixed top-0 z-50 w-full items-center justify-between px-4 py-4 transition-all lg:px-10 lg:py-6">
          <Header />
        </div>
        {children}
      </main>
    </div>
  );
};

export default Homelayout;
