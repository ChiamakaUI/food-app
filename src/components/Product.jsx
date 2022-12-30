import { BsCart3 } from "react-icons/bs";
import { useContext } from "react";
import { cartContext } from "../App";
const Product = ({ item }) => {
  const { cart, setCart } = useContext(cartContext);
  const addToCart = (item) => {
    for (let i = 0; i < cart.length; i++) {
      const element = cart[i];
      if (element.id === item.id) {
        element.quantity++;
        return;
      }
    }

    setCart((prev) => [...prev, { ...item, quantity: 1 }]);
  };

  return (
    <div className="min-w-[325px] w-[325px] h-[300px] md:w-[400px] lg:w-[400px] font-jost shadow-md rounded-b-md my-1.5">
      <img
        src={item?.image}
        alt={item?.productName}
        className="w-[100%] h-[80%] rounded-t-md"
      />
      <div className="flex flex-row items-center justify-between w-[92%] mx-auto">
        <div>
          <p className="text-xl">{item?.productName}</p>
          <p className="text-base">{item?.price}</p>
        </div>
        <BsCart3
          className="text-3xl cursor-pointer"
          onClick={() => addToCart(item)}
        />
      </div>
    </div>
  );
};

export default Product;
