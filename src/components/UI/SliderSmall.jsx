import { useEffect, useState } from "react";
import { FaAnglesLeft, FaAnglesRight } from "react-icons/fa6";
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
  }, []);

  return (
    <div className="mt-[3rem] flex justify-center ]">
      <figure className="relative bg-white p-2 shadow-lg rounded-lg border border-gray-300 max-w-md">
        <div className="h-[14rem] w-full overflow-hidden rounded-md shadow-md">
          <img src={photo} alt={alt} className="w-full h-full object-cover" />
        </div>
        <figcaption className="mt-2 text-center text-sm text-gray-600 italic">
          {text}
        </figcaption>

        <div className="absolute inset-0 flex justify-between items-center px-4 text-white font-bold text-3xl ">
          <button onClick={prevSlide} className="bg-black/40 p-2 rounded-full">
            <FaAnglesLeft />
          </button>
          <button onClick={nextSlide} className="bg-black/40 p-2 rounded-full">
            <FaAnglesRight />
          </button>
        </div>
      </figure>
    </div>
  );
}

export default SliderSmall;
