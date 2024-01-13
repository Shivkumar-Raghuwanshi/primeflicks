import React from "react";
import { questions } from "./questions";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

const FrequentQuestions = () => {
  return (
    <div className="bg-black">
      <h1 className="text-center text-xl md:text-2xl  lg:text-5xl text-white py-10">
        Frequently Asked Questions
      </h1>
      <div className="mx-4 md:mx-20 lg:mx-64 pb-2 md:pb-4 lg:pb-10">
        {questions.map((ques) => (
          <Accordion type="single" collapsible key={ques.id} className="mb-5 ">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-white text-sm md:text-lg lg:text-xl bg-gray-800 hover:bg-gray-900 px-4 rounded-2xl mb-2">
                {ques.question}
              </AccordionTrigger>
              <AccordionContent className="text-white text-sm md:text-lg lg:text-xl bg-zinc-900 px-4 rounded-2xl">
                {ques.answer}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
      <div className=" flex flex-col gap-5 justify-center items-center ">
        <h3 className="text-white text-center text-sm md:text-lg lg:text-2xl">
          Ready to watch? Enter your email to create or restart your membership.
        </h3>
        <div className="flex flex-col md:flex-row items-center justify-center gap-2 mb-24 px-4">
          <Input
            placeholder="Enter your email"
            className="bg-transparent/50 text-white md:h-14"
          />
          <Link href="/auth/register">
            <Button
              variant={"default"}
              className="bg-yellow-500 hover:bg-yellow-600 text-black w-full md:h-14 text-sm md:text-lg lg:text-xl"
            >
              Get Started{" "}
              <ChevronRight className="text-sm md:text-lg lg:text-xl" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FrequentQuestions;
