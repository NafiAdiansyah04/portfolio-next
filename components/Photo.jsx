'use client';

import { motion } from "framer-motion";
import Image from "next/image";

export const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { duration: 0.4, delay: 2, ease: "easeInOut" }
        }}>
        {/* Metallic circular frame behind photo */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
            w-[270px] h-[270px] xl:w-[462px] xl:h-[462px] rounded-full"
          style={{
            background: 'linear-gradient(145deg, var(--sku-raised-from), var(--sku-panel-to))',
            boxShadow: '0 6px 24px rgba(0,0,0,0.55), inset 0 2px 0 rgba(255,255,255,0.12), inset 0 -2px 0 rgba(0,0,0,0.3)',
            border: '2px solid var(--border-color)',
          }}
        />
        {/* Image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 0.4, delay: 2.4, ease: "easeInOut" }
          }}
          className="w-[260px] h-[260px] xl:w-[450px] xl:h-[450px] dark:mix-blend-lighten absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Image src="/assets/Profile.png" priority quality={100} fill alt="" className="object-contain" />
        </motion.div>
        {/* Animated circle */}
        <motion.svg
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 0.4, delay: 2.8, ease: "easeInOut" }
          }}
          className="w-[300px] h-[300px] xl:w-[506px] xl:h-[506px]"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            strokeWidth="4"
            stroke="#4B70F5"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 20 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{ duration: 20, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
          />
        </motion.svg>
      </motion.div>
    </div>
  )
}

export default Photo
