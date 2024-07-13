import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import {
  removeFromCart,
  selectCartItems,
  updateQuantity,
} from "../redux/slices/cartSlice";

const Carts = () => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector(selectCartItems);

  const handleRemove = (productId: string) => {
    dispatch(removeFromCart(productId));
  };

  const handleQuantityChange = (productId: string, quantity: number) => {
    dispatch(updateQuantity({ productId, quantity }));
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cartItems?.map((item) => (
              <tr>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={item.images}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="font-bold">{item.name}</div>
                </td>
                <td>
                  <div className="font-bold">${item.price}</div>
                </td>
                <td>
                  <div className="">
                    <input
                      className="border-2  rounded-lg text-center"
                      type="number"
                      value={item.quantity}
                      min="1"
                      max={item.stock}
                      onChange={(e) =>
                        handleQuantityChange(
                          item.productId,
                          Number(e.target.value)
                        )
                      }
                    />
                  </div>
                </td>
                <th>
                  <button
                    onClick={() => handleRemove(item.productId)}
                    className="bg-red-600 text-white px-2 py1 rounded-lg shadow-lg "
                  >
                    Remove
                  </button>
                </th>
              </tr>
            ))}
            {/* Row end */}
          </tbody>
          {/* foot */}
        </table>
        <div className=" flex flex-col md:flex-row justify-evenly items-center my-10">
          <h2 className="text-3xl font-bold">
            Total Price: ${totalPrice.toFixed(2)}
          </h2>
          <Link to="/checkout">
            <button className="bg-green-500 text-white font-bold px-5 py-2 rounded-md">
              Checkout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Carts;
