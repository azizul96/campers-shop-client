import { useEffect, useState } from "react";
import Banner from "../components/Banner";
import BestSellingProducts from "../components/BestSellingProducts";
import CategoriesSection from "../components/CategoriesSection";
import FAQSection from "../components/FAQSection";
import VideoSection from "../components/VideoSection";
import axios from "axios";
import { Product } from "../typings/types";
import { Link } from "react-router-dom";

const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);
  // const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get<Product[]>(
          "https://campers-shop-server-tau.vercel.app/api/products"
        );
        const products = response.data;
        setProducts(products);

        // const uniqueCategories = Array.from(
        //   new Set(products.map((product) => product.category))
        // );
        // setCategories(uniqueCategories);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const featuredProducts = products.slice(2, 5);

  return (
    <div>
      <Banner />
      <div>
        <BestSellingProducts />
      </div>
      <div>
        <CategoriesSection />
      </div>
      <section className=" my-20">
        <h2 className="text-xl font-bold text-gray-950 sm:text-3xl text-center uppercase mb-10">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-5">
          {featuredProducts.map((product) => (
            <div className="overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 ">
              <div className="px-4 py-2">
                <h1 className="text-xl font-bold text-gray-800  dark:text-white">
                  {product.name}
                </h1>
              </div>

              <img
                className="object-fit w-full h-72 mt-2"
                src={product.images}
                alt="NIKE AIR"
              />

              <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
                <h1 className="text-lg font-bold text-white">
                  ${product.price}
                </h1>
                <Link to={`/products/${product._id}`}>
                  <button className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">
                    View Product
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
      <div className="my-10">
        <VideoSection />
      </div>
      <div className="my-10">
        <FAQSection />
      </div>
    </div>
  );
};

export default Home;
