function Card(props) {
  return (
    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
      <img
        className="lg:h-48 md:h-36 w-full object-cover object-center"
        src={props.image}
        alt="blog"
      />
      <div className="p-6">
        <h1 className="title-font text-lg font-bold text-gray-900 mb-3">
          {props.name}
        </h1>
        <p className="leading-relaxed mb-3 font-semibold">
          {props.description}
        </p>
      </div>
    </div>
  );
}

export default Card;
