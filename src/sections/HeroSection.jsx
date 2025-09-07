import background from "../assets/background.png";
import tripleArrow from "../assets/arrow_triple_big.png";
import { motion } from "motion/react";

function HeroSection() {
  return (
    <section
      id="hero"
      className="flex relative flex-col w-screen h-[65vh]  md:h-[70vh] lg:h-[80vh]  bg-cover bg-center "
      style={{ backgroundImage: `url(${background})` }}
    >
      <main className="2xl:max-w-[100rem] 2xl:mx-auto ">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h1 className=" text-[2.6rem] mt-[5rem] ml-[1rem] font-black text-amber-50 tracking-wide w-[95%] mb-20 sm:ml-[5rem] sm:mt-[10rem] sm:w-[70%] sm:text-[4rem] lg:w-[45%] lg:ml-[10rem] lg:mt-[5rem] 2xl:mt-[10rem] 2xl:ml-[12rem]">
            Komplexné riešenia v{" "}
            <span className="text-amber-300">stavebníctve od</span> A po Z
          </h1>
        </motion.div>

        <motion.img
          src={tripleArrow}
          alt="triple arrow"
          className="absolute bottom-[-65px] right-[0] 2xl:right-[410px] max-w-[25%] max-h-fit sm:bottom-[-83px]"
          animate={{ y: [0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        />
      </main>
    </section>
  );
}

export default HeroSection;
