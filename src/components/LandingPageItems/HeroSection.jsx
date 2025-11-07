import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useEffect } from "react";
import { FiArrowRight } from "react-icons/fi";
import { DashBoardPic } from "../../constants/index.js";
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

export const HeroSection = () => {
  const color = useMotionValue(COLORS_TOP[0]);

  // useEffect(() => {
  //   animate(color, COLORS_TOP, {
  //     ease: "easeInOut",
  //     duration: 10,
  //     repeat: Infinity,
  //     repeatType: "mirror",
  //   });
  // }, []);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  return (
    <motion.section
      style={{
        backgroundImage,
      }}
      className="relative grid min-h-screen place-content-center overflow-hidden bg-gray-950 px-4 py-24 text-gray-200"
    >
      <div className="flex justify-center items-center flex-wrap gap-4 mt-6">
        <div className="relative z-40 flex flex-col items-center">
          <span className="mb-1.5 inline-block rounded-full bg-gray-600/50 px-3 py-1.5 text-sm">
            Beta Now Live!
          </span>
          <h1 className="max-w-3xl bg-gradient-to-br from-white to-gray-400 bg-clip-text text-start text-4xl leading-tight text-transparent sm:text-5xl sm:leading-tight md:text-6xl md:leading-tight font-bold whitespace-nowrap ">
            Unify Your Workflow. <br /> Control Your Day. <br /> Welcome to
            Zentask.
          </h1>
          <p className="my-6 max-w-xl text-center text-base leading-relaxed md:text-lg md:leading-relaxed">
            Stop toggling between tools. Zentask provides a seamless, intuitive
            space for task management, goal tracking, and team collaboration.
            Everything you need to transform your productivity is now in one
            elegant platform.
          </p>
          <motion.button
            style={{
              border,
              boxShadow,
            }}
            whileHover={{
              scale: 1.015,
            }}
            whileTap={{
              scale: 0.985,
            }}
            className="group relative flex w-fit items-center gap-1.5 rounded-full bg-gray-950/10 px-4 py-2 text-gray-50 transition-colors hover:bg-gray-950/50"
          >
            Start free
            <FiArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
          </motion.button>
        </div>

        <div className="shadow flex justify-center items-center p-1 border-[2px] border-blue-800 rounded-md bg-blue-400">
          <img
            src={DashBoardPic}
            alt="Dashboard Img"
            className="md:w-[48vw] w-[70vw] rounded-md"
          />
          <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent from-70% to-black"></div>
        </div>
      </div>

      <div className="absolute inset-0 z-0">
        {/* <Canvas>
          <Stars radius={50} count={2500} factor={4} fade speed={2} />
        </Canvas> */}
      </div>
    </motion.section>
  );
};

export default HeroSection;
