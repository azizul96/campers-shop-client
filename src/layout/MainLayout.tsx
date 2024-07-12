import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div className=" container mx-auto px-4">
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
