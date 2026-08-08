"use client";
import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
export function Reveal({children}:{children:ReactNode}){const reduced=useReducedMotion();return <motion.div initial={reduced?false:{opacity:0,y:16}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.45}}>{children}</motion.div>}
