import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="px-8 py-4 flex justify-between items-center border-b-2">
      {/* logo */}
      <div>
        <h1 className="text-2xl font-bold text-slate-950 font-montserrat">
          TN Treasures
        </h1>
      </div>
      <nav className="flex gap-10 font-montserrat font-semibold items-center text-slate-950">
        <NavLink
          className="flex items-center gap-2 px-4 py-0.5 rounded-md"
          to="/"
        >
          <i className="fa-solid fa-house-user"></i>
          <span className="mt-1"> Home</span>
        </NavLink>
        <NavLink
          className="flex items-center gap-2 px-4 py-0.5 rounded-md"
          to="/places"
        >
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 32 32"
            >
              <g fillRule="evenodd" fill="currentColor">
                <path
                  style={{ InkscapeStroke: "none" }}
                  d="M351 267.469a1 1 0 00-1 1c0 1.081.526 2.066 1.313 2.857.786.791 1.842 1.438 3.103 1.975 2.521 1.073 5.88 1.699 9.584 1.699 3.705 0 7.063-.626 9.584-1.7 1.26-.536 2.317-1.183 3.103-1.974.787-.79 1.313-1.776 1.313-2.857a1 1 0 00-1-1 1 1 0 00-1 1c0 .446-.201.914-.73 1.447-.53.533-1.377 1.078-2.47 1.543-2.183.93-5.325 1.541-8.8 1.541-3.475 0-6.617-.612-8.8-1.541-1.093-.465-1.94-1.01-2.47-1.543-.529-.533-.73-1.001-.73-1.447a1 1 0 00-1-1zM364 245c-4.406 0-8 3.594-8 8 0 1.268.503 2.626 1.188 4.086.684 1.46 1.577 2.993 2.466 4.398a77.325 77.325 0 003.553 5.123 1 1 0 001.586 0s1.775-2.311 3.553-5.123c.889-1.405 1.782-2.938 2.466-4.398.685-1.46 1.188-2.818 1.188-4.086 0-4.406-3.594-8-8-8zm0 4c1.645 0 3 1.355 3 3s-1.355 3-3 3-3-1.355-3-3 1.355-3 3-3z"
                  transform="translate(-348 -244)"
                ></path>
                <path
                  style={{ InkscapeStroke: "none" }}
                  d="M370.688 261.969a1 1 0 00-1.264.635 1 1 0 00.635 1.263c1.062.352 1.864.786 2.341 1.192.478.406.6.717.6.941 0 .215-.099.476-.473.83s-1.004.741-1.828 1.07c-1.647.66-4.046 1.1-6.699 1.1-2.653 0-5.052-.44-6.7-1.1-.823-.329-1.453-.716-1.827-1.07-.374-.354-.473-.615-.473-.83 0-.224.122-.534.598-.94.476-.405 1.274-.84 2.334-1.19a1 1 0 00.634-1.265 1 1 0 00-1.263-.632c-1.231.408-2.243.917-3.002 1.564-.76.647-1.301 1.497-1.301 2.463 0 .89.461 1.68 1.1 2.283.638.604 1.47 1.08 2.457 1.475 1.972.789 4.573 1.242 7.443 1.242 2.87 0 5.47-.453 7.443-1.242.987-.395 1.82-.871 2.457-1.475.639-.603 1.1-1.393 1.1-2.283 0-.968-.543-1.818-1.305-2.465-.761-.647-1.773-1.158-3.007-1.566z"
                  transform="translate(-348 -244)"
                ></path>
              </g>
            </svg>
          </span>
          <span className="mt-1">Destination</span>
        </NavLink>
        <NavLink
          className=" px-4 py-0.5 rounded-md text-slate-950 flex items-center gap-1.5"
          to="/contribute"
        >
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path fill="none" d="M0 0h24v24H0V0z"></path>
              <path
                fill="currentcolor"
                d="M12 2C8.14 2 5 5.14 5 9c0 4.17 4.42 9.92 6.24 12.11.4.48 1.13.48 1.53 0C14.58 18.92 19 13.17 19 9c0-3.86-3.14-7-7-7zm3 8h-2v2c0 .55-.45 1-1 1s-1-.45-1-1v-2H9c-.55 0-1-.45-1-1s.45-1 1-1h2V6c0-.55.45-1 1-1s1 .45 1 1v2h2c.55 0 1 .45 1 1s-.45 1-1 1z"
              ></path>
            </svg>
          </span>
          <span className="mt-1"> Contribute</span>
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
