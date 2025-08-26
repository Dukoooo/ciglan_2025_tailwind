import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdCloseCircle } from "react-icons/io";

import LogoHorizontal from "../../assets/ciglan_logo_horizontal_transparent.png";
import arrowSmall from "../../assets/arrows__Small.png";
import { useState } from "react";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  function handleMenu() {
    setIsOpen(!isOpen);
  }
  function handleCloseMenu() {
    setIsOpen(false);
  }

  return (
    <section className="w-[100%]   lg:w-[80%] m-auto bg-white h-30 flex justify-between md:justify-between items-center font-[Roboto_Mono] 2xl:w-[1300px]">
      <img
        src={LogoHorizontal}
        alt="company logo"
        className="w-[250px] md:w-[260px] lg:w-[300px] my-2rem md:my--1rem"
      />
      <nav
        className={`z-50 overflow-hidden transition-[height] duration-500 ease-in-out
          ${isOpen ? "h-[83%]" : "h-0"} md:h-auto
          absolute  top-30 md:left-0 xl:left-30 bg-black text-white w-full 
          md:w-[70%] lg:w-[60%] md:relative md:top-0 md:bg-transparent md:text-black`}
      >
        <ul className="flex flex-col items-center gap-[15vw] md:gap-[4vw] md:flex-row mt-20 md:mt-2 md:mr-[2rem] tracking-wider md:font-medium text-l">
          <li className="cursor-pointer hover:text-[#EDC543] transition-colors duration-300 border-b-2 pb-2 border-[#EDC543] md:border-none">
            <Link
              to="hero"
              smooth={true}
              duration={500}
              offset={-150}
              onClick={() => handleCloseMenu()}
            >
              Domov
            </Link>
          </li>
          <li className="cursor-pointer whitespace-nowrap hover:text-[#EDC543] transition-colors duration-300 pb-2 border-b-2 border-[#EDC543] md:border-none">
            <Link
              to="about"
              smooth={true}
              duration={500}
              offset={50}
              onClick={() => handleCloseMenu()}
            >
              O nás
            </Link>
          </li>
          <li className="cursor-pointer hover:text-[#EDC543] transition-colors duration-300 border-b-2 pb-2 border-[#EDC543] md:border-none">
            <Link
              to="section3"
              smooth={true}
              duration={500}
              offset={50}
              onClick={() => handleCloseMenu()}
            >
              Služby
            </Link>
          </li>
          <li className="cursor-pointer hover:text-[#EDC543] transition-colors duration-300 border-b-2 pb-2 border-[#EDC543] md:border-none">
            <Link
              to="section4"
              smooth={true}
              duration={500}
              offset={50}
              onClick={() => handleCloseMenu()}
            >
              Galéria
            </Link>
          </li>

          <span className="md:border-3 md:border-[#EDC543] pl-2 pr-4 flex justify-between items-center cursor-pointer group">
            <li className="transition-colors duration-300 border-b-2 pb-2 border-[#EDC543] md:border-none md:py-1">
              <Link
                to="section5"
                smooth={true}
                duration={500}
                offset={50}
                onClick={() => handleCloseMenu()}
              >
                Kontakt
              </Link>
            </li>
            <img
              src={arrowSmall}
              alt="arrows"
              className="hidden md:block pl-2 h-[100%] transform transition-transform duration-200 group-hover:translate-y-0.5"
            />
          </span>
        </ul>
      </nav>
      <span
        className="md:hidden mr-7 text-5xl cursor-pointer"
        onClick={handleMenu}
      >
        {isOpen ? <IoMdCloseCircle /> : <GiHamburgerMenu />}
      </span>
    </section>
  );
}

export default Navigation;
