import About from "./components/About";
import Cards from "./components/Cards";
import Featured from "./components/Featured";
import Footer from "./components/Footer";
import GooglyEyes from "./components/GooglyEyes";
import Landing from "./components/Landing";
import Marquee from "./components/Marquee";
import Menubar from "./components/Menubar";
import Navbar from "./components/Navbar";
import LocomotiveScroll from "locomotive-scroll";

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className="w-full mx-auto  min-h-screen bg-zinc-950 text-white">
      <Navbar />

      <Landing />
      <Marquee />
      <About />
      <GooglyEyes />
      <Featured />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
