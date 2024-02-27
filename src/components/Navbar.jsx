import { useState } from "react";
import DesktopNavbar from "./DesktopNavbar";
import Menubar from "./Menubar";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <DesktopNavbar setShowMenu={setShowMenu} />
      <Menubar showMenu={showMenu} setShowMenu={setShowMenu} />
    </>
  );
};

export default Navbar;
