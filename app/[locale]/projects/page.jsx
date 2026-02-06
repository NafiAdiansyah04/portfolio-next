'use client'

import { motion } from "framer-motion";
import React, { useState } from "react";
import { useTranslations } from 'next-intl';

import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";

import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import { WorkSliderBtns } from "@components/WorkSliderBtns";

// Projects data is now loaded from translations


const Projects = () => {
  const t = useTranslations('projects');
  const projectsData = t.raw('items') || [];
  const [project, setProject] = useState(projectsData[0] || {
    num: "01",
    category: "",
    desc: "",
    stack: [],
    live: "",
    github: "",
    img: ""
  });

  const handleSlideChange = (swiper) => {
    const currentSlide = swiper.activeIndex;
    setProject(projectsData[currentSlide]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.5, ease: "easeIn" }
      }}
      className="min-h-[80vh] flex justify-center flex-col py-12 xl:px-0">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* Outline Num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none text-primary-text group-hover:text-accent transition-all duration-500 capitalize">
                {project.category}
              </h2>
              {/*project description */}
              <p className="text-primary-text/60">{project.desc}</p>
              {/*stack */}
              <div className="flex flex-wrap gap-2 mt-4">
                {project.stack.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="bg-secondary-bg border border-white/10 rounded-full px-3 py-1 text-accent text-xs">
                      {item.name}
                    </div>
                  );
                })}
              </div>
              {/* border*/}
              <div className="border border-white/20"></div>
              {/* buttons */}
              <div className="flex items-center gap-4">
                {/*Live project button*/}
                <Link href={project.live}>
                  <TooltipProvider
                    delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-secondary-bg flex items-center justify-center group">
                        <BsArrowUpRight className="text-primary-text text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{t('liveProject')}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/*github button*/}
                <Link href={project.github}>
                  <TooltipProvider
                    delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-secondary-bg flex items-center justify-center group">
                        <BsGithub className="text-primary-text text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{t('github')}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
            {/*Swiper*/}

          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projectsData.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[200px] xl:h-[390px] relative group flex justify-center items-center bg-pink-50/20">
                      {/*Overlay */}
                      <div className="absolute top-0 bottom-0 w-full bg-black/10 z-10"></div>
                      {/*Image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.img}
                          fill
                          alt=""
                          className="object-contain"
                        >

                        </Image>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/*slider buttons */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute rigth-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none "
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] h-[44px] w-[44px] flex items-center justify-center transition-all rounded-full" />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;