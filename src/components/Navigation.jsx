import { Link } from "react-scroll";
import LogoHorizontal from "../assets/ciglan_logo_horizontal_transparent.png";
import arrowSmall from "../assets/arrows__Small.png";

function Navigation() {
  return (
    <section class="w-screen bg-white h-30 flex justify-between items-center font-[RobotoMono] ">
      <img src={LogoHorizontal} alt="company logo" class="w-[300px]" />
      <nav class="">
        <ul class="flex flex-col items-center gap-[4vw] md:flex-row  md:mr-[6rem] tracking-wider md:font-medium md:text-xl">
          <li class="cursor-pointer">
            <Link to="section1" smooth={true} duration={500} offset={50}>
              Domov
            </Link>
          </li>
          <li class="cursor-pointer">
            {" "}
            <Link to="section2" smooth={true} duration={500} offset={50}>
              O nás
            </Link>
          </li>
          <li class="cursor-pointer">
            {" "}
            <Link to="section3" smooth={true} duration={500} offset={50}>
              Služby
            </Link>
          </li>
          <li class="cursor-pointer">
            {" "}
            <Link to="section4" smooth={true} duration={500} offset={50}>
              Galéria
            </Link>
          </li>

          <span class="border-3 border-[#EDC543] pl-2 pr-4 flex justify-between items-center cursor-pointer">
            <li class="">
              <Link to="section5" smooth={true} duration={500} offset={50}>
                Kontakt
              </Link>
            </li>
            <img src={arrowSmall} alt="arrows" class="pl-2 h-[100%] " />
          </span>
        </ul>
      </nav>
    </section>
  );
}

export default Navigation;
