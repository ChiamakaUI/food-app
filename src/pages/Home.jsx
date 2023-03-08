import Banner from "../components/Banner";
import Categories from "../components/Categories";
import { Link } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Showcase from "../components/Showcase";


const Home = () => {
  return (
    <MainLayout>
      <Banner />
      <div className="font-jost mt-3.5">
      <Showcase/>
        <p className="font-jost font-semibold text-3xl ml-3.5 text-center mb-3">
          Shop Categories
        </p>
        <Categories />
        <div
          className="w-[88%] mx-auto h-[420px] text-white mb-16 rounded-lg"
          style={{ backgroundImage: "url(/bg-banner.png)" }}
        >
          <div className="flex flex-col items-center w-[40%] mx-auto pt-[8%] h-[280px] justify-between">
            <h1 className="text-3xl md:text-5xl font-bold font-jost">
              EasyAppz
            </h1>
            <p className="font-jost text-base">
              Food Ordering App with online payment.
            </p>
            <Link to="/menu">
            <button className="mx-auto border w-[150px] p-2 rounded-lg font-jost">
              Order Now
            </button>
            </Link>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Home;
