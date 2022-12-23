const Banner = () => {
  return (
    <div className="w-screen h-[520px] text-white">
      <div className="w-full h-full relative">
        <img
          className="w-full h-full object-cover"
          src={`/bg.png`}
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
  );
};

export default Banner;
