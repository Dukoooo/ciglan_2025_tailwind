import ServiceItem from "../components/UI/ServiceItem";
import servicesData from "../data/servicesData";
import { BsArrowUpRightCircleFill } from "react-icons/bs";

function ServicesSection() {
  return (
    <section
      className="min-h-[100vh] w-[87%] mx-auto mt-[7rem] mb-[7rem] md:mt-[10rem] lg:w-[60%] 2xl:w-[1300px]"
      id="services"
    >
      <div>
        <h2>Naše služby</h2>
        <div className="flex flex-col gap-10">
          {servicesData.map((data) => (
            <>
              <ServiceItem
                id={data.id}
                name={data.serviceName}
                text={data.serviceDesc}
                features={data.serviceFeatures}
                img={data.img}
              />
              <span>
                <BsArrowUpRightCircleFill />
              </span>
            </>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
