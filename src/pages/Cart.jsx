import { useContext, useState } from "react";
import { cartContext } from "../App";
import CartItem from "../components/CartItem";
import { useNavigate } from "react-router-dom";
import Modal from "../components/Modal";
import { PaystackButton } from "react-paystack";

const Cart = () => {
  const { cart } = useContext(cartContext);

  const totalPrice = cart.reduce(
    (acc, current) => acc + current.quantity * current.price,
    0
  );

  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const publicKey = "pk_test_e0e9ea49a1fe47fb05f9f960a0341eaf4bd86a4e";
  // const amount = 1000000
  const amount = totalPrice * 100;

  const componentProps = {
    email,
    amount,
    metadata: {
      name,
      phone,
    },
    publicKey,
    text: "Pay Now",
    onSuccess: () =>
      alert("Thanks for doing business with us! Come back soon!!"),
    onClose: () => alert("Wait! You need this food, don't go!!!!"),
  };
  return (
    <div className="w-[88%] mx-auto mt-10 font-jost">
      <p className="text-2xl text-center mb-3">Shopping Cart</p>
      {cart.length === 0 ? (
        <p className="font-jost text-xl text-center">Your cart is empty</p>
      ) : (
        <div>
          <div className="flex flex-row w-full mx-auto items-center justify-between text-lg">
            <p>Image</p>
            <p>Product name</p>
            <p>Quantity</p>
            <p> Unit Price</p>
            <p>SubTotal</p>
            <p></p>
          </div>
          {cart.map((item) => (
            <CartItem
              item={item}
              key={item.id}
              imageSize="w-[150px]"
              textSize="text-base"
              showUnitPrice={true}
            />
          ))}
        </div>
      )}

      {cart.length !== 0 && (
        <div className="border w-[22%] ml-auto p-2 mt-6">
          <p className="text-center text-lg">Total price: {totalPrice}</p>
        </div>
      )}
      <div className="w-[85%] mx-auto flex flex-row items-center justify-between mt-20">
        <button
          className="bg-[#FFC163] py-3 px-3.5 rounded-full cursor-pointer"
          onClick={() => navigate("/menu")}
        >
          Continue Shopping
        </button>
        {cart.length !== 0 && (
          <button
            className="bg-black text-white py-2 px-4 rounded-full cursor-pointer"
            onClick={() => setShowModal(true)}
          >
            Checkout
          </button>
        )}
      </div>
      {showModal && (
        <Modal closeFunc={setShowModal}>
          <form className="w-[65%] mx-auto p-4 my-auto">
            <div className="w-full p-4">
              <label className="text-lg">Name</label>
              <input
                type="text"
                id="name"
                onChange={(e) => setName(e.target.value)}
                className="w-full p-2.5 rounded-xl"
              />
            </div>
            <div className="w-full p-4">
              <label className="text-lg">Email</label>
              <input
                type="text"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2.5 rounded-xl"
              />
            </div>
            <div className="w-full p-4">
              <label className="text-lg">Phone</label>
              <input
                type="text"
                id="phone"
                onChange={(e) => setPhone(e.target.value)}
                className="w-full p-2.5 rounded-xl"
              />
            </div>
          </form>
          <div className="w-[63%] p-6 mx-auto">
            <PaystackButton
              className="border w-full p-2 rounded-xl text-xl"
              {...componentProps}
            />
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Cart;
