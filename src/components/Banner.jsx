import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <div className="w-screen h-[520px] text-white" style={{ backgroundImage: "url(/bg.png)" }}>
        <div className="flex flex-col items-center w-[50%] mx-auto pt-[8%] h-[255px] justify-between">
          <h1 className="text-3xl md:text-5xl font-bold font-jost">EasyAppz</h1>
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
  );
};

export default Banner;
