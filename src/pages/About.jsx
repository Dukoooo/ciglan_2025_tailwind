import { useEffect, useState } from "react";
import foto1 from "../assets/img-about1.JPG";
import foto2 from "../assets/img-about2.JPG";
import foto3 from "../assets/img-about3.JPG";
import trippleBlack from "../assets/tripple_black.png";
import returnBtn from "../assets/return.png";
import SliderSmall from "../components/UI/SliderSmall";
import { LuMessageCircleMore } from "react-icons/lu";

import { Link } from "react-router-dom";
import Footer from "../components/layout/Footer";
import SubFooter from "../components/layout/SubFooter";

const photosArr = [
  {
    photo: foto1,
    alt: "Výkop bazéna",
    text: "Príprava podkladu pre bazén",
  },
  {
    photo: foto2,
    alt: "Hydraulicka ruka",
    text: "Práce za pomoci hydraulickej ruky",
  },
  {
    photo: foto3,
    alt: "Komatsu mensi bager",
    text: "S našou technikou sa dostaneme takmer úplne všade",
  },
];

function About() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <section className="min-h-[60vh] w-[87%] lg:w-[90%] mx-auto mt-[7rem] mb-[7rem] md:mt-[5rem]  2xl:w-[1300px] 2xl:items-center  ">
        {windowWidth >= 768 ? (
          <main className="border-l-8 border-amber-300 pl-4 flex flex-col xl:flex-row gap-6 mx-auto md:min-h-[80vh]  2xl:items-center 2xl:min-h-[80%] 2xl:justify-center 2xl:pb-[15vh] xl:pt-[10vh] 2xl:pt-0">
            <div className="md:w-full  mx-auto lg:w-3/5 ">
              <div className="mb-8 2xl:mb-[30%] relative xl:top-[-40px] 2xl:top-10 transform hover:scale-101 duration-300 ">
                <Link
                  to="/homePage"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-amber-300 text-black font-bold rounded-lg shadow hover:bg-amber-400 transition-colors duration-300"
                >
                  <img
                    src={returnBtn}
                    alt="return button"
                    className="w-6 h-6"
                  />
                  Späť na domovskú stránku
                </Link>
              </div>

              <h2 className="font-black text-2xl pb-4 md:text-center md:text-3xl md:mb-6">
                Spoločnosť Ciglan s.r.o.
              </h2>
              <p className="font-[Space_Mono] text-justify">
                Špecializujeme sa na poskytovanie zemných prác, stavebníctva a
                záhradných prác pre zákazníkov na celom Slovensku. Naša
                spoločnosť je spoľahlivým partnerom pre Vaše projekty a
                zabezpečíme vysoko kvalitnú prácu za rozumnú cenu. Sme skúsený
                tím odborníkov, ktorí sú zameraní na kvalitu a spokojnosť
                zákazníkov. Snažíme sa poskytnúť komplexné služby, ktoré
                zahŕňajú všetko od výkopov, vyrovnávania terénu až po záhradné
                úpravy a výsadbu. Kontaktujte nás pre viac informácií o tom, ako
                Vám môžeme pomôcť s Vašimi potrebami v oblasti zemných prác,
                stavebníctva a záhradnej úpravy.
              </p>
            </div>

            <div className="md:w-[78%] lg:w-2/5 relative flex justify-center items-start mt-6 md:mt-15 mx-auto 2xl:w-[60%] 2xl:mt-0 xl:top-20 2xl:top-5">
              <img
                src={foto2}
                alt=""
                className="absolute top-0 left-1/2 -translate-x-1/2 w-[70%] rounded-lg shadow-2xl border-4 border-white object-cover rotate-[-3deg] filter brightness-95"
              />
              <img
                src={foto1}
                alt=""
                className="absolute top-20 left-1/4 w-[45%] rounded-lg shadow-xl border-2 border-white object-cover rotate-[5deg] filter brightness-90"
              />
              <img
                src={foto3}
                alt=""
                className="absolute top-40 left-1/2 w-[50%] rounded-lg shadow-xl border-2 border-white object-cover rotate-[-2deg] filter brightness-90"
              />
            </div>
          </main>
        ) : (
          <main className=" border-l-8 border-amber-300 pl-4 ">
            <div className="mb-6">
              <Link
                to="/homePage"
                className="inline-flex items-center gap-2 px-4 py-2 bg-amber-300 text-black font-bold rounded-lg shadow hover:bg-amber-400 transition-colors duration-300"
              >
                <img src={returnBtn} alt="return button" className="w-6 h-6 " />
                Späť na domovskú stránku
              </Link>
            </div>
            <h2 className="font-black text-2xl pb-4 md:text-center md:text-3xl md:mb-6">
              Spoločnosť Ciglan s.r.o.
            </h2>
            <p className="font-[Space_Mono]">
              Špecializujeme sa na poskytovanie zemných prác, stavebníctva a
              záhradných prác pre zákazníkov na celom Slovensku. Naša spoločnosť
              je spoľahlivým partnerom pre Vaše projekty a zabezpečíme vysoko
              kvalitnú prácu za rozumnú cenu. Sme skúsený tím odborníkov, ktorí
              sú zameraní na kvalitu a spokojnosť zákazníkov. Snažíme sa
              poskytnúť komplexné služby, ktoré zahŕňajú všetko od výkopov,
              vyrovnávania terénu až po záhradné úpravy a výsadbu. Kontaktujte
              nás pre viac informácií o tom, ako Vám môžeme pomôcť s Vašimi
              potrebami v oblasti zemných prác, stavebníctva a záhradnej úpravy.
            </p>{" "}
          </main>
        )}
        {windowWidth < 768 && <SliderSmall photos={photosArr} />}
      </section>
      <div className="  flex flex-col items-center justify-center min-h-[30vh] md:min-h-[40vh] w-[100%] bg-amber-400 mx-auto   ">
        <div className="w-[100%] mx-2 text-center mt-10 md:w-[95%] xl:w-[80%] 2xl:max-w-[60%] transform hover:scale-105 duration-350">
          <div className="relative top-[-70px] left-[41%] w-fit md:top-[-95px] md:left-[45%] 2xl:top-[-80px]">
            <img src={trippleBlack} alt="" className="w-20 " />
          </div>
          <h2 className="text-3xl md:text-[3rem]  md:tracking-normal font-black font-mono uppercase text-transparent tracking-widest text-stroke-1 2xl:text-[4rem]  ">
            Pripravený odštartovať svôj nový
            <span className="text-zinc-950"> projekt </span>?
          </h2>
          <span className="flex items-center gap-1 md:text-xl md:px-3 md:py-1 md:mt-7 tracking-wider font-black text-center justify-center mt-5 text-stone-900 border-2 w-fit mx-auto px-2 border-amber-50 cursor-pointer  mb-5">
            Kontaktujte nás <LuMessageCircleMore className="text-amber-50" />
          </span>
        </div>
      </div>
      <Footer />
      <SubFooter />
    </>
  );
}

export default About;
