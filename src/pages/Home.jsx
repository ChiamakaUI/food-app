import Banner from "../components/Banner";
import Categories from "../components/Categories";

const Home = () => {
  return (
    <div className="w-full h-full z-50 mb-20">
      <Banner />
      <div className="font-jost mt-3.5">
        <p className="font-jost font-semibold text-3xl ml-3.5 text-center mb-3">
          Shop Categories
        </p>
        <Categories />
        <div className="w-[88%] mx-auto h-[420px] text-white mb-20 z-50">
        <div className="w-full h-full relative">
        <img
          className="w-full h-full object-cover"
          src={`/bg-banner.png`}
          alt="background"
        />
        <div className="absolute w-full top-[30%] left-[34%] p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl font-bold font-jost">EasyAppz</h1>
          <p className="font-jost text-base">
            Food Ordering App with online payment.
          </p>
          <button className="mx-auto border w-[150px] p-2 rounded-lg font-jost">
            Order Now
          </button>
        </div>
      </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
