import { motion } from "framer-motion";
import { FaArrowUpLong } from "react-icons/fa6";

const Landing = () => {
  return (
    <div
      data-scroll
      data-scroll-speed="-.3"
      className="w-full h-screen bg-zinc-900 pt-1"
    >
      <div className="mt-44 px-10">
        {["We Create", "EYE-OPENING", "PRESENTATIONS"].map((item, index) => {
          return (
            <div className="" key={index}>
              <div className="w-fit flex items-center ">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "10vw" }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                    className=" mr-[1vw] w-[10vw] rounded-md h-[5.5vw] relative  top-[5px] bg-green-500 "
                  ></motion.div>
                )}
                <h1 className=" font-Founders_Grotesk_X-Condensed uppercase text-[7vw] leading-[.9] tracking-tighter font-bold">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>

      <div className="border-t-[1px] border-zinc-800 mt-20 flex flex-col gap-4 justify-between md:items-center md:flex-row py-5 px-10">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => {
          return (
            <p
              key={index}
              className="text-md font-light tracking-tight leading-none "
            >
              {item}
            </p>
          );
        })}
        <div className="flex items-center gap-5">
          <div className="font-light uppercase text-md px-5 py-2 border-[1px] rounded-full border-zinc-400">
            Start the project
          </div>

          <div className="hidden  md:flex  items-center justify-center w-10 h-10 rounded-full border-[1px] border-zinc-400">
            <span className="rotate-45">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
