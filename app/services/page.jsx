'use client';

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Web Development",
    description: "Building fast, responsive, and interactive websites using modern technologies like React, Node.js, and Tailwind CSS to support your digital business growth.",
    href: ""
  },
  {
    num: "02",
    title: "Data Entry",
    description: "Providing accurate, structured, and efficient data entry services to help businesses organize and manage information effectively.",
    href: ""
  },
  {
    num: "03",
    title: "IT Support",
    description: "Delivering reliable technical assistance, including system maintenance, troubleshooting, and infrastructure optimization to keep your operations running smoothly.",
    href: ""
  },
  {
    num: "04",
    title: "IoT Development",
    description: "Creating integrated Internet of Things (IoT) solutions for real-time device monitoring and control, enabling automation and efficiency across various industries.",
    href: ""
  }
];



const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
    <div className="container mx-auto">
      <motion.div 
      initial={{ opacity:0}}
      animate={{
        opacity:1,
        transition: { delay: 2.4, duration: 0.5, ease: "easeIn" }
      }}
      className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
      >
        {services.map((service, index) => {
          return (
            <div key={index} className="flex-1 flex flex-col gap-6 justify-center group">
              <div className="w-full flex justify-between items-center">
                <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{service.num}
                </div>
                <Link href={service.href}
                className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex items-center justify-center hover:-rotate-45"
                > 
                <BsArrowDownRight className="text-3xl text-primary"/>
                </Link>
                
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{service.title}</h2>
              <p className="text-white/60">{service.description}</p>
              <div className="border-b border-white/20 w-full"></div>
            </div>
          
        )
        })}
        </motion.div>
    </div>
    </section>

  );
};
export default Services;