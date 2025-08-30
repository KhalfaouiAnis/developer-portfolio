import data from "@/data/contacts";
import Heading from "./Heading";
import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaYoutube,
  FaInstagram,
  FaFacebookSquare,
  FaBehanceSquare,
  FaMedium,
  FaRegUserCircle,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import SectionWrapper from "./SectionWrapper";

export default function Contacts() {
  return (
    <SectionWrapper>
      <Heading>contacts</Heading>
      <div className="flex flex-wrap items-center gap-5 max-w-3xl">
        {data.map(({ id, label, link, name }) => (
          <Link
            href={link}
            key={id}
            target="_blank"
            className="flex items-center space-x-2 bg-zinc-100 dark:bg-zinc-800 px-3 py-2 hover:text-black hover:dark:text-white"
          >
            {name === "github" && (
              <FaGithub size={18} className="text-black dark:text-white" />
            )}
            {name === "twitter" && (
              <FaSquareXTwitter
                size={18}
                className="text-black dark:text-white"
              />
            )}
            {name === "linkedin" && (
              <FaLinkedin
                size={18}
                className="text-[#0a66c2] dark:text-white"
              />
            )}
            {name === "youtube" && (
              <FaYoutube size={18} className="text-[#ff0000] dark:text-white" />
            )}
            {name === "instagram" && (
              <FaInstagram
                size={18}
                className="text-[#c32aa3] dark:text-white"
              />
            )}
            {name === "facebook" && (
              <FaFacebookSquare
                size={18}
                className="text-[#1877f2] dark:text-white"
              />
            )}
            {name === "behance" && (
              <FaBehanceSquare
                size={18}
                className="text-[#003ECB] dark:text-white"
              />
            )}
            {name === "medium" && (
              <FaMedium size={18} className="text-black dark:text-white" />
            )}
            {name === "email" && (
              <MdEmail size={18} className="text-black dark:text-white" />
            )}
            {name === "cv" && (
              <FaRegUserCircle
                size={18}
                className="text-black dark:text-white"
              />
            )}
            <span className="text-sm md:text-base capitalize text-zinc-700 dark:text-white font-bold">
              {label}
            </span>
          </Link>
        ))}
      </div>
    </SectionWrapper>
  );
}
