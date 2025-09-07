import { useEffect, useState } from "react";
import foto1 from "../assets/img-about1.JPG";
import foto2 from "../assets/img-about2.JPG";
import foto3 from "../assets/img-about3.JPG";
import SliderSmall from "../components/UI/SliderSmall";

import Footer from "../components/layout/Footer";
import SubFooter from "../components/layout/SubFooter";
import Baner from "../components/Baner";
import Navigation from "../components/layout/Navigation";
import ScrollToTop from "../utils/ScrollToTop";
import { motion } from "motion/react";

import { photosArrShort } from "../data/picturesData";

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
      <ScrollToTop />
      <Navigation />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, repeat: false }}
      >
        <section className="min-h-[60vh] w-[87%] lg:w-[90%] mx-auto mt-[2rem] mb-[7rem] md:mt-[5rem]  2xl:w-[1300px] 2xl:items-center  ">
          {windowWidth >= 768 ? (
            <main className="border-l-8 border-amber-300 pl-4 flex flex-col xl:flex-row gap-6 mx-auto md:min-h-[65vh]  2xl:items-center 2xl:min-h-[80%] 2xl:justify-center 2xl:pb-[15vh] xl:pt-[10vh] 2xl:pt-0">
              <div className="md:w-full  mx-auto lg:w-3/5 ">
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
                  úpravy a výsadbu. Kontaktujte nás pre viac informácií o tom,
                  ako Vám môžeme pomôcť s Vašimi potrebami v oblasti zemných
                  prác, stavebníctva a záhradnej úpravy.
                </p>
              </div>

              <div className="md:w-[78%] lg:w-2/5 relative flex justify-center items-start mt-6 md:mt-15 mx-auto 2xl:w-[60%] 2xl:mt-0 xl:top-[-10px] 2xl:top-[-100px]">
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
              <h2 className="font-black text-2xl pb-10 md:text-center md:text-3xl md:mb-6">
                Spoločnosť Ciglan s.r.o.
              </h2>
              <p className="font-[Space_Mono]">
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
              </p>{" "}
            </main>
          )}
          {windowWidth < 768 && <SliderSmall photos={photosArrShort} />}
        </section>
      </motion.div>
      <Baner />
      <Footer />
      <SubFooter />
    </>
  );
}

export default About;
