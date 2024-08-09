import { HiShoppingBag } from "react-icons/hi";
import { Link } from "react-router-dom";

const CategoriesSection = () => {
  //   const categories = [
  //     { name: "Tents", img: "/bags.webp" },
  //     { name: "Sleeping Bags", img: "/bags.webp" },
  //     { name: "Backpacks", img: "/bags.webp" },
  //     { name: "Accessories", img: "/bags.webp" },
  //   ];

  return (
    <section className="categories">
      <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
        <div className="text-center">
          <h2 className="text-xl font-bold text-gray-950 sm:text-3xl ">
            SHOP BY CATEGORY
          </h2>
        </div>
        <ul className="grid grid-cols-1 gap-4 mt-8 lg:grid-cols-3">
          <li>
            <div className="relative block group">
              <img src="/Boots.webp" className="object-cover  aspect-square" />
              <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                <h3 className="text-xl font-medium text-[#1ca8b2]">BOOTS</h3>
                <Link to="/products">
                  <button
                    // onClick={() => router.push("/product/listing/kids")}
                    className="mt-1.5 bg-black px-4 py-3 text-xs font-medium uppercase tracking-wide text-white flex items-center gap-1"
                  >
                    Shop Now
                    <HiShoppingBag />
                  </button>
                </Link>
              </div>
            </div>
          </li>
          <li>
            <div className="relative block group">
              <img
                src="/Women.webp"
                className="object-cover w-full aspect-square"
              />
              <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                <h3 className="text-xl font-medium text-[#1ca8b2]">WOMEN</h3>
                <Link to="/products">
                  <button
                    // onClick={() => router.push("/product/listing/women")}
                    className="mt-1.5  bg-black px-4 py-3 text-xs font-medium uppercase tracking-wide text-white flex items-center gap-1"
                  >
                    Shop Now
                    <HiShoppingBag />
                  </button>
                </Link>
              </div>
            </div>
          </li>
          <li className="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
            <div className="relative block group">
              <img
                src="/Bag.webp"
                className="object-cover w-full aspect-square"
              />
              <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                <h3 className="text-xl font-medium text-[#1ca8b2]">Bags</h3>
                <Link to="/products">
                  <button
                    // onClick={() => router.push("/product/listing/men")}
                    className="mt-1.5 bg-black px-4 py-3 text-xs font-medium uppercase tracking-wide text-white flex items-center gap-1"
                  >
                    Shop Now
                    <HiShoppingBag />
                  </button>
                </Link>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default CategoriesSection;
