import ServiceItem from "../components/UI/ServiceItem";
import servicesData from "../data/servicesData";

function ServicesSection() {
  return (
    <section
      className="min-h-[100vh] w-[87%] mx-auto  mb-[8rem]  md:mt-[10rem] lg:w-[80%] 2xl:w-[1300px]"
      id="services"
    >
      <div className="">
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
  );
}

export default ServicesSection;
