import { Link } from "react-router-dom";
import trippleBlack from "../assets/tripple_black.png";
import { LuMessageCircleMore } from "react-icons/lu";

function Baner() {
  return (
    <div className="  flex flex-col items-center justify-center min-h-[30vh] md:min-h-[33vh] xl:min-h-[45vh] 2xl:min-h-[40vh] w-[100%] bg-amber-400 mx-auto  w-screen ">
      <div className="w-[100%] mx-2 text-center mt-10 md:w-[95%] xl:w-[80%] 2xl:max-w-[60%] transform hover:scale-105 duration-350">
        <div className="relative top-[-70px] left-[41%] w-fit md:top-[-95px] md:left-[45%] 2xl:top-[-80px]">
          <img src={trippleBlack} alt="" className="w-20 " />
        </div>
        <h2 className="text-3xl md:text-[3rem]  md:tracking-normal font-black font-mono uppercase text-transparent tracking-widest text-stroke-1 2xl:text-[4rem]  ">
          Pripravený odštartovať svôj nový
          <span className="text-zinc-950"> projekt </span>?
        </h2>
        <span className="flex items-center gap-1 md:text-xl md:px-3 md:py-1 md:mt-7 tracking-wider font-black text-center justify-center mt-5 text-stone-900 border-2 w-fit mx-auto px-2 border-amber-50 cursor-pointer  mb-5">
          <Link to="/contact">Kontaktujte nás</Link>{" "}
          <LuMessageCircleMore className="text-amber-50" />
        </span>
      </div>
    </div>
  );
}

export default Baner;
