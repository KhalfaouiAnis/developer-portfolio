"use client";

import Image from "next/image";
import { FaArrowTrendUp } from "react-icons/fa6";
import data from "@/data/projects";
import Heading from "./Heading";
import SectionWrapper from "./SectionWrapper";
import { Fragment, useState } from "react";
import Modal from "./Modal";

export default function Projects() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);

  const toggleModal = () => setModalOpen((prevState) => !prevState);

  return (
    <Fragment>
      <Modal open={modalOpen} data={modalData} toggle={toggleModal} />
      <SectionWrapper>
        <Heading>Personal projects</Heading>
        {data.map((project) => (
          <div
            key={project.id}
            className="flex flex-wrap gap-5 w-full lg:w-8/12 mb-10"
          >
            <div className="relative w-full md:w-[120px] pt-[56.25%] md:pt-0 md:h-20 rounded-lg">
              <Image
                src={project.image}
                fill
                alt="project image"
                className="w-full h-full absolute inset-0"
              />
            </div>
            <div className="flex-1">
              <div className="flex space-x-3">
                <h2 className="text-lg md:text-xl font-bold text-zinc-700 dark:text-zinc-400 leading-[24px]">
                  {project.title}
                </h2>
                <FaArrowTrendUp
                  onClick={() => {
                    toggleModal();
                    setModalData(project);
                  }}
                  className="text-[20px] text-zinc-900 dark:text-white cursor-pointer"
                />
              </div>
              <p className="text-base font-semibold text-zinc-500 dark:text-zinc-400 mt-2">
                {project.description.length > 100 ? (
                  <span>{project.description.slice(0, 100)}...</span>
                ) : (
                  project.description
                )}
              </p>
            </div>
          </div>
        ))}
      </SectionWrapper>
    </Fragment>
  );
}
