const About = () => {
  return (
    <div className="w-full px-10 py-20 rounded-tl-3xl rounded-tr-3xl  bg-[#cdea68] ">
      <h2 className="font-['Neue_Montreal'] text-[3.5vw] tracking-tight text-black">
        Ochi is a strategic partner for fast-growing tech businesses that need
        to raise funds, sell products, explain complex ideas, and hire great
        people.
      </h2>

      <div className="flex flex-col gap-5 md:flex-row w-full border-t-[2px] mt-20 pt-10 border-[#9cc310]">
        <div className="w-1/2">
          <h3 className="text-4xl text-black">Our approach:</h3>
          <button className=" px-6 py-4 flex gap-4 items-center justify-center mt-10 rounded-full border-[1px] border-zinc-400 bg-zinc-800">
            Read more <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
          </button>
        </div>

        <div className=" md:w-1/2 h-[70vh] bg-[#dceca0] rounded-lg"></div>
      </div>
    </div>
  );
};

export default About;
