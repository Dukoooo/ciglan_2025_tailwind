import { BsArrowUpRightCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

function ServiceItem({
  id,
  name,
  service,
  features,
  img,
  onHandleModal,
  modalState,
}) {
  return (
    <Link to={`/services/${id}`}>
      <div
        className="h-[30vh]  w-[350px] relative cursor-pointer group"
        key={id}
      >
        <div
          className="h-full rounded-br-4xl z-0 relative overflow-hidden"
          style={{
            backgroundImage: `url(${img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-amber-300/15 backdrop-blur-[0.6px] group-hover:backdrop-blur-0  group-hover:bg-transparent transition-all duration-400 "></div>

          <h1 className="relative z-10 text-white text-2xl font-semibold md:text-3xl pt-6 drop-shadow font-[Roboto_Mono] text-center">
            {name}
          </h1>
        </div>

        <span className="absolute right-[-15px] bottom-[-20px] z-30 bg-white w-20 h-20 flex items-center justify-center rounded-full ">
          <BsArrowUpRightCircleFill className="text-4xl hover:text-amber-400 hover:scale-110 duration-300 cursor-pointer" />
        </span>
      </div>
    </Link>
  );
}

export default ServiceItem;
