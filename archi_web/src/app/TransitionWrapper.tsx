"use client";

import { ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

const variants = {
  hidden: { opacity: 0.5, x: -100 },
  enter: { opacity: 1, x: 0},
  exit: { opacity: 0.5, x: 100 },
};

export default function TransitionWrapper({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  return (
    <AnimatePresence mode ="wait">
      <motion.div
        key={pathname}
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{ type: 'linear', duration: 0.5 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}