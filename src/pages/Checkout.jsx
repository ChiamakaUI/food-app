import { BsWallet2, BsCreditCard } from "react-icons/bs";
import DeliveryMethod from "../components/DeliveryMethod";
import { useContext, useState } from "react";
import { cartContext } from "../App";
import Modal from "../components/Modal";
import { PaystackButton } from "react-paystack";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";

const Checkout = () => {
  const { cart } = useContext(cartContext);

  const totalPrice = cart.reduce(
    (acc, current) => acc + current.quantity * current.price,
    0
  );
  const delivery = [
    {
      id: 1,
      text: "Pay Online",
      desc: "and wait for delivery.",
      icon: <BsCreditCard className="text-4xl" />,
    },
    {
      id: 2,
      text: "Pay with Cash",
      desc: "when the food is delivered to you.",
      icon: <BsWallet2 className="text-4xl" />,
    },
  ];
  const [onlineModal, setOnlineModal] = useState(false);
  const [deliveryModal, setDeliveryModal] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const publicKey = "pk_test_e0e9ea49a1fe47fb05f9f960a0341eaf4bd86a4e";
  // const amount = 1000000
  const amount = totalPrice * 100;
  const openDeliveryModal = () => {
    setDeliveryModal(true);
  };
  
  const openOnlineModal = () => {
    setOnlineModal(true);
  };
  const componentProps = {
    email,
    amount,
    metadata: {
      name,
      phone,
    },
    publicKey,
    text: "Pay Now",
    onSuccess: () => {
      alert("Thanks for doing business with us! Come back soon!!");
     // sendMail();
      setOnlineModal(false);
    },
    onClose: () => alert("Wait! You need this food, don't go!!!!"),
  };

  return (
    <div className="font-jost w-[85%] mx-auto">
      <h3 className="text-xl my-6 text-center">
        Please, pick one of the payment methods
      </h3>
      <div className="flex flex-wrap items-center justify-between">
        {delivery.map((method) => (
          <DeliveryMethod
            key={method.id}
            text={method.text}
            icon={method.icon}
            desc={method.desc}
            clickFunc={
              method.text === "Pay Online" ? openOnlineModal : openDeliveryModal
            }
          />
        ))}
      </div>
      {onlineModal && (
        <Modal closeFunc={setOnlineModal}>
          <h3 className="font-jost text-base text-center">
            Please, fill in your details to make payment
          </h3>
          <form className="lg:w-[65%] md:w-[75%] mx-auto p-4 my-auto">
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
            <div className="w-full p-4 ">
              <label className="text-lg">Address</label>
              <textarea
                className="w-full h-[125px] rounded-xl"
                onChange={(e) => setAddress(e.target.value)}
              ></textarea>
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
      {deliveryModal && (
        <Modal closeFunc={setDeliveryModal}>
          <h3 className="font-jost text-base text-center">
            Please, enter your details
          </h3>
          <form className="lg:w-[65%] md:w-[75%] mx-auto p-4 my-auto">
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
            <div className="w-full p-4 ">
              <label className="text-lg">Address</label>
              <textarea
                className="w-full h-[125px] rounded-xl"
                onChange={(e) => setAddress(e.target.value)}
              ></textarea>
            </div>
            <button className="border w-full p-2 rounded-xl text-xl">
              Checkout
            </button>
          </form>
        </Modal>
      )}
    </div>
  );
};

export default Checkout;

//   const schema = yup
//   .object({
//     email: yup.string().email().required("Email is required"),
//     password: yup.string().min(6).max(15).required(),
//   })
//   .required();