'use client'

import { motion } from "framer-motion";
import React, { useState } from "react";


import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {Swiper, SwiperSlide} from 'swiper/react';
import "swiper/css";

import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import { WorkSliderBtns } from "@components/WorkSliderBtns";

const projects = [
  {
    num:'01',
    category: 'Full Stack',
    title: 'Wisata Wonders',
    desc: 'A web-based tourism platform that allows users to explore various travel destinations, view detailed information, and plan trips efficiently. Built with the MERN stack (MongoDB, Express, React, Node.js) and designed with responsive UI for an engaging user experience.',
    stack: [
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "JavaScript" },
      { name: "Bootstrap" },
      { name: "Node.js" },
      { name: "Express" },
      { name: "MongoDB" }
    ],
    img: '/assets/projects/porto-WW.webp',
    github: 'https://github.com',
    live: 'https://wisata-wonders.vercel.app/'
  },
  {
    num:'02',
    category: 'Frontend',
    title: 'Argany Teknik',
    desc: 'A responsive company profile website for Argany Teknik, an air conditioner and electronic repair service provider. Built using React and Tailwind CSS to ensure a modern, fast-loading, and mobile-friendly design that highlights the company’s services and contact information.',
    stack: [
      { name: "HTML5" },
      { name: "Tailwind CSS" },
      { name: "JavaScript" },
      { name: "React" }
    ],
    img: '/assets/projects/porto-AT.webp',
    github: 'https://github.com',
    live: 'https://www.arganyteknik.biz.id/'
  },
  {
    num:'03',
    category: 'Full Stack IoT Dashboard',
    title: 'Smart Chili Garden',
    desc: 'An IoT-based monitoring and control system for chili plantations. The dashboard displays real-time soil moisture data and allows remote control of irrigation and pesticide systems. Integrated with ESP32, MQTT protocol, and a Node.js backend connected to a MySQL database.',
    stack: [
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "JavaScript" },
      { name: "Node.js" },
      { name: "Express" },
      { name: "MySQL" },
      { name: "MQTT" },
      { name: "Arduino" }
    ],
    img: '/assets/projects/porto-SCG.webp',
    github: 'https://github.com',
    live: 'https://smart-chili-garden.vercel.app/'
  },
  {
    num:'04',
    category: 'Frontend',
    title: 'Asyila Majun',
    desc: 'A modern landing page for Asyila Majun, a business specializing in selling industrial cleaning cloths made from recycled fabrics. Developed with React, Next.js, and Tailwind CSS, focusing on clean design, SEO optimization, and clear product presentation.',
    stack: [
      { name: "HTML5" },
      { name: "Tailwind CSS" },
      { name: "JavaScript" },
      { name: "React" },
      { name: "Node.js" },
      { name: "Next.js" }
    ],
    img: '/assets/projects/porto-AM.webp',
    github: 'https://github.com',
    live: 'https://new-asyila-majun.vercel.app/'
  }
];


const Projects = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentSlide = swiper.activeIndex;
    setProject(projects[currentSlide]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 ,
      transition: { delay: 2.4, duration: 0.5, ease: "easeIn" } }}
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
            <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
              {project.category}
            </h2>
            {/*project description */}
            <p className="text-white/60">{project.desc}</p>
            {/*stack */}
            <div className="flex flex-wrap gap-2 mt-4">
              {project.stack.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="bg-white/10 border border-white/20 rounded-full px-3 py-1 text-accent text-xs">
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
                  <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex items-center justify-center group">
                    <BsArrowUpRight className="text-white text-3xl group-hover:text-accent"/>                  
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Live Project</p>
                    </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              </Link>
              {/*github button*/}
              <Link href={project.github}>
              <TooltipProvider
              delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex items-center justify-center group">
                    <BsGithub className="text-white text-3xl group-hover:text-accent"/>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>GitHub</p>
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
                {projects.map((project, index) => {
                  return (
                    <SwiperSlide key={index} className="w-full">
                      <div className="h-[390px] relative group flex justify-center items-center bg-pink-50/20">
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
                containerStyles="flex gap-2 absolute rigth-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" 
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] h-[44px] w-[44px] flex items-center justify-center transition-all"/>
              </Swiper>
            </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;