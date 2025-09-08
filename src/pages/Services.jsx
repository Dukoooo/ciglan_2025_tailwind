import { useEffect, useState } from "react";
import Navigation from "../components/layout/Navigation";
import Footer from "../components/layout/Footer";
import SubFooter from "../components/layout/SubFooter";
import servicesData from "../data/servicesData";
import Baner from "../components/Baner";
import imgServ from "../assets/gal-6.jpg";
import ScrollToTop from "../utils/ScrollToTop";
import { useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

function Services() {
  const [currentItemID, setCurrentItemID] = useState(servicesData[0].id);

  const activService = servicesData.find(
    (item) => String(item.id) === String(currentItemID)
  );
  const { serviceId } = useParams();

  useEffect(() => {
    if (serviceId) {
      setCurrentItemID(serviceId);
    }
  }, [serviceId]);

  return (
    <>
      <ScrollToTop />
      <Navigation />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, repeat: false }}
      >
        <section className="flex flex-col items-center 2xl:max-w-[1300px] mx-auto mb-20">
          <header className="text-center mt-3">
            <h3 className="text-4xl font-black tracking-wide font-[Roboto_Mono]">
              Naše služby
            </h3>
          </header>
          <ul className="flex mx-auto px-5 mt-16 flex-wrap gap-5 font-mono font-bold text-[0.8rem] md:text-[0.9rem] items-center justify-center">
            {servicesData.map((item) => {
              const isActiv = item.id === activService.id;
              return (
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <li
                    key={item.id}
                    className={`${isActiv ? "underline" : ""} cursor-pointer p-1 bg-amber-300 rounded-2xl px-2 py-2 hover:bg-amber-400  transfor duration-600`}
                    onClick={() => setCurrentItemID(item.id)}
                  >
                    {item.serviceName}
                  </li>
                </motion.div>
              );
            })}
          </ul>

          <main className="flex flex-col xl:flex-row">
            <div className="flex items-center flex-col justify-center mt-[3rem] mx-auto w-[85%] xl:relative xl:top-[-60px] xl:pl-10 ">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activService.id}
                  initial={{ opacity: 0.2, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 0 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                >
                  <h2 className="text-[1.5rem] font-semibold font-[Roboto_Mono] pb-6">
                    {activService.serviceName}
                  </h2>
                  <p className="text-center mb-4 max-w-2xl mx-auto text-gray-600 leading-relaxed">
                    {activService.serviceDesc}
                  </p>
                  <ul className="font-[Roboto] w-[80%] mb-[2rem]  pl-3 ">
                    {activService.serviceFeatures.map((el, index) => {
                      return (
                        <li key={index} className="py-2 list-disc ">
                          {el}
                        </li>
                      );
                    })}
                  </ul>
                </motion.div>
              </AnimatePresence>
            </div>
            <div className="w-[70%] mx-auto py-8 mb-10 relative">
              <img
                src={imgServ}
                alt="komatsu"
                className="w-[80%] mx-auto md:w-[50%] xl:w-[50%] xl:my-7"
              />
            </div>
          </main>
        </section>
      </motion.div>
      <Baner />
      <Footer />
      <SubFooter />
    </>
  );
}

export default Services;
