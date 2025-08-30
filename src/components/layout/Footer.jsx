function Footer() {
  return (
    <footer className="h-[20vh] bg-neutral-800 w-screen text-amber-50 flex  mx-auto ">
      <div className="py-7 mx-auto w-[85%] xl:max-w-[500px] md:w-[50%]  my-auto md:pl-18 justify-center items-center pl-10 xl:pl-32 ">
        <ul className="flex flex-col items-start gap-2 tracking-wider text-left ">
          <li className="flex items-center gap-3 tracking-wider">
            Zastihnite nás
            <span className="block h-[1px] w-[6rem] bg-amber-400 "></span>
          </li>
          <li className="text-l">
            Konateľ:{" "}
            <span href="" className="text-white font-black">
              Lukáš Ciglan
            </span>
          </li>
          <li className="text-l">
            Mobil:{" "}
            <a href="tel:+421908557415" className="text-white font-black">
              {" "}
              +421908557415
            </a>
          </li>
          <li className="text-l">
            Email:{" "}
            <a
              href="mailto:lukasciglanbs@gmail.com"
              className="text-white font-black"
            >
              lukasciglanbs@gmail.com
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
