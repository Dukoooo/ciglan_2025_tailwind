import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdCloseCircle } from "react-icons/io";

import LogoHorizontal from "../assets/ciglan_logo_horizontal_transparent.png";
import arrowSmall from "../assets/arrows__Small.png";
import { useState } from "react";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  function handleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <section class="w-[100%] lg:w-[80%] m-auto bg-white h-30 flex justify-between md:justify-between items-center font-[RobotoMono] ">
      <img
        src={LogoHorizontal}
        alt="company logo"
        class="w-[250px] md:w-[260px]"
      />
      <nav
        class={` overflow-hidden transition-[max-height] duration-500 ease-in-out
    ${
      isOpen ? "max-h-3/4" : "max-h-0"
    }  absolute h-[82%] top-30 left-0 bg-black text-white w-full md:w-[65%] lg:w-[60%] md:relative  md:top-5   md:bg-transparent md:text-black `}
      >
        <ul class="flex flex-col items-center  gap-[10vw] md:gap-[4vw] md:flex-row mt-25 md:mt-2 md:mr-[2rem] tracking-wider md:font-medium text-xl">
          <li class="cursor-pointer hover:text-[#EDC543] transition-colors duration-300">
            <Link to="section1" smooth={true} duration={500} offset={50}>
              Domov
            </Link>
          </li>
          <li class="cursor-pointer whitespace-nowrap hover:text-[#EDC543] transition-colors duration-300">
            {" "}
            <Link to="section2" smooth={true} duration={500} offset={50}>
              O nás
            </Link>
          </li>
          <li class="cursor-pointer hover:text-[#EDC543] transition-colors duration-300">
            {" "}
            <Link to="section3" smooth={true} duration={500} offset={50}>
              Služby
            </Link>
          </li>
          <li class="cursor-pointer hover:text-[#EDC543] transition-colors duration-300">
            {" "}
            <Link to="section4" smooth={true} duration={500} offset={50}>
              Galéria
            </Link>
          </li>

          <span class="border-3 border-[#EDC543] pl-2 pr-4 flex justify-between items-center cursor-pointer">
            <li class="hover:text-[#EDC543] transition-colors duration-300">
              <Link to="section5" smooth={true} duration={500} offset={50}>
                Kontakt
              </Link>
            </li>
            <img src={arrowSmall} alt="arrows" class="pl-2 h-[100%] " />
          </span>
        </ul>
      </nav>
      <span class="md:hidden mr-7 text-5xl cursor-pointer" onClick={handleMenu}>
        {isOpen ? <IoMdCloseCircle /> : <GiHamburgerMenu />}
      </span>
    </section>
  );
}

export default Navigation;
