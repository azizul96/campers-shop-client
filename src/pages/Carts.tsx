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
                  <div className="font-bold">${totalPrice.toFixed(2)}</div>
                </td>
                <td>
                  <div className="">
                    <input
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
                  <button className="btn btn-ghost btn-xs">details</button>
                  <button className="btn btn-ghost btn-xs">details</button>
                </th>
              </tr>
            ))}
            {/* Row end */}
          </tbody>
          {/* foot */}
        </table>
      </div>
    </div>
  );
};

export default Carts;
