import { useState } from "react";
import Navigation from "../components/layout/Navigation";
import Footer from "../components/layout/Footer";
import SubFooter from "../components/layout/SubFooter";
import servicesData from "../data/servicesData";

function Services() {
  const [currentItemID, setCurrentItemID] = useState(servicesData[0].id);
  const activService = servicesData.find((item) => item.id === currentItemID);

  return (
    <>
      <Navigation />
      <section>
        <header className="text-center mt-3">
          <h3 className="text-4xl font-black tracking-wide font-[Roboto_Mono]">
            Naše služby
          </h3>
        </header>

        <main>
          <ul className="flex mx-auto px-5 mt-16 flex-wrap gap-5 font-mono font-bold text-[0.9rem]  items-center justify-center">
            {servicesData.map((item) => {
              const isActiv = item.id === activService.id;
              return (
                <li
                  key={item.id}
                  className={`${isActiv ? "underline" : ""} cursor-pointer`}
                  onClick={() => setCurrentItemID(item.id)}
                >
                  {item.serviceName}
                </li>
              );
            })}
          </ul>
          <div className="flex items-center flex-col justify-center mt-[3rem] mx-auto w-[85%]">
            <h2 className="text-[1.5rem] font-semibold font-[Roboto_Mono] pb-6">
              {activService.serviceName}
            </h2>
            <p className="text-center mb-4 max-w-2xl mx-auto text-gray-600 leading-relaxed">
              {activService.serviceDesc}
            </p>

            <ul className="font-[Roboto] w-[80%] mb-[2rem] ">
              {activService.serviceFeatures.map((el, index) => {
                return (
                  <li key={index} className="py-2 list-disc ">
                    {el}
                  </li>
                );
              })}
            </ul>
          </div>
        </main>
      </section>
      <Footer />
      <SubFooter />
    </>
  );
}

export default Services;
