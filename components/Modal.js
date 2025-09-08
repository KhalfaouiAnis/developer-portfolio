import Image from "next/image";
import { MdClose } from "react-icons/md";
import Skill from "./Skill";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { TfiWorld } from "react-icons/tfi";

export default function Modal({ open, data, toggle }) {
  return open ? (
    <div
      onClick={(e) => {
        if (!e.target.closest(".scrollable-modal")) toggle();
      }}
      className="fixed z-40 inset-0 w-full h-screen bg-black/25 p-4 backdrop-blur flex items-center justify-center"
    >
      {/* <MdClose
        onClick={toggle}
        className="cursor-pointer text-[25px] absolute top-6 right-6 text-black dark:text-white"
      /> */}
      <div className="scrollable-modal max-w-screen-xl w-full bg-white dark:bg-zinc-900 p-6 rounded-lg border border-b-zinc-100 dark: border-zinc-700 max-h-[80vh] overflow-y-auto">
        <div className="flex flex-wrap lg:space-x-6">
          <div className="relative w-full lg:w[400px] rounded-lg overflow-hidden">
            <div className="pt-[56.25%]">
              <Image
                src={data.image}
                fill
                alt="Project image"
                className="w-full h-full absolute inset-0"
              />
            </div>
          </div>
          <div className="flex-1 mt-2 lg:mt-4">
            <h2 className="text-xl md:text-2xl text-zinc-700 dark:text-zinc-400 font-bold">
              {data.title}
            </h2>
            <div className="flex flex-wrap items-center gap-3 mt-4">
              {data.skills.map((skill) => (
                <Skill key={skill.id} {...skill} />
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-3 mt-3">
              <Link
                href={data.source_code}
                target="_blank"
                className="flex items-center space-x-2 bg-zinc-100 dark:bg-zinc-800 px-3 py-2 hover:text-black hover:dark:text-white"
              >
                <FaGithub
                  size={18}
                  className="text-black dark:text-white scale-up"
                />
                <span className="text-sm md:text-base capitalize text-zinc-700 dark:text-white font-bold">
                  source code
                </span>
              </Link>
              {data.demo && (
                <Link
                  href={data.demo}
                  target="_blank"
                  className="flex items-center space-x-2 bg-zinc-100 dark:bg-zinc-800 px-3 py-2 hover:text-black hover:dark:text-white"
                >
                  <TfiWorld
                    size={18}
                    className="text-black dark:text-white scale-up"
                  />
                  <span className="text-sm md:text-base capitalize text-zinc-700 dark:text-white font-bold">
                    demo
                  </span>
                </Link>
              )}
            </div>
            <p className="text-base font-medium text-zinc-700 dark:text-zinc-400 leading-[20px] mt-6">
              {data.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  ) : null;
}
