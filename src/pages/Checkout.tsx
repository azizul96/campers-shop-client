import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { RootState } from "../redux/store";
import { useState } from "react";
import { clearCart } from "../redux/slices/cartSlice";
import { SubmitHandler, useForm } from "react-hook-form";

type UserDetails = {
  name: string;
  email: string;
  phone: string;
  address: string;
};

const Checkout = () => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state: RootState) => state.cart.items);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserDetails>();

  const [paymentMethod, setPaymentMethod] = useState<string>("cod");
  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const onSubmit: SubmitHandler<UserDetails> = () => {
    if (paymentMethod === "cod") {
      dispatch(clearCart());
      navigate("/success");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32 my-20">
          <div className="px-4 pt-8">
            <p className="font-medium text-xl">Summary</p>
            <div className="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-5">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-gray-900">Shipping</p>
                <p className="text-lg font-bold text-gray-900">COD</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-gray-900">Total</p>
                <p className="text-lg font-bold text-gray-900">
                  ${total.toFixed(2)}
                </p>
              </div>
            </div>
          </div>
          <div className="mt-10 bg-white px-4 pt-8 lg:mt-0">
            <p className="text-xl font-medium">Shipping address details</p>
            <p className="text-gray-400 font-bold">
              Complete your order by providing address below
            </p>
            <div className="w-full mt-6 mr-0 mb-0 ml-0 space-y-6">
              <div className="grid grid-cols-1 gap-5">
                <div className="relative">
                  <p className=" absolute pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 bg-white">
                    {"Name"}
                  </p>
                  <input
                    {...register("name", { required: true })}
                    placeholder={
                      errors.name ? "This field is required" : "Name"
                    }
                    className="border placeholder-gray-400 focus:outline-none focus:border-black w-full p-4 mr-0 mt-0 ml-0 text-base block bg-white border-gray-300 rounded-md"
                  />
                </div>
                <div className="relative">
                  <p className=" absolute pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 bg-white">
                    {"Email"}
                  </p>
                  <input
                    {...register("email", { required: true })}
                    placeholder={
                      errors.email ? "This field is required" : "Email"
                    }
                    className="border placeholder-gray-400 focus:outline-none focus:border-black w-full p-4 mr-0 mt-0 ml-0 text-base block bg-white border-gray-300 rounded-md"
                  />
                </div>
                <div className="relative">
                  <p className=" absolute pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 bg-white">
                    {"Phone"}
                  </p>
                  <input
                    {...register("phone", { required: true })}
                    placeholder={
                      errors.phone ? "This field is required" : "Phone"
                    }
                    className="border placeholder-gray-400 focus:outline-none focus:border-black w-full p-4 mr-0 mt-0 ml-0 text-base block bg-white border-gray-300 rounded-md"
                  />
                </div>
                <div className="relative">
                  <p className=" absolute pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 bg-white">
                    {"Address"}
                  </p>
                  <input
                    {...register("address", { required: true })}
                    placeholder={
                      errors.address ? "This field is required" : "Address"
                    }
                    className="border placeholder-gray-400 focus:outline-none focus:border-black w-full p-4 mr-0 mt-0 ml-0 text-base block bg-white border-gray-300 rounded-md"
                  />
                </div>
                <div className="relative">
                  <p className=" absolute pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 bg-white">
                    {"Cash on Delivery"}
                  </p>
                  <input
                    type="radio"
                    value="cod"
                    checked={paymentMethod === "cod"}
                    onChange={() => setPaymentMethod("cod")}
                    className="border placeholder-gray-400 focus:outline-none focus:border-black w-full p-4 mr-0 mt-0 ml-0 text-base block bg-white border-gray-300 rounded-md"
                  />
                </div>
              </div>
            </div>

            <div className="mt-6 border-t border-b py-2">
              <div className="pb-10">
                <button
                  type="submit"
                  disabled={total === 0}
                  className="disabled:opacity-50 mt-5 mr-5 w-full  inline-block bg-green-700 text-white px-5 py-3 text-xs font-medium uppercase tracking-wide rounded-sm"
                >
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
