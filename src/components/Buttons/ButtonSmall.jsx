import arrows_small from "../../assets/arrows__small.png";

const defaultArrowClass =
  "transform rotate-269 h-[12px] relative top-[1px] transition-all duration-200 group-hover:translate-x-1 group-hover:drop-shadow";

function ButtonSmall({
  children,
  href,
  imgSrc = arrows_small,
  imgClassName = defaultArrowClass,
  color = "black",
}) {
  return (
    <a
      target="blank"
      href={href}
      className={`group pl-0 flex flex-row gap-1 items-center font-bold hover:underline text-${color} cursor-pointer `}
    >
      {children}
      <img src={imgSrc} alt="arrow" className={imgClassName} />
    </a>
  );
}

export default ButtonSmall;
