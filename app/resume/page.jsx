'use client';

import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiMongodb, SiExpress, SiMqtt, SiMysql, SiArduino } from "react-icons/si";

const about = {
  title: "About Me",
  desc: "I am a passionate web developer with over 3 years of experience in creating dynamic and responsive websites. My expertise lies in front-end development, but I also have a strong understanding of back-end technologies. I love to learn new things and stay updated with the latest trends in web development.",
  info: [
    { fieldName: "Name", fieldValue: "Moh. Alim Nafi' Adiansyah" },
    { fieldName: "Phone", fieldValue: "+62 857 4346 0518" },
    { fieldName: "Experience", fieldValue: "2+ Years" },
    { fieldName: "Email", fieldValue: "nafiadiansyah24@gmail.com" },
    { fieldName: "Freelance", fieldValue: "Available" },
    { fieldName: "Location", fieldValue: "Sidoarjo, East Java" },
    { fieldName: "Languages", fieldValue: "Indonesian, English" },
  ]
}

const experience = {
  icon: '/assets/resume/bage.svg',
  title: "My Experience",
  desc: "I have collaborated with a range of clients and organizations — from small businesses to tech companies — focusing on building responsive web solutions, IoT integrations, and efficient digital systems that deliver real impact.",
  items: [
    {
      company: "PT. AZ Logistik Dot Com ",
      position: "QC/QA Software (Project Based)",
      time: "January 2026 – Now",
      sortDate: "2026-01", // Format: YYYY-MM untuk sorting
      desc: "Conducting thorough quality control and assurance testing for the company's logistics software applications. Identifying bugs, verifying fixes, and ensuring that the software meets specified requirements before deployment."
    },
    {
      company: "Argany Teknik",
      position: "Web Developer (Project Based)",
      time: "June 2025 | June 2025",
      sortDate: "2025-06",
      desc: "Designed and developed a responsive company profile website for an HVAC and electronics repair service. Focused on a clean UI and fast performance using React and Tailwind CSS, improving user trust and lead conversion."
    },
    {
      company: "PT. AZ Logistik Dot Com ",
      position: "AI Operator Front-End Developer (Project Based)",
      time: "November 2025 – December 2025",
      sortDate: "2025-11",
      desc: "Slicing UI from figma, and implementing API with the help of AI, as well as helping in the bug fixing process for the company's internal logistics application to improve operational efficiency."
    },
    {
      company: "Asyila Majun",
      position: "Web Developer (Project Based)",
      time: "August 2024 | August 2024",
      sortDate: "2024-08",
      desc: "Developed and maintained the company's landing page using React and Next.js with Tailwind CSS. Focused on creating a modern, responsive design to enhance user engagement and optimize business visibility online. Collaborated with cross-functional teams to ensure seamless integration of design and functionality."
    },
    {
      company: "PT. Presentologics",
      position: "Full-Stack Web Developer (Independent Study)",
      time: "January 2024 – June 2024",
      sortDate: "2024-01",
      desc: "Participated in the Kampus Merdeka Independent Study program under PT. Presentologics. Built full-stack web applications using React.js and Node.js, implemented RESTful APIs, and collaborated with mentors to follow best practices in deployment and version control."
    },
    {
      company: "Freelance",
      position: "Data Entry & Web Assistant",
      time: "June 2022 – August 2023",
      sortDate: "2022-06",
      desc: "Handled data entry tasks with high accuracy while assisting in basic web content management. Developed small-scale web interfaces for clients using HTML, CSS, and JavaScript to support their administrative workflows."
    }
  ]
};

const education = {
  icon: '/assets/resume/education.svg',
  title: "My Education",
  desc: "I have a strong educational background in computer science and web development. I am always eager to learn new skills and technologies to enhance my knowledge and expertise.",
  items: [
    {
      instituion: "Universitas Maarif Hasyim Latif",
      position: "Bachelor of Computer Science",
      time: "2021 - 2025",
    },
    {
      instituion: "SMK YPM 8 Sidoarjo",
      position: "Automotive vocational school",
      time: "2018 - 2021",
    },
  ]
}

const skills = {
  title: "My Skills",
  desc: "I have a diverse set of skills that I have acquired through my education and work experience. I am proficient in a variety of programming languages and frameworks, and I am always eager to learn new skills.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "HTML5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS3",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
    },
    {
      icon: <FaReact />,
      name: "React.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    },
    {
      icon: <SiExpress />,
      name: "Express.js",
    },
    {
      icon: <SiMongodb />,
      name: "MongoDB",
    },
    {
      icon: <SiMysql />,
      name: "MySQL",
    },
    {
      icon: <SiMqtt />,
      name: "MQTT",
    },
    {
      icon: <SiArduino />,
      name: "Arduino",
    }
  ]
}

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@components/ui/tooltip";
import { ScrollArea } from "@components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  // Sorting experience items dynamically by date (newest first)
  const sortedExperienceItems = [...experience.items].sort((a, b) => {
    // Handle "Now" as current date
    const dateA = a.sortDate === "Now" ? "9999-12" : a.sortDate;
    const dateB = b.sortDate === "Now" ? "9999-12" : b.sortDate;
    return dateB.localeCompare(dateA); // Descending order (newest first)
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5, ease: "easeIn", delay: 2.4 } }}
      className="min-h-[80vh] flex items-start justify-center py-12 xl:py-0">
      <div className="container mx-auto ">
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>

          {/* Content */}
          <div className="min-h-[70vh] w-full">
            {/* Experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.desc}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {sortedExperienceItems.map((item, index) => {
                      return (
                        <li key={index} className="bg-[#232329] h-auto py-6 px-10 flex flex-col justify-start lg:items-start gap-3 rounded-xl">
                          <span className="text-accent text-sm font-semibold whitespace-nowrap overflow-hidden text-ellipsis">{item.time}</span>
                          <h3 className="text-xl h-[80px] text-center lg:text-left font-bold line-clamp-3">{item.position}</h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] bg-accent rounded-full flex-shrink-0"></span>
                            <p className="text-white/60 font-medium">{item.company}</p>
                          </div>
                          <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
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
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.desc}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] items-start">
                    {education.items.map((item, index) => {
                      return (
                        <li key={index} className="bg-[#232329] h-auto py-6 px-10 flex flex-col justify-start items-center lg:items-start gap-3 rounded-xl">
                          <span className="text-accent text-sm font-semibold">{item.time}</span>
                          <h3 className="text-xl h-[72px] text-center lg:text-left font-bold line-clamp-3">{item.position}</h3>
                          <div className="flex items-start gap-3">
                            <span className="w-[6px] h-[6px] bg-accent rounded-full flex-shrink-0 mt-1.5"></span>
                            <p className="text-white/60 font-medium line-clamp-2">{item.instituion}</p>
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
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.desc}</p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((item, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] flex items-center justify-center rounded-xl bg-[#232329] group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {item.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent className="bg-white/10 text-white/80 border-0 shadow-lg">
                              <p className="capitalize ">{item.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </TabsContent>
            {/* About */}
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.desc}</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-lg">{item.fieldValue}</span>
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