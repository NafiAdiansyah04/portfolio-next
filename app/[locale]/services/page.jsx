'use client';

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTranslations } from 'next-intl';

const Services = () => {
  const t = useTranslations('services');

  // Get services from translations
  const services = t.raw('items');

  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.5, ease: "easeIn" }
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div key={index} className="flex-1 flex flex-col gap-6 group">
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{service.num}
                  </div>
                  <Link href={service.href || "#"}
                    className="w-[70px] h-[70px] rounded-full bg-secondary-bg dark:bg-white group-hover:bg-accent transition-all duration-500 flex items-center justify-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-3xl text-primary" />
                  </Link>

                </div>
                <h2 className="text-[42px] font-bold leading-none text-primary-text group-hover:text-accent transition-all duration-500">{service.title}</h2>
                <p className="text-primary-text/60">{service.description}</p>
                <div className="border-b border-primary-text/20 w-full mt-auto"></div>
              </div>

            )
          })}
        </motion.div>
      </div>
    </section>

  );
};
export default Services;
