import { Link } from "react-router-dom";
import { GrCart } from "react-icons/gr";
import { useContext, useState } from "react";
import { cartContext } from "../App";
import CartItem from "./CartItem";
import { MdCancel } from "react-icons/md";
const Navbar = () => {
  const { cart } = useContext(cartContext);
  const [showCart, setShowCart] = useState(false);
  return (
    <div className="bg-white border-b p-5 w-screen">
      <div className="w-5/6 mx-auto flex flex-row items-center justify-between font-jost font-medium text-base">
        <Link to="/">
          <img src="/easyappz.png" className="h-[40px]" />
        </Link>
        <Link to="/menu">Menu</Link>
        <Link to="/faq">FAQ</Link>
        <Link to="/contact">Contact us</Link>
        <div className="relative">
          <div>
            <GrCart
              className="text-2xl cursor-pointer"
              onClick={() => setShowCart(true)}
            />
            <div className="absolute bottom-2 left-8 text-lg">
              {cart.length === 0 ? (
                ""
              ) : (
                <div>
                  {cart.reduce((acc, current) => acc + current.quantity, 0)}
                </div>
              )}
            </div>
          </div>
          {showCart && (
            <div className="border w-[300px] absolute top-8 right-2 p-2 shadow-xl z-50">
              {cart.length === 0 ? (
                <p className="font-jost">Your cart is empty</p>
              ) : (
                <div className="bg-black-overlay">
                
                  <div className="flex flex-col items-center bg-white p-2">
                  <MdCancel className="text-4xl absolute -top-3 -left-2 cursor-pointer" onClick={() => setShowCart(false)}/>
                    {cart.map((item) => (
                      <CartItem
                        item={item}
                        key={item.id}
                        imageSize="w-[70px]"
                        textSize="text-sm"
                        showUnitPrice={false}
                      />
                    ))}
                    <Link to="/cart" className="w-[90%]">
                      <button className="border w-full mx-auto px-3 my-1.5 rounded-lg">
                        View cart
                      </button>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
