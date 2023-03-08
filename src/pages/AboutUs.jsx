import MainLayout from "../layouts/MainLayout";
const AboutUs = () => {
  return (
    <MainLayout>
      <p className="text-2xl lg:text-4xl text-center font-bold mt-4 mb-5 lg:mb-0">Easy Foods</p>
      <div className="flex flex-col lg:flex-row lg:justify-between w-[88%] mx-auto lg:my-10">
        <div className="lg:w-[70%]">
          <img src={"/bg-banner.png"} alt="EazyFoods" />
        </div>
        <div className="mt-6 lg:mt-0 lg:w-[28%]">
          <p className="text-lg">
            Our Journey began in 2021. We opened our first outlet in Maryland,
            Lagos and now we have 7 more outlets including 2 in Abuja
          </p>
          <p className="text-lg my-3">
            Our Restaurant offers a wide variety of meals that delivers an
            Original Taste of homemeade meals while making hygiene a prioty
          </p>
          <p className="text-lg my-3">
            Pay us a visit today, you are definitely giving your tummy a treat.
            We guarantee swift speed of service, freshly prepared tasty meals,
            served to your specification and dining pleasure.
          </p>
        </div>
      </div>
    </MainLayout>
  );
};

export default AboutUs;
