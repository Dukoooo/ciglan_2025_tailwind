import { Link } from "react-router-dom";

function AboutSection() {
  return (
    <section className="min-h-[60vh] w-[87%] mx-auto mt-[7rem] mb-[7rem] md:mt-[10rem] lg:w-[60%]">
      <main className=" border-l-8 border-amber-300 pl-4">
        <h2 className="font-black text-2xl pb-4 md:text-center md:text-3xl md:mb-6">
          Spoločnosť Ciglan s.r.o.
        </h2>
        <p className="font-[Space_Mono]">
          Špecializujeme sa na poskytovanie zemných prác, stavebníctva a
          záhradných prác pre zákazníkov na celom Slovensku. Naša spoločnosť je
          spoľahlivým partnerom pre Vaše projekty a zabezpečíme vysoko kvalitnú
          prácu za rozumnú cenu. Sme skúsený tím odborníkov, ktorí sú zameraní
          na kvalitu a spokojnosť zákazníkov. Snažíme sa poskytnúť komplexné
          služby, ktoré zahŕňajú všetko od výkopov, vyrovnávania terénu až po
          záhradné úpravy a výsadbu. Kontaktujte nás pre viac informácií o tom,
          ako Vám môžeme pomôcť s Vašimi potrebami v oblasti zemných prác,
          stavebníctva a záhradnej úpravy.
        </p>
        <Link
          to="/about"
          className="bg-amber-400 px-4 py-2 rounded-md text-white"
        >
          Viac o nás
        </Link>
      </main>
    </section>
  );
}

export default AboutSection;
