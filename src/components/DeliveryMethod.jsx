const DeliveryMethod = ({ text, icon, desc, clickFunc }) => {
  return (
    <div
      className="border w-[350px] h-[260px] shadow-lg flex flex-col items-center justify-between rounded-xl my-3 lg:my-0 cursor-pointer"
      onClick={() => clickFunc()}
    >
      <div className="my-auto flex-col items-center">
        {icon}
        <p className="text-xl">{text}</p>
        <p className="text-sm">{desc}</p>
      </div>
    </div>
  );
};

export default DeliveryMethod;
