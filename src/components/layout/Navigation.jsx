import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdCloseCircle } from "react-icons/io";

import LogoHorizontal from "../../assets/ciglan_logo_horizontal_transparent.png";
import arrowSmall from "../../assets/arrows__small.png";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isOpen]);

  function handleMenu() {
    setIsOpen(!isOpen);
  }
  function handleCloseMenu() {
    setIsOpen(false);
  }

  return (
    <section className="w-screen   lg:w-[80%] m-auto bg-white h-30 flex justify-between md:justify-between items-center font-[Roboto_Mono] ">
      <div>
        <Link to="/" className="cursor-pointer">
          {" "}
          <img
            src={LogoHorizontal}
            alt="company logo"
            className="w-[250px] md:w-[260px] lg:w-[300px] my-2rem md:my--1rem"
          />
        </Link>
      </div>

      <nav
        className={`z-50 overflow-hidden transition-[height] duration-500 ease-in-out
          ${isOpen ? "h-[86%]" : "h-0"} md:h-auto
          absolute  top-30 md:left-0 xl:left-30 bg-black text-white w-full 
          md:w-[70%] lg:w-[60%] md:relative md:top-0 md:bg-transparent md:text-black font-[Roboto_Mono] `}
      >
        <ul className="flex flex-col items-center gap-[15vw] md:gap-[4vw] md:flex-row mt-20 md:mt-2 md:mr-[2rem] tracking-wider md:font-medium text-l">
          <li
            className="cursor-pointer hover:text-[#EDC543] transition-colors duration-300 border-b-2 pb-2 border-[#EDC543] md:border-none"
            onClick={() => handleCloseMenu()}
          >
            <Link to="/homePage">Domov</Link>
          </li>
          <li className="cursor-pointer whitespace-nowrap hover:text-[#EDC543] transition-colors duration-300 pb-2 border-b-2 border-[#EDC543] md:border-none">
            <Link to="/about">O nás</Link>
          </li>
          <li className="cursor-pointer hover:text-[#EDC543] transition-colors duration-300 border-b-2 pb-2 border-[#EDC543] md:border-none">
            <Link to="/services">Služby</Link>
          </li>
          <li className="cursor-pointer hover:text-[#EDC543] transition-colors duration-300 border-b-2 pb-2 border-[#EDC543] md:border-none">
            <Link to="/gallery">Galéria</Link>
          </li>

          <span className="md:border-2 md:border-[#EDC543]  px-2 py-1 flex justify-between items-center rounded-xl mb-2 pt-3 cursor-pointer group">
            <li className="cursor-pointer hover:text-[#EDC543] transition-colors duration-300 border-b-2  pb-2 border-[#EDC543] md:border-none">
              <Link to="/contact">Kontakt</Link>
            </li>
            <img
              src={arrowSmall}
              alt="arrows"
              className="hidden md:block pl-2 h-[100%] pb-2 transform transition-transform duration-200 group-hover:translate-y-0.5"
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
