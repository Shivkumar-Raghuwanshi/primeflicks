import React from "react";
import { footerItems } from "./footerItems";
import Link from "next/link";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { cn } from "@/lib/utils";

const socialItems = [
  {
    id: 1,
    icon: <FaFacebookSquare />,
    iconColor: "text-blue-500",
    link: "/",
  },
  {
    id: 2,
    icon: <FaSquareXTwitter />,
    iconColor: "text-white",
    link: "/",
  },
  {
    id: 3,
    icon: <FaLinkedin />,
    iconColor: "text-blue-700",
    link: "/",
  },
  {
    id: 4,
    icon: <FaGithub />,
    iconColor: "text-white",
    link: "/",
  },
];
const FooterPage = () => {
  return (
    <div className="bg-black">
      <div>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="p-5">
            <ul className="flex list-none list">
              {footerItems.map((item) => (
                <Link href={item.link} target="_blank" key={item.id}>
                  <li className="text-white gap-2 p-2">{item.title}</li>
                </Link>
              ))}
            </ul>
          </div>
          <div className="p-5">
            <ul className="flex list-none">
              {socialItems.map((item) => (
                <Link href={item.link} target="_blank" key={item.id}>
                  <li className={cn(" gap-2 p-2 text-3xl", item.iconColor)}>
                    {item.icon}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
        <div className=" text-white text-center pb-3 ">
          @2024 Primeflicks. All Rights Reserved{" "}
        </div>
      </div>
    </div>
  );
};

export default FooterPage;
