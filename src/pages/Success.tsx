import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Success = () => {
  const [orderId, setOrderId] = useState<string>("");
  const [deliveryDate, setDeliveryDate] = useState<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    const generateOrderId = (): string => {
      const randomNumber = Math.floor(100000 + Math.random() * 900000); // Generates a 6-digit random number
      return `ORD-${randomNumber}`; // Prefixing with 'ORD-' for clarity
    };

    const calculateDeliveryDate = (orderDate: Date): string => {
      const estimatedDays = 3; // Example: Estimated days for delivery
      const deliveryDate = new Date(orderDate);
      deliveryDate.setDate(deliveryDate.getDate() + estimatedDays);
      return deliveryDate.toDateString();
    };

    const orderDate = new Date(); // Assuming current date/time as the order date
    const newOrderId = generateOrderId();
    const newDeliveryDate = calculateDeliveryDate(orderDate);

    setOrderId(newOrderId);
    setDeliveryDate(newDeliveryDate);
  }, []);

  const handleContinueShopping = () => {
    navigate("/");
  };

  return (
    <section className="h-screen bg-gray-200">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mt-8 max-w-screen-xl px-4 sm:px-6 lg:px-8 ">
          <div className="bg-white shadow">
            <div className="px-4 py-6 sm:px-8 sm:py-10 flex flex-col gap-5">
              <h1 className="font-bold text-lg">
                Order Placed Successfully! Thank you for your purchase. Your
                order has been placed successfully.
              </h1>
              <p>
                <span className="font-bold">Order ID:</span> {orderId}
              </p>
              <p>
                <span className="font-bold">Delivery Date: </span>{" "}
                {deliveryDate}
              </p>
              <div className="my-5">
                <button
                  onClick={handleContinueShopping}
                  className="bg-emerald-600 text-white px-5 py-3"
                >
                  Continue Shopping
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Success;
