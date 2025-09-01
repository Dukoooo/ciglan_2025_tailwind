import { useState } from "react";
import ServiceItem from "../components/UI/ServiceItem";
import servicesData from "../data/servicesData";

function ServicesSection() {
  const [isModalOpen, setIsMOdalOpen] = useState(false);

  function handleModal(decision) {
    setIsMOdalOpen(decision);
  }

  return (
    <section
      className="min-h-[100vh] w-[87%] mx-auto mt-[7rem] mb-[7rem] md:mt-[10rem] lg:w-[80%] 2xl:w-[1300px]"
      id="services"
    >
      <div className="">
        <h2 className="text-[3rem] mb-[5rem] md:text-[3rem]  md:tracking-normal font-black uppercase text-transparent  text-stroke-1 2xl:text-[4rem] font-[roboto_mono] text-center  ">
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
              onHandleModal={handleModal}
              modalState={isModalOpen}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
