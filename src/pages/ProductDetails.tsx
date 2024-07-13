import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { useParams } from "react-router-dom";
import axios from "axios";
import { addToCart, selectCartItems } from "../redux/slices/cartSlice";
import { GiShoppingCart } from "react-icons/gi";

type Product = {
  _id: string;
  name: string;
  price: number;
  category: string;
  stock: number;
  description: string;
  ratings: number;
  images: string;
};

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector(selectCartItems);

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await axios.get(
        `http://localhost:5000/api/products/${id}`
      );
      setProduct(response.data);
    };
    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      const existingCartItem = cartItems.find(
        (item) => item.productId === product._id
      );
      const newQuantity = existingCartItem ? existingCartItem.quantity + 1 : 1;
      if (newQuantity <= product.stock) {
        dispatch(
          addToCart({
            productId: product._id,
            name: product.name,
            price: product.price,
            quantity: 1,
            stock: product.stock,
            images: product.images,
          })
        );
      }
    }
  };

  const isAddToCartDisabled = () => {
    if (!product) return true;
    const existingCartItem = cartItems.find(
      (item) => item.productId === product._id
    );
    return (
      product.stock === 0 ||
      (existingCartItem && existingCartItem.quantity >= product.stock)
    );
  };
  //
  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <section className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 my-10">
      <div className="container mx-auto px-4">
        <div className="lg:col-gap-12 xl:col-gap-16 mt-8 grid grid-cols-1 gap-12 lg:mt-12 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-3 lg:row-end-1">
            <div className="lg:flex lg:items-start">
              <div className="lg:order-2 lg:ml-5">
                <div className="max-w-xl overflow-hidden rounded-lg">
                  <img
                    src={product.images}
                    className="h-full w-full max-w-full object-cover"
                    alt="Product Details"
                  />
                </div>
              </div>
              <div className="mt-2 w-full lg:order-1 lg:w-32 lg:flex-shrink-0">
                <div className="flex flex-row items-start lg:flex-col">
                  <button
                    type="button"
                    className="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-gray-100 text-center"
                  >
                    <img
                      src={product.images}
                      className="h-full w-full object-cover"
                      alt="Product Details"
                    />
                  </button>
                  <button
                    type="button"
                    className="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-gray-100 text-center"
                  >
                    <img
                      src={product.images}
                      className="h-full w-full object-cover"
                      alt="Product Details"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-2 lg:row-span-2 lg:row-end-2">
            <h1 className="text-2xl font-bold text-gray-900">
              {product && product.name}
            </h1>
            <div className="mt-10 flex flex-col items-center justify-between space-y-4 botder-t border-b py-4 sm:flex-row sm:space-y-0">
              <div className="flex items-end">
                <h1>${product && product.price}</h1>
              </div>
              <button
                type="button"
                onClick={handleAddToCart}
                disabled={isAddToCartDisabled()}
                className="mt-1.5 bg-black px-5 py-3 text-xs font-medium tracking-wide uppercase text-white rounded-sm flex gap-2 items-center"
              >
                Add to Cart <GiShoppingCart className="text-lg" />
              </button>
            </div>

            <div className="lg:col-span-3">
              <div className="border-b border-gray-400">
                <nav className="flex gap-4">
                  <a
                    href="#"
                    className="border-b-2 border-gray-900 py-4 text-sm font-medium text-gray-900"
                  >
                    Description
                  </a>
                </nav>
              </div>
              <div className="mt-8 flow-root sm:mt-12">
                {product && product.description}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
