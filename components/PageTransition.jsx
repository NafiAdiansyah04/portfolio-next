"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const PageTransition = ({ children }) => {
  const pathname = usePathname();

  return (
    <>
      {/* Overlay transition */}
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          initial={{ opacity: 1 }}
          animate={{ opacity: 0, transition: { delay: 1, duration: 0.4, ease: "easeInOut" } }}
          exit={{ opacity: 1 }}
          className="h-screen w-screen bg-primary fixed top-0 left-0 z-50 pointer-events-none"
        />
      </AnimatePresence>

      {/* Page content */}
      <div className="relative z-0">{children}</div>
    </>
  );
};

export default PageTransition;
