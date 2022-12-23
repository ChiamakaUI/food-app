import Banner from "../components/Banner";
import Categories from "../components/Categories";

const Home = () => {
  return (
    <div  className="w-full h-full">
      <Banner />
      <div className="font-jost mt-3.5">
        <p className="font-jost font-semibold text-3xl ml-3.5 text-center mb-3">
          Shop Categories
        </p>
        <Categories />
      </div>
    </div>
  );
};

export default Home;
