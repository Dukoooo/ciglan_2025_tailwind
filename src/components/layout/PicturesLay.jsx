function PicturesLay({ photos, onClick }) {
  function handleClick(index) {
    onClick(index);
  }
  return (
    <div className="w-screen h-auto xl:max-w-[1200px]">
      <div className="grid w-[90%] mx-auto mt-10 grid-cols-[repeat(auto-fit,minmax(15rem,1fr))] px-5 gap-4">
        {photos.map((pic, index) => {
          return (
            <div key={index} className="w-full h-full">
              <img
                onClick={() => handleClick(index)}
                src={pic.src}
                alt={pic.title}
                className="cursor-pointer w-full h-full object-cover rounded-lg"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PicturesLay;
