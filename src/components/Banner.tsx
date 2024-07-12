import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div
      className="w-full bg-center bg-cover h-96 lg:h-screen rounded-b-2xl"
      style={{ backgroundImage: "url(/bg-banner.webp)" }}
    >
      <div className="flex items-center justify-center px-4 md:px-20 w-full h-full ">
        <div className="text-center text-white lg:space-y-5 lg:-mt-20">
          <h1 className="text-3xl font-semibold  lg:text-5xl">
            Buy Modern Family Tent{" "}
          </h1>
          <p className="lg:text-2xl text-xl font-semibold ">
            Starting At Only <span className="text-black">$99.00</span>
          </p>

          <button className=" px-5 py-3 mt-6 text-md text-white capitalize transition-colors duration-300 transform bg-black rounded-md lg:w-auto hover:bg-[#1ca8b2] focus:outline-none font-semibold ">
            <Link to="/cart"> Shop Now</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
