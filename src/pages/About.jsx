import foto1 from "../assets/img-about1.JPG";

function About() {
  return (
    <section className="min-h-[60vh] w-[87%] mx-auto mt-[7rem] mb-[7rem] md:mt-[10rem] lg:w-[60%] 2xl:w-[1300px]">
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
      </main>
      <div className="mt-[3rem] flex justify-center">
        <figure className="bg-white p-2 shadow-lg rounded-lg border border-gray-300 max-w-md transform rotate-[-2deg]">
          <img
            src={foto1}
            alt="Bager pri zemných prácach"
            className="rounded-md shadow-md"
          />
          <figcaption className="mt-2 text-center text-sm text-gray-600 italic">
            „Jeden z našich úspešných projektov“
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

export default About;
