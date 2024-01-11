import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

const LandingHero = () => {
  return (
    <div className="flex flex-col gap-4 mt-16 justify-center items-center px-4 sm:px-0">
      <h1 className="text-white text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
        Unlimited movies, TV shows and more
      </h1>
      <p className="text-white text-lg sm:text-xl md:text-2xl text-center">
        Watch anywhere. Cancel anytime.
      </p>
      <h3 className="text-white text-sm sm:text-md md:text-lg lg:text-xl text-center">
        Ready to watch? Enter your email to create or restart your membership.
      </h3>
      <div className="flex items-center justify-center gap-2 pb-4">
        <Input
          placeholder="Enter your email"
          className="bg-transparent/50 text-white w-full sm:w-72 md:w-96 h-14"
        />
        <Link href="/register">
          <Button
            variant={"default"}
            className="bg-yellow-500 hover:bg-yellow-600 text-black h-14 text-sm sm:text-md md:text-lg lg:text-xl"
          >
            Get Started <ChevronRight />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default LandingHero;
