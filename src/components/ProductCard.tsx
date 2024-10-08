import { Link } from "react-router-dom";
import { Product } from "../typings/types";

type ProductCardProps = {
  product: Product;
};

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="flex  overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
      <div
        className="w-1/3 bg-cover"
        style={{
          backgroundImage: `url(${product.images})`,
        }}
      ></div>

      <div className="w-2/3 p-4 md:p-4">
        <h1 className="text-xl font-bold text-gray-800 dark:text-white">
          {product.name}
        </h1>

        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          {product.category}
        </p>

        <div className="flex mt-2 item-center">{product.stock}</div>

        <div className="flex justify-between mt-3 item-center">
          <h1 className="text-lg font-bold text-gray-700 dark:text-gray-200 md:text-xl">
            ${product.price}
          </h1>
          <Link to={`/products/${product._id}`}>
            <button className="px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded focus:outline-none focus:bg-gray-700 ">
              Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
