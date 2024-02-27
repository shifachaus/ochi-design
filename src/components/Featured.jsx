import { motion, useAnimation } from "framer-motion";

const Featured = () => {
  const controls = [useAnimation(), useAnimation()];

  const handleHoverStart = (index) => {
    controls[index].start({ y: 0 });
  };

  const handleHoverEnd = (index) => {
    controls[index].start({ y: "100%" });
  };

  return (
    <div className="w-full py-20">
      <div className="w-full px-10  border-b-[1px] border-zinc-700 pb-20">
        <h4 className="text-4xl font-['Neue_Montreal'] tracking-tight">
          Featured projects
        </h4>
      </div>
      <div className="px-10 overflow-hidden">
        <div className="w-full flex flex-col md:flex-row gap-10 mt-10">
          <motion.div
            onHoverStart={() => handleHoverStart(0)}
            onHoverEnd={() => handleHoverEnd(0)}
            className="md:w-1/2  h-[75vh] relative "
          >
            <div className="w-full h-full rounded-xl overflow-hidden ">
              <h1 className="text-[#cdea68] flex overflow-hidden absolute left-1/2 md:left-full -translate-x-1/2 top-1/2 -translate-y-1/2  text-9xl z-[9] font-Founders_Grotesk_X-Condensed font-semibold leading-none tracking-tighter">
                {"FYDE".split("").map((item, index) => (
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={controls[0]}
                    transition={{
                      ease: [0.22, 1, 0.36, 1],
                      delay: index * 0.06,
                    }}
                    className="inline-block "
                    key={index}
                  >
                    {item}
                  </motion.span>
                ))}
              </h1>
              <img
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png"
                alt=""
                className="w-full h-full bg-cover "
              />
            </div>
          </motion.div>

          <motion.div
            onHoverStart={() => handleHoverStart(1)}
            onHoverEnd={() => handleHoverEnd(1)}
            className="md:w-1/2  h-[75vh] relative "
          >
            <div className="w-full h-full rounded-xl  overflow-hidden ">
              <h1 className="text-[#cdea68] flex overflow-hidden absolute  left-1/2 md:left-0 -translate-x-1/2 top-1/2 -translate-y-1/2  text-9xl z-[9] font-Founders_Grotesk_X-Condensed font-semibold leading-none tracking-tighter">
                {"VISE".split("").map((item, index) => (
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={controls[1]}
                    transition={{
                      ease: [0.22, 1, 0.36, 1],
                      delay: index * 0.06,
                    }}
                    className="inline-block "
                    key={index}
                  >
                    {item}
                  </motion.span>
                ))}
              </h1>
              <img
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-1326x1101.jpg"
                alt=""
                className="w-full h-full bg-cover "
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
