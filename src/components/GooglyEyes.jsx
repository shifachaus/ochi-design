import { useEffect, useState } from "react";

const GooglyEyes = () => {
  const [rotate, setRotate] = useState();

  useEffect(() => {
    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="w-full h-screen overflow-hidden">
      <div
        data-scroll
        data-scroll-speed="-.7"
        className="relative w-full h-full bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg')]"
      >
        <div className="absolute flex gap-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  ">
          <div className="flex items-center justify-center bg-zinc-100 w-[15vw] h-[15vw]  rounded-full">
            <div className="relative bg-zinc-900 w-2/3 h-2/3 rounded-full">
              <div
                style={{
                  transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                }}
                className="absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2  w-full h-4 transform rotate-45 "
              >
                <div className="bg-zinc-100 w-4 h-4 rounded-full"></div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center bg-zinc-100 w-[15vw] h-[15vw]  rounded-full">
            <div className="relative bg-zinc-900 w-2/3 h-2/3  rounded-full">
              <div
                style={{
                  transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                }}
                className="absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2  w-full h-4 transform rotate-45 "
              >
                <div className="bg-zinc-100 w-4 h-4 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GooglyEyes;
