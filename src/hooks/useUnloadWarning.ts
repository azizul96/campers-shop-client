import { useEffect } from "react";
import { useAppSelector } from "../redux/hook";
import { RootState } from "../redux/store";

const useUnloadWarning = () => {
  const cartItems = useAppSelector((state: RootState) => state.cart.items);

  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      if (cartItems.length > 0) {
        const confirmationMessage =
          "You have items in your cart. Are you sure you want to leave?";
        event.preventDefault(); // Standard in some browsers
        return confirmationMessage; // Standard in other browsers
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [cartItems]);
};

export default useUnloadWarning;
