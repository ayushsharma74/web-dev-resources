import Link from "next/link";
import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin, FaDiscord } from "react-icons/fa";
import SparklesText from "./ui/sparkles-text";

const Socials = () => {
  return (
    <div className="text-white flex gap-1 p-4 flex-col items-center">
        <div className="flex gap-1">

      <p className="font-semibold">Made With ❤️ By Ayush</p>
        </div>
      
      <div className="flex gap-2">
        <Link href={"https://x.com/ayusssshhhhhhh"}>
          <FaXTwitter
            size={25}
            className="hover:text-white text-zinc-600 transition-all duration-300"
          />
        </Link>
        <Link href={"https://www.linkedin.com/in/ayusshhhh"}>
          <FaLinkedin
            size={25}
            className="hover:text-white text-zinc-600 transition-all duration-300"
          />
        </Link>
        <Link href={"https://github.com/ayushsharma74"}>
          <FaGithub
            size={25}
            className="hover:text-white text-zinc-600 transition-all duration-300"
          />
        </Link>
        <Link href={"https://discord.gg/na4JTX9huW"}>
          <FaDiscord
            size={25}
            className="hover:text-white text-zinc-600 transition-all duration-300"
          />
        </Link>
      </div>

      
    </div>
  );
};

export default Socials;
