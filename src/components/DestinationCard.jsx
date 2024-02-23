import { useState } from "react";
import { Link } from "react-router-dom";

export const DestinationCard = (props) => {
  const { destination, img, id, description } = props.data;

  const [ishovered, setIsHovered] = useState(false);

  return (
    <div
      className="sm:w-[250px] w-[350px] overflow-hidden relative rounded-md "
      onMouseOver={() => {
        setIsHovered(true);
      }}
      onMouseOut={() => {
        setIsHovered(false);
      }}
    >
      <img src={img} className="hover:scale-110 transition-all duration-500" />
      <div className="absolute bottom-0 py-2 px-6  w-full bg-[#090c0b42] ">
        <h2 className="text-white font-montserrat text-sm font-semibold  ">
          {destination}
        </h2>

        {ishovered && (
          <Link
            to={`/destination/${id}`}
            className="text-yellow-500 font-montserrat text-xs flex items-center gap-2 font-semibold  duration-500 drop-shadow-lg "
          >
            <span>View in detail</span>
            <i className="fa-solid fa-arrow-right-long"></i>
          </Link>
        )}
      </div>
    </div>
  );
};
