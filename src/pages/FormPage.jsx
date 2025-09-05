import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Navigation from "../components/layout/Navigation";
import ScrollToTop from "../utils/ScrollToTop";
import Footer from "../components/layout/Footer";
import SubFooter from "../components/layout/SubFooter";
import background2 from "../assets/background_2.jpg";
import arrows from "../assets/arrow_triple_big.png";
import mapa from "../assets/mapa_ciglan.png";
function FormPage() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_bzcasl2", "template_0erw0ji", form.current, {
        publicKey: "AemO0hndGYyOvxtK0",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <>
      <Navigation />
      <ScrollToTop />
      <section className="flex items-center justify-center flex-col  w-full h-auto">
        <div
          className="min-h-[15vh] flex justify-start pl-5 md:pl-20 items-center w-full mt-0 mb-5  bg-cover bg-center border-1 border-amber-400 font-extrabold text-2xl  md:text-[2.2rem] uppercase"
          style={{ backgroundImage: `url(${background2})` }}
        >
          <div className="flex flex-row items-center w-screen lg:w-[80%] xl:w-[1300px] mx-auto">
            <h1 className="font-mono text-amber-50 tracking-wide">
              Kontaktujte <span className="text-amber-400">nás</span>
            </h1>
            <img
              src={arrows}
              alt=""
              className="w-15 relative left-5 top-14 md:top-20 md:w-25 md:left-15 "
            />
          </div>
        </div>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col gap-4 w-[100%] my-10   p-8  "
        >
          <h2 className="text-[0.9rem] font-semibold text-center text-gray-800 mb-4 font-[Roboto_Mono]">
            Poďme na to.
          </h2>

          <label className="text-sm font-medium text-gray-700">
            Meno<span className="text-amber-400 text-xl">*</span>
          </label>
          <input
            type="text"
            name="user_name"
            className="p-3 rounded-l border border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-300 h-10"
          />

          <label className="text-sm font-medium text-gray-700">
            Email<span className="text-amber-400 text-xl">*</span>
          </label>
          <input
            type="email"
            name="user_email"
            className="p-3 rounded-l border border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-300 h-10"
          />

          <label className="text-sm font-medium text-gray-700">
            Tel. číslo
          </label>
          <input
            type="text"
            name="user_phone"
            className="p-3 rounded-l border border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-300 h-10"
          />

          <label className="text-sm font-medium text-gray-700">
            Vaša správa<span className="text-amber-400 text-xl">*</span>
          </label>
          <textarea
            name="message"
            rows="5"
            className="p-3 rounded-l border border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-300 resize-none"
            placeholder="Sem napíšte čo od nás potrebujete..."
          />

          <button
            type="submit"
            value="Send"
            className="bg-amber-400 text-white font-medium py-3 px-6 rounded-l shadow-md hover:bg-amber-300 transition-colors cursor-pointer"
          >
            Odoslať
          </button>
        </form>
        <div className="p-4 mb-10 w-[80%]  mx-auto flex flex-col items-start ">
          <div className="pb-6">
            <h3 className="font-bold text-xl  md:text-2xl font-mono tracking-wider pb-2">
              Kde nás nájdete?
            </h3>
            <div className="font-sanserif text-[0.9rem]">
              <p className="before:content-['📍'] before:mr-1 pb-1">
                Michalská 687/8
              </p>
              <p className="pl-5"> 969 01 Banská Štiavnica</p>
            </div>
          </div>
          <div>
            <img src={mapa} alt="mapa" className="h-[11em]" />
          </div>
        </div>
      </section>

      <Footer />
      <SubFooter />
    </>
  );
}

export default FormPage;
