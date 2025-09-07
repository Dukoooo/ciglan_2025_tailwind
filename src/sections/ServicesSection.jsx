import ServiceItem from "../components/UI/ServiceItem";
import servicesData from "../data/servicesData";
import { motion } from "motion/react";

function ServicesSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <section
        className="min-h-[100vh]  mx-auto  mb-[8rem]  md:mt-[10rem] xl:w-screen px-4 "
        id="services"
      >
        <div className=" 2xl:w-[1300px] flex flex-col justify-center mx-auto">
          <h2 className="text-[2rem] mb-[5rem] md:text-[3rem]  md:tracking-normal font-black uppercase  2xl:text-[3.5rem] font-roboto  text-center  ">
            Naše služby
          </h2>
          <div className="flex flex-wrap justify-center gap-10">
            {servicesData.map((data) => (
              <ServiceItem
                key={data.id}
                id={data.id}
                name={data.serviceName}
                text={data.serviceDesc}
                features={data.serviceFeatures}
                img={data.img}
              />
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}

export default ServicesSection;
