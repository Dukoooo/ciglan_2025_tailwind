import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

function SliderSmall({ photos }) {
  const [index, setIndex] = useState(0);
  const { photo, alt, text } = photos[index];

  function prevSlide() {
    setIndex((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
  }

  function nextSlide() {
    setIndex((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
  }

  useEffect(() => {
    const sliderInterval = setInterval(() => {
      setIndex((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(sliderInterval);
  }, [photos.length]);

  return (
    <div className="mt-8 flex justify-center">
      <figure className="relative max-w-lg w-full rounded-2xl overflow-hidden shadow-2xl">
        <img src={photo} alt={alt} className="w-full h-[16rem] object-cover" />

        <figcaption className="absolute bottom-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4 text-center text-white text-sm italic pb-6 text-[1em]">
          {text}
        </figcaption>

        <button
          onClick={prevSlide}
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 p-3 rounded-full text-white text-xl transition"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 p-3 rounded-full text-white text-xl transition"
        >
          <FaChevronRight />
        </button>

        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
          {photos.map((_, i) => (
            <span
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2 w-2 rounded-full cursor-pointer transition ${
                i === index ? "bg-white" : "bg-gray-400/70"
              }`}
            ></span>
          ))}
        </div>
      </figure>
    </div>
  );
}

export default SliderSmall;
