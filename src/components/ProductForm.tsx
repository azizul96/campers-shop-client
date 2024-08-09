import axios from "axios";
import { SubmitHandler, useForm } from "react-hook-form";
import { Product } from "../typings/types";
import toast from "react-hot-toast";

type ProductFormProps = {
  product?: Product | null;
  onSuccess: () => void;
};

const ProductForm = ({ product, onSuccess }: ProductFormProps) => {
  const { register, handleSubmit, reset } = useForm<Product>({
    defaultValues: product || {
      _id: "",
      name: "",
      price: 0,
      category: "",
      stock: 0,
      description: "",
      ratings: 0,
      images: "",
    },
  });

  const onSubmit: SubmitHandler<Product> = async (data) => {
    try {
      if (data._id) {
        await axios.put(
          `https://campers-shop-server-tau.vercel.app/api/products/${data._id}`,
          data
        );
        toast.success("Product Updated Successfully!");
      } else {
        await axios.post(
          "https://campers-shop-server-tau.vercel.app/api/products",
          data
        );
        toast.success("Product Created Successfully!");
      }
      onSuccess();
      reset();
    } catch (error) {
      console.error("Error saving product:", error);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="my-5">
        <div className=" grid grid-cols-1 md:grid-cols-2  gap-5 mb-5">
          <div className="relative">
            <p className=" absolute pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 bg-white">
              {"Name"}
            </p>
            <input
              {...register("name", { required: true })}
              placeholder="Name"
              className="border placeholder-gray-400 focus:outline-none focus:border-black w-full p-4 mr-0 mt-0 ml-0 text-base block bg-white border-gray-300 rounded-md"
            />
          </div>
          <div className="relative">
            <p className=" absolute pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 bg-white">
              {"Price"}
            </p>
            <input
              type="number"
              {...register("price", { required: true })}
              placeholder="Price"
              className="border placeholder-gray-400 focus:outline-none focus:border-black w-full p-4 mr-0 mt-0 ml-0 text-base block bg-white border-gray-300 rounded-md"
            />
          </div>
          <div className="relative">
            <p className=" absolute pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 bg-white">
              {"Category"}
            </p>
            <input
              {...register("category", { required: true })}
              placeholder="Category"
              className="border placeholder-gray-400 focus:outline-none focus:border-black w-full p-4 mr-0 mt-0 ml-0 text-base block bg-white border-gray-300 rounded-md"
            />
          </div>
          <div className="relative">
            <p className=" absolute pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 bg-white">
              {"Stock"}
            </p>
            <input
              type="number"
              {...register("stock", { required: true })}
              placeholder="Stock"
              className="border placeholder-gray-400 focus:outline-none focus:border-black w-full p-4 mr-0 mt-0 ml-0 text-base block bg-white border-gray-300 rounded-md"
            />
          </div>
          <div className="relative">
            <p className=" absolute pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 bg-white">
              {"Description"}
            </p>
            <input
              {...register("description", { required: true })}
              placeholder="Description"
              className="border placeholder-gray-400 focus:outline-none focus:border-black w-full p-4 mr-0 mt-0 ml-0 text-base block bg-white border-gray-300 rounded-md"
            />
          </div>
          <div className="relative">
            <p className=" absolute pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 bg-white">
              {"Ratings"}
            </p>
            <input
              type="number"
              {...register("ratings", { required: true })}
              placeholder="Ratings"
              className="border placeholder-gray-400 focus:outline-none focus:border-black w-full p-4 mr-0 mt-0 ml-0 text-base block bg-white border-gray-300 rounded-md"
            />
          </div>
        </div>
        <div className="relative">
          <p className=" absolute pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 bg-white">
            {"Image URL"}
          </p>
          <input
            {...register("images", { required: true })}
            placeholder="Image URL"
            className="border placeholder-gray-400 focus:outline-none focus:border-black w-full p-4 mr-0 mt-0 ml-0 text-base block bg-white border-gray-300 rounded-md"
          />
        </div>
        <button
          type="submit"
          className="bg-black px-5 py-3 text-white w-full rounded-sm font-bold uppercase my-5"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
