import { RiDeleteBinLine } from "react-icons/ri";
import { useContext } from "react";
import { cartContext } from "../App";
const CartItem = ({ item, imageSize, textSize, showUnitPrice }) => {
  const { cart, setCart } = useContext(cartContext);
  const deleteItem = (id) => {
    const newItems = cart.filter((item) => item.id !== id);
    setCart(newItems);
  };
  return (
    <div
      className={`font-jost ${textSize} flex flex-row w-full items-center justify-between my-1.5`}
    >
      <img
        src={item?.image}
        alt={item?.productName}
        className={`${imageSize}`}
      />
      <p className="">{item?.productName}</p>
      <p>x {item?.quantity}</p>
      <p className="">{item?.price}</p>
      {showUnitPrice && <p>{item?.price * item?.quantity}</p>}

      <RiDeleteBinLine
        className="text-red-600 cursor-pointer"
        onClick={() => deleteItem(item.id)}
      />
    </div>
  );
};

export default CartItem;
