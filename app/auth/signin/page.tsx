"use client";
import React from "react";
import { LoginForm } from "@/components/LoginForm";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { signIn, useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const LoginPage = () => {
    const {data:session} = useSession();
    if (session) redirect("/home");

  return (
    <div
      className="relative bg-no-repeat bg-center bg-fixed bg-cover w-full h-full sm:h-screen"
      style={{ backgroundImage: "url('/hero.jpg')" }}
    >
      <div className="flex items-center justify-center w-full h-full min-h-screen md:h-screen px-8 md:px-40 lg:px-50">
        <div className="bg-slate-950 p-5 rounded-3xl w-full sm:w-auto md:w-1/2 lg:w-1/3 xl:w-1/4 2xl:w-1/5 text-white h-auto">
          {<LoginForm />}
          <div className="flex flex-row items-center gap-4 mt-8 justify-center">
            <div
              onClick={() => signIn("google", { callbackUrl: "/home" })}
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition"
            >
              <FcGoogle size={32} />
            </div>
            <div
              onClick={() => signIn("github", { callbackUrl: "/home" })}
              className="w-10 h-10 bg-black rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition"
            >
              <FaGithub size={40} />
            </div>
          </div>
          <div className="font-normal text-sm mt-5 text-center">
            <Link href={"/auth/register"}>
              First time using Primeflicks{"  "}
              <span className="underline">Register</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
