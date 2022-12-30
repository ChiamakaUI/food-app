import { Link, useNavigate } from "react-router-dom";
import { GrCart } from "react-icons/gr";
import { useContext, useState } from "react";
import { cartContext } from "../App";
import CartItem from "./CartItem";
import { MdCancel, MdMenu } from "react-icons/md";
import Modal from "./Modal";
const Navbar = () => {
  const { cart } = useContext(cartContext);
  const [showCart, setShowCart] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="bg-white border-b p-5 w-screen">
      <div className="w-5/6 mx-auto hidden lg:flex md:flex flex-row items-center justify-between font-jost font-medium text-base">
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
                    <MdCancel
                      className="text-4xl absolute -top-3 -left-2 cursor-pointer"
                      onClick={() => setShowCart(false)}
                    />
                    {cart.map((item) => (
                      <CartItem
                        item={item}
                        key={item.id}
                        imageSize="w-[70px]"
                        textSize="text-sm"
                        showUnitPrice={false}
                      />
                    ))}

                    <button
                      className="border w-full mx-auto px-3 my-1.5 rounded-lg"
                      onClick={() => {
                        navigate("/cart");
                        setShowCart(false);
                      }}
                    >
                      View cart
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-row items-center justify-between font-jost md:hidden lg:hidden">
        <Link to="/">
          <img src="/easyappz.png" className="h-[25px]" />
        </Link>
        {cart.length !== 0 && (
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
              <div className="border w-[300px] absolute top-8 -right-14 p-2 shadow-xl z-50">
                {cart.length === 0 ? (
                  <p className="font-jost">Your cart is empty</p>
                ) : (
                  <div className="bg-black-overlay">
                    <div className="flex flex-col items-center bg-white p-2">
                      <MdCancel
                        className="text-4xl absolute -top-3 -left-2 cursor-pointer"
                        onClick={() => setShowCart(false)}
                      />
                      {cart.map((item) => (
                        <CartItem
                          item={item}
                          key={item.id}
                          imageSize="w-[70px]"
                          textSize="text-sm"
                          showUnitPrice={false}
                        />
                      ))}

                      <button
                        className="border w-full mx-auto px-3 my-1.5 rounded-lg"
                        onClick={() => {
                          navigate("/cart");
                          setShowCart(false);
                        }}
                      >
                        View cart
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
        <MdMenu className="text-3xl" onClick={() => setShowMenu(true)} />
      </div>

      {showMenu && (
        <Modal closeFunc={setShowMenu}>
          <div className="flex flex-col items-center justify-between font-jost text-xl font-medium">
            <p
              onClick={() => {
                navigate("/");
                setShowMenu(false);
              }}
            >
              Home
            </p>
            <p
              onClick={() => {
                navigate("/menu");
                setShowMenu(false);
              }}
            >
              Menu
            </p>

            <p
              onClick={() => {
                navigate("/faq");
                setShowMenu(false);
              }}
            >
              FAQ
            </p>
            {/* <p
              onClick={() => {
                navigate("/cart");
                setShowMenu(false);
              }}
            >
              Cart
            </p> */}
            <p
              onClick={() => {
                navigate("/contact");
                setShowMenu(false);
              }}
            >
              Contact us
            </p>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Navbar;
