const Cards = () => {
  return (
    <div className="w-full min-h-screen bg-zinc-100 flex flex-col md:flex-row gap-5 px-10 py-20">
      <div className="md:w-1/2 h-[50vh] ">
        <div className="relative w-full  rounded-lg h-full bg-[#004d43] flex items-center justify-center">
          <img
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt=""
            className="w-24 md:w-32"
          />
          <button className="absolute left-10 bottom-10 py-1 text-zinc-300 px-3 border-[1px] border-zinc-300 rounded-full">
            2019-2022
          </button>
        </div>
      </div>

      <div className="md:w-1/2  h-[100vh] sm:h-[50vh]   flex flex-col sm:flex-row gap-5">
        <div className="relative w-full rounded-lg h-full bg-[#021e1a] flex items-center justify-center">
          <img
            src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
            alt=""
            className="w-24 md:w-32"
          />
          <button className="uppercase absolute left-10 bottom-10 py-1 text-zinc-300 px-3 border-[1px] border-zinc-300 rounded-full">
            Rating 5.0 on clutch
          </button>
        </div>
        <div className=" relative w-full rounded-lg h-full bg-[#021e1a] flex items-center justify-center">
          <img
            src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
            alt=""
            className="w-24 md:w-32"
          />
          <button className="uppercase absolute  left-5 lg:left-10  bottom-10 py-1 text-zinc-300 px-2 border-[1px] border-zinc-300 rounded-full">
            business bootcamp alumni
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
