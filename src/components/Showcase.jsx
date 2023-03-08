const Showcase = () => {
  const displayImages = [
    {
      id: 1,
      image:
        "https://firebasestorage.googleapis.com/v0/b/food-cms-72035.appspot.com/o/26.PNG?alt=media&token=fc58b72d-4dbd-491c-9f27-829cb2660e5d",
    },
    {
      id: 2,
      image:
        "https://firebasestorage.googleapis.com/v0/b/food-cms-72035.appspot.com/o/61.PNG?alt=media&token=73d34843-caaf-4f53-afe8-f9a5ca21a916",
    },
    {
      id: 3,
      image:
        "https://firebasestorage.googleapis.com/v0/b/food-cms-72035.appspot.com/o/BHCoconutRice.PNG?alt=media&token=ce97872d-83a5-42fa-abd3-54e72f47a4df",
    },
  ];
  return (
    <div className="flex flex-col lg:flex-row w-[90%] mx-auto justify-between items-center my-8 lg:my-10">
      <div className="text-center lg:w-[45%] mb-5 lg:mb-0">
        <p className="text-3xl lg:text-5xl font-semibold mb-3"> We make the best food</p>
        <p className="text-xl lg:text-xl">
          Pay us a visit today, you are definitely giving your tummy a treat. <br/> We
          guarantee swift speed of service, freshly prepared tasty meals,
          served to your specification and dining pleasure.{" "}
        </p>
      </div>
      <div className="lg:w-[50%] flex flex-row flex-wrap justify-between">
        {displayImages.map((item, index) => (
          <img
            src={item.image}
            alt="showcase"
            key={item.id}
            className={`rounded-xl ${index === 0 ? "w-full" : "w-[49%] mt-2"}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Showcase;
