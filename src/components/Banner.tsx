import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div
      className="w-full bg-center bg-cover h-96 lg:h-screen rounded-b-2xl "
      style={{ backgroundImage: "url(/Banner.webp)" }}
    >
      <div className="flex items-center justify-center px-4 md:px-20 w-full h-full ">
        <div className="text-center text-white lg:space-y-5 ">
          <h1 className="text-3xl font-semibold  lg:text-6xl lg:font-bold ">
            Buy Modern Family Tent{" "}
          </h1>
          <p className=" text-xl font-semibold lg:font-bold lg:text-3xl lg:mt-20">
            Starting At Only{" "}
            <span className="text-white  font-bold ">$99.00</span>
          </p>

          <button className=" px-5 py-3 mt-6 text-md text-white capitalize transition-colors duration-300 transform bg-[#1ca8b2] rounded-md lg:w-auto hover:bg-[#1d6e13] focus:outline-none font-semibold ">
            <Link to="/cart"> Shop Now</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
