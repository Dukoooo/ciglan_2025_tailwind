import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Navigation from "../components/layout/Navigation";
import ScrollToTop from "../utils/ScrollToTop";
import Footer from "../components/layout/Footer";
import SubFooter from "../components/layout/SubFooter";
import background2 from "../assets/background_2.jpg";
import arrows from "../assets/arrow_triple_big.png";
import mapa from "../assets/mapa_ciglan.png";
import ButtonSmall from "../components/Buttons/ButtonSmall";
import AppNotification from "../components/UI/AppNotification";
import { motion } from "motion/react";

function FormPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [notification, setNotification] = useState(null);

  const handleCloseNotification = () => {
    setNotification(null);
  };

  const formParams = {
    user_name: name,
    user_email: email,
    user_phone: phone,
    interest: subject,
    message: message,
  };

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_bzcasl2",
        "template_0erw0ji",
        formParams,
        "AemO0hndGYyOvxtK0"
      )
      .then(() => {
        setTimeout(() => {
          setNotification({
            message: "Email úspešne odoslaný!",
            type: "success",
          });
        }, 500);

        setName("");
        setEmail("");
        setPhone("");
        setSubject("");
        setMessage("");
      })
      .catch(() => {
        setTimeout(() => {
          setNotification({
            message: "Email sa nepodarilo odoslať!",
            type: "error",
          });
        }, 500);
      });
  };
  return (
    <>
      <Navigation />
      <ScrollToTop />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, repeat: false }}
      >
        {notification && (
          <AppNotification
            message={notification.message}
            type={notification.type}
            onClose={handleCloseNotification}
          />
        )}
        <section className="flex items-center justify-center flex-col  w-full h-auto relative">
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

          <div className="w-screen mx-auto  flex flex-col items-center lg:flex-row lg:justify-center  lg:max-w-[1300px] ">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col gap-4 w-[100%] max-w-[800px] my-10   p-8  "
            >
              <h2 className="text-[0.9rem] font-semibold text-center text-gray-800 mb-4 font-[Roboto_Mono]  lg:text-2xl">
                Poďme na to.
              </h2>

              <label className="text-sm font-medium text-gray-700">
                Meno<span className="text-amber-400 text-xl">*</span>
              </label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                name="user_name"
                className="p-3 rounded-l border border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-300 h-11"
              />

              <label className="text-sm font-medium text-gray-700">
                Email<span className="text-amber-400 text-xl">*</span>
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                name="user_email"
                className="p-3 rounded-l border border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-300 h-11"
              />

              <label className="text-sm font-medium text-gray-700">
                Tel. číslo
              </label>
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                type="text"
                name="user_phone"
                className="p-3 rounded-l border border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-300 h-11"
              />
              <label
                htmlFor="interest"
                className="text-sm font-medium text-gray-700"
              >
                Zaujímam sa o...
              </label>
              <select
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                id="interest"
                name="interest"
                className="p-3 rounded border border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-300 h-11 bg-white"
              >
                {" "}
                <option value="" disabled>
                  Vyberte možnosť
                </option>
                <option value="zemne-prace">Zemné a výkopové práce</option>
                <option value="stavebna-cinnost">Stavebná činnosť</option>
                <option value="zahradne-prace">Záhradné práce a iné</option>
              </select>
              <label className="text-sm font-medium text-gray-700">
                Vaša správa<span className="text-amber-400 text-xl">*</span>
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                name="message"
                rows="5"
                className="p-3 rounded-l border border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-300 resize-none"
                placeholder="Sem napíšte čo od nás potrebujete..."
              />

              <button
                type="submit"
                value="Send"
                className="bg-amber-400 text-white font-medium py-3 px-6 mx-auto  shadow-md hover:bg-amber-300 transition-colors cursor-pointer w-[8rem]"
              >
                Odoslať
              </button>
            </form>
            <div className="p-4 mb-10 w-[80%]   flex flex-col items-center relative lg:bottom-10  ">
              <div className="border-l-4 border-amber-400 pl-6 flex flex-col gap-5 lg:flex-col-reverse">
                <div className="pb-6  ">
                  <h3 className="font-bold text-xl  md:text-2xl font-mono tracking-wider pb-2">
                    Kde nás nájdete?
                  </h3>
                  <div className="font-sanserif text-[0.9rem]">
                    <p className="before:content-['📍'] before:mr-1 pb-1">
                      Michalská 687/8
                    </p>
                    <p className="pl-5"> 969 01 Banská Štiavnica</p>
                    <div className="pl-5">
                      {" "}
                      <ButtonSmall
                        href={
                          "https://www.google.com/maps/place/Michalsk%C3%A1+687%2F8,+969+01+Bansk%C3%A1+%C5%A0tiavnica,+Slovensko/@48.466024,18.8969211,690m/data=!3m2!1e3!4b1!4m6!3m5!1s0x471532dc5ab610f1:0x573c75f661343a38!8m2!3d48.466024!4d18.899496!16s%2Fg%2F11cpp414f9?entry=ttu&g_ep=EgoyMDI1MDkwMy4wIKXMDSoASAFQAw%3D%3D"
                        }
                      >
                        Prejdite na mapu
                      </ButtonSmall>
                    </div>
                  </div>
                </div>
                <div>
                  <img
                    src={mapa}
                    alt="mapa"
                    className="h-[11em] lg:h-[15em] lg:mb-4"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </motion.div>
      <Footer />
      <SubFooter />
    </>
  );
}

export default FormPage;
