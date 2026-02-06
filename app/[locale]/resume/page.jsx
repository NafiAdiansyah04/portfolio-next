'use client';

import { useState } from "react";
import { useTranslations } from 'next-intl';

import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiMongodb, SiExpress, SiMqtt, SiMysql, SiArduino } from "react-icons/si";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@components/ui/tooltip";
import { ScrollArea } from "@components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  const [openSkillIndex, setOpenSkillIndex] = useState(null);
  const t = useTranslations('resume');

  const about = t.raw('about');
  const experienceData = t.raw('experience');
  const educationData = t.raw('education');
  const skillsData = t.raw('skills');

  // Sorting experience items dynamically by date (newest first)
  const sortedExperienceItems = [...(experienceData?.items || [])].sort((a, b) => {
    // Handle "Now" or "Sekarang" as current date
    const dateA = (a.sortDate === "Now" || a.sortDate === "Sekarang") ? "9999-12" : (a.sortDate || "0000-00");
    const dateB = (b.sortDate === "Now" || b.sortDate === "Sekarang") ? "9999-12" : (b.sortDate || "0000-00");
    return dateB.localeCompare(dateA); // Descending order (newest first)
  });

  const skillList = [
    { icon: <FaHtml5 />, name: "HTML5" },
    { icon: <FaCss3 />, name: "CSS3" },
    { icon: <FaJs />, name: "JavaScript" },
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <FaReact />, name: "React.js" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <SiExpress />, name: "Express.js" },
    { icon: <SiMongodb />, name: "MongoDB" },
    { icon: <SiMysql />, name: "MySQL" },
    { icon: <SiMqtt />, name: "MQTT" },
    { icon: <SiArduino />, name: "Arduino" }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5, ease: "easeIn", delay: 2.4 } }}
      className="min-h-[80vh] flex items-start justify-center py-12 xl:py-0">
      <div className="container mx-auto ">
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">{t('tabs.experience')}</TabsTrigger>
            <TabsTrigger value="education">{t('tabs.education')}</TabsTrigger>
            <TabsTrigger value="skills">{t('tabs.skills')}</TabsTrigger>
            <TabsTrigger value="about">{t('tabs.about')}</TabsTrigger>
          </TabsList>

          {/* Content */}
          <div className="min-h-[70vh] w-full">
            {/* Experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold text-primary-text">{experienceData.title}</h3>
                <p className="max-w-[600px] text-primary-text/60 mx-auto xl:mx-0">{experienceData.desc}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {sortedExperienceItems.map((item, index) => {
                      return (
                        <li key={index} className="bg-secondary-bg h-auto py-6 px-10 flex flex-col justify-start lg:items-start gap-3 rounded-xl">
                          <span className="text-accent text-sm font-semibold whitespace-nowrap overflow-hidden text-ellipsis">{item.time}</span>
                          <h3 className="text-xl h-[80px] text-center lg:text-left font-bold line-clamp-3">{item.position}</h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] bg-accent rounded-full flex-shrink-0"></span>
                            <p className="text-primary-text/60 font-medium">{item.company}</p>
                          </div>
                          <p className="text-primary-text/60 text-sm leading-relaxed">{item.desc}</p>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* Education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold text-primary-text">{educationData.title}</h3>
                <p className="max-w-[600px] text-primary-text/60 mx-auto xl:mx-0">{educationData.desc}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] items-start">
                    {educationData.items.map((item, index) => {
                      return (
                        <li key={index} className="bg-secondary-bg h-auto py-6 px-10 flex flex-col justify-start items-center lg:items-start gap-3 rounded-xl">
                          <span className="text-accent text-sm font-semibold">{item.time}</span>
                          <h3 className="text-xl h-[72px] text-center lg:text-left font-bold line-clamp-3">{item.position}</h3>
                          <div className="flex items-start gap-3">
                            <span className="w-[6px] h-[6px] bg-accent rounded-full flex-shrink-0 mt-1.5"></span>
                            <p className="text-primary-text/60 font-medium line-clamp-2">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* Skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold text-primary-text">{skillsData.title}</h3>
                  <p className="max-w-[600px] text-primary-text/60 mx-auto xl:mx-0">{skillsData.desc}</p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skillList.map((item, index) => {
                    return (
                      <li key={index}>
                        <Tooltip open={openSkillIndex === index} onOpenChange={(isOpen) => setOpenSkillIndex(isOpen ? index : null)}>
                          <TooltipTrigger
                            onClick={() => setOpenSkillIndex(openSkillIndex === index ? null : index)}
                            className="w-full h-[150px] flex items-center justify-center rounded-xl bg-secondary-bg group">
                            <div className="text-6xl group-hover:text-accent transition-all duration-300">
                              {item.icon}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize ">{item.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </TabsContent>
            {/* About */}
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold text-primary-text">{about.title}</h3>
                <p className="max-w-[600px] text-primary-text/60 mx-auto xl:mx-0">{about.desc}</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                        <span className="text-primary-text/60">{item.fieldName}</span>
                        <span className="text-lg text-primary-text">{item.fieldValue}</span>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;