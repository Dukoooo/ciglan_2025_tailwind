import { useEffect, useState } from "react";
import foto1 from "../assets/img-about1.JPG";
import foto2 from "../assets/img-about2.JPG";
import foto3 from "../assets/img-about3.JPG";
import returnBtn from "../assets/return.png";
import SliderSmall from "../components/UI/SliderSmall";
import { Link } from "react-router-dom";

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
    <section className="min-h-[60vh] w-[87%] lg:w-[90%] mx-auto mt-[7rem] mb-[7rem] md:mt-[10rem]  2xl:w-[1300px]">
      {windowWidth >= 768 ? (
        <main className="border-l-8 border-amber-300 pl-4 flex flex-col xl:flex-row gap-6 mx-auto">
          <div className="md:w-full  mx-auto lg:w-3/5">
            <div className="mb-8">
              <Link
                to="/homePage"
                className="inline-flex items-center gap-2 px-4 py-2 bg-amber-300 text-black font-bold rounded-lg shadow hover:bg-amber-400 transition-colors duration-300"
              >
                <img src={returnBtn} alt="return button" className="w-6 h-6" />
                Späť na domovskú stránku
              </Link>
            </div>

            <h2 className="font-black text-2xl pb-4 md:text-center md:text-3xl md:mb-6">
              Spoločnosť Ciglan s.r.o.
            </h2>
            <p className="font-[Space_Mono] text-justify">
              Špecializujeme sa na poskytovanie zemných prác, stavebníctva a
              záhradných prác pre zákazníkov na celom Slovensku. Naša spoločnosť
              je spoľahlivým partnerom pre Vaše projekty a zabezpečíme vysoko
              kvalitnú prácu za rozumnú cenu. Sme skúsený tím odborníkov, ktorí
              sú zameraní na kvalitu a spokojnosť zákazníkov. Snažíme sa
              poskytnúť komplexné služby, ktoré zahŕňajú všetko od výkopov,
              vyrovnávania terénu až po záhradné úpravy a výsadbu. Kontaktujte
              nás pre viac informácií o tom, ako Vám môžeme pomôcť s Vašimi
              potrebami v oblasti zemných prác, stavebníctva a záhradnej úpravy.
            </p>
          </div>

          <div className="md:w-[78%] lg:w-2/5 relative flex justify-center items-start mt-6 md:mt-15 mx-auto">
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
        <main className=" border-l-8 border-amber-300 pl-4">
          <div className="mb-6">
            <Link
              to="/homePage"
              className="inline-flex items-center gap-2 px-4 py-2 bg-amber-300 text-black font-bold rounded-lg shadow hover:bg-amber-400 transition-colors duration-300"
            >
              <img src={returnBtn} alt="return button" className="w-6 h-6" />
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
            kvalitnú prácu za rozumnú cenu. Sme skúsený tím odborníkov, ktorí sú
            zameraní na kvalitu a spokojnosť zákazníkov. Snažíme sa poskytnúť
            komplexné služby, ktoré zahŕňajú všetko od výkopov, vyrovnávania
            terénu až po záhradné úpravy a výsadbu. Kontaktujte nás pre viac
            informácií o tom, ako Vám môžeme pomôcť s Vašimi potrebami v oblasti
            zemných prác, stavebníctva a záhradnej úpravy.
          </p>{" "}
        </main>
      )}
      {windowWidth < 768 && <SliderSmall photos={photosArr} />}
    </section>
  );
}

export default About;
