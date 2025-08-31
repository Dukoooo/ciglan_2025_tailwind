function ServiceItem({ id, name, service, features, img }) {
  return (
    <div
      className="h-[30vh]"
      key={id}
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1 className="">{name}</h1>
    </div>
  );
}

export default ServiceItem;
