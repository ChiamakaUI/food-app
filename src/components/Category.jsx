const Category = ({ image, name }) => {
  return (
    <div className="flex flex-row min-w-[350px] w-[350px] h-[280px] items-center mx-2 cursor-pointer">
      <img src={image} alt={name} className="h-[65%] w-[55%]" />
      <div className="h-[100%] w-[45%] flex flex-col items-center bg-[#000000] p-3">
        <p className="text-2xl text-white font-jost">{name}</p>
        <hr className="w-[50%]"/>
      </div>
    </div>
  );
};

export default Category;
