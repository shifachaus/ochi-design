import { motion } from "framer-motion";

const Marquee = () => {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed=".2"
      className="w-full py-20 rounded-tl-3xl rounded-tr-3xl h-[60vh] bg-[#004d43]"
    >
      <div className="border-t-[1px] border-b-[1px] border-zinc-400 flex  overflow-hidden whitespace-nowrap ">
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", duration: 10, repeat: Infinity }}
          className="text-[22vw] leading-none font-Founders_Grotesk_X-Condensed font-bold uppercase   -mt-[2vw] pr-20 "
        >
          We are ochi
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", duration: 10, repeat: Infinity }}
          className="text-[22vw] leading-none font-Founders_Grotesk_X-Condensed font-bold uppercase  -mt-[2vw]  pr-20"
        >
          We are ochi
        </motion.h1>
      </div>
    </div>
  );
};

export default Marquee;
