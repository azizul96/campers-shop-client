import Banner from "../components/Banner";
import BestSellingProducts from "../components/BestSellingProducts";
import CategoriesSection from "../components/CategoriesSection";
import FAQSection from "../components/FAQSection";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import VideoSection from "../components/VideoSection";

const Home = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Banner />
      <div>
        <BestSellingProducts />
      </div>
      <div>
        <CategoriesSection />
      </div>
      <div className="my-10">
        <VideoSection />
      </div>
      <div className="my-10">
        <FAQSection />
      </div>
    </div>
  );
};

export default Home;
