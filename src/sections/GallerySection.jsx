import ButtonSmall from "../components/Buttons/ButtonSmall";
import SliderSmall from "../components/UI/SliderSmall";
import background from "../assets/background_2.jpg";
import Baner from "../components/Baner";
import { photosArrShort } from "../data/picturesData";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

function GallerySection() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <section
          id="gallery"
          className="w-screen h-auto  xl:min-h-[80vh] bg-no-repeat bg-cover bg-center   "
          style={{ backgroundImage: `url(${background})` }}
        >
          <h2
            className="w-[90%] mx-auto text-[2rem] mb-[5rem] md:text-[3rem] pt-10  md:tracking-normal font-black uppercase  2xl:text
        -[3.5rem] font-roboto text-center  text-amber-50"
          >
            Ešte stále váhate?
          </h2>
          <div className="flex flex-col gap-10 w-[80%] mx-auto xl:flex-row justify-center items-center xl:max-w-[1300px] ">
            <div className="xl:w-[40%] xl:justify-start xl:pb-50">
              <p className="pb-2 text-neutral-200 font-[Roboto_Mono]">
                Prezrite si naše projekty v galérii a presvedčte sa sami. Ak vás
                zaujali, radi sa s vami porozprávame o vašich predstáv.
              </p>
              <ButtonSmall color={"white"}>
                <Link to="/gallery">Prejdite na galériu</Link>
              </ButtonSmall>
            </div>
            <div className="w-[90%] h-auto xl:w-[60%] mb-25 ">
              <SliderSmall photos={photosArrShort} />
            </div>
          </div>
        </section>

        <Baner />
      </motion.div>
    </>
  );
}

export default GallerySection;
