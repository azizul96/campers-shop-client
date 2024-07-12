import Banner from "../components/Banner";
import BestSellingProducts from "../components/BestSellingProducts";
import CategoriesSection from "../components/CategoriesSection";
import FAQSection from "../components/FAQSection";
import VideoSection from "../components/VideoSection";

const Home = () => {
  return (
    <div>
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
