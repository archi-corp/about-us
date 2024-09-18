"use client";

import { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const variants = {
  hidden: { opacity: 0, x: -100 },
  enter: { opacity: 1, x: 0 },
};

export default function TransitionWrapper({
  children,
}: {
  children: ReactNode;
}) {
  const pathname = usePathname();
  return (
    <AnimatePresence mode="sync">
      <motion.div
        key={pathname}
        initial="hidden"
        animate="enter"
        variants={variants}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 40,
          duration: 1.5,
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
