import { useEffect, useState } from "react";
import { Product } from "../typings/types";
import axios from "axios";
import ProductForm from "../components/ProductForm";
import Swal from "sweetalert2";

const ProductManagement = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isFormOpen, setIsFormOpen] = useState<boolean>(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get<Product[]>(
          "https://campers-shop-server-tau.vercel.app/api/products"
        );
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleDelete = async (id: string) => {
    Swal.fire({
      title: "You want to delete this?",
      text: "",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        try {
          axios.delete(
            `https://campers-shop-server-tau.vercel.app/api/products/${id}`
          );
          setProducts(products.filter((product) => product._id !== id));
        } catch (error) {
          console.error("Error deleting product:", error);
        }
        Swal.fire({
          title: "Deleted!",
          text: "Your item has been deleted.",
          icon: "success",
        });
      }
    });
  };

  const handleCreate = () => {
    setSelectedProduct(null);
    setIsFormOpen(true);
  };
  const handleEdit = (product: Product) => {
    setSelectedProduct(product);
    setIsFormOpen(true);
  };

  const handleSuccess = () => {
    setIsFormOpen(false);
    const fetchProducts = async () => {
      try {
        const response = await axios.get<Product[]>(
          "https://campers-shop-server-tau.vercel.app/api/products"
        );
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  };

  return (
    <div>
      <div className=" flex flex-col md:flex-row justify-between items-center mt-5 mb-10 gap-5 ">
        <h2 className="text-xl font-bold text-gray-950 sm:text-3xl uppercase ">
          Product Management
        </h2>
        <button
          onClick={handleCreate}
          className="bg-green-600 text-white px-5  py-3 rounded-sm shadow-lg font-bold uppercase "
        >
          Create Product
        </button>
      </div>
      <div>
        {isFormOpen && (
          <ProductForm product={selectedProduct} onSuccess={handleSuccess} />
        )}
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Stock</th>
              <th className=" text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={product.images}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="font-bold">{product.name}</div>
                </td>
                <td>
                  <div className="font-bold">${product.price}</div>
                </td>
                <td>
                  <div className="">{product.stock}</div>
                </td>
                <th className="text-center space-x-2 space-y-2">
                  <button
                    onClick={() => handleEdit(product)}
                    className="bg-lime-600 text-white px-3  py-1 rounded-sm shadow-lg "
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(product._id)}
                    className="bg-red-600 text-white px-3  py-1 rounded-sm shadow-lg "
                  >
                    Delete
                  </button>
                </th>
              </tr>
            ))}

            {/* Row end */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductManagement;
