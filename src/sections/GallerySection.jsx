import img1 from "../assets/gal-1.jpg";
import img2 from "../assets/gal-2.jpg";
import img3 from "../assets/gal-3.jpg";
import img4 from "../assets/gal-4.jpg";
import img5 from "../assets/gal-5.jpg";
import img6 from "../assets/gal-6.jpg";
import img7 from "../assets/gal-7.jpg";
import ButtonSmall from "../components/Buttons/ButtonSmall";
import SliderSmall from "../components/UI/SliderSmall";
import background from "../assets/background_2.jpg";
import Baner from "../components/Baner";

const photosArr = [
  {
    photo: img1,
    alt: "Výkop",
    text: "Výkop pre potrubárske účely",
  },
  {
    photo: img2,
    alt: "Kanalizácia",
    text: "Inštalácia kanalizácie",
  },
  {
    photo: img3,
    alt: "Izolácia domu",
    text: "Práce na izolácii základov",
  },
  {
    photo: img4,
    alt: "Technika",
    text: "Súčasť našej techniky",
  },
  {
    photo: img5,
    alt: "Búracie práce",
    text: "Búracie práce",
  },
  {
    photo: img6,
    alt: "Komatsu mensi bager",
    text: "Zarovnávanie a planírovanie",
  },
  {
    photo: img7,
    alt: "Výkop bazénu",
    text: "Príprava podkladu pre bazén",
  },
];

function GallerySection() {
  return (
    <>
      <section
        id="gallery"
        className="w-full h-auto  xl:min-h-[40vh] bg-no-repeat bg-cover bg-center "
        style={{ backgroundImage: `url(${background})` }}
      >
        <h2 className="w-[90%] mx-auto text-[2rem] mb-[5rem] md:text-[3rem] pt-10  md:tracking-normal font-black uppercase  2xl:text-[3.5rem] font-roboto text-center  text-amber-50">
          Ešte stále váhate?
        </h2>
        <div className="flex flex-col gap-10 w-[80%] mx-auto xl:flex-row justify-center items-center xl:max-w-[1300px] ">
          <div className="xl:w-[40%] xl:justify-start xl:pb-50">
            <p className="pb-2 text-neutral-200 font-[Roboto_Mono]">
              Prezrite si naše projekty v galérii a presvedčte sa sami. Ak vás
              zaujali, radi sa s vami porozprávame o vašich predstáv.
            </p>
            <ButtonSmall>Prejdite na galeriu</ButtonSmall>
          </div>
          <div className="w-[90%] h-auto xl:w-[60%] mb-25 ">
            <SliderSmall photos={photosArr} />
          </div>
        </div>
      </section>
      <Baner />
    </>
  );
}

export default GallerySection;
