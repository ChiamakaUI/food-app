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
      text: "Pick up",
      desc: "you pick up your order when it is ready",
      icon: <BsWallet2 className="text-4xl" />,
    },
    {
      id: 2,
      text: "Pay Online",
      desc: "and wait for delivery.",
      icon: <BsCreditCard className="text-4xl" />,
    },
    {
      id: 3,
      text: "Pay with Cash",
      desc: "when the food is delivered to you.",
      icon: <BsWallet2 className="text-4xl" />,
    },
  ];
  const [onlineModal, setOnlineModal] = useState(false);
  const [deliveryModal, setDeliveryModal] = useState(false);
  const [pickupModal, setPickupModal] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const publicKey = "pk_test_e0e9ea49a1fe47fb05f9f960a0341eaf4bd86a4e";
  // const amount = 1000000
  const amount = totalPrice * 100;
  const cartItemName = cart.map((item) => item.productName);
  const cartItemPrice = cart.map((item) => item.price);
  const cartItemQuantity = cart.map((item) => item.quantity);
  const openDeliveryModal = () => {
    setDeliveryModal(true);
  };

  const openOnlineModal = () => {
    setOnlineModal(true);
  };

  const openPickupModal = () => {
    setPickupModal(true);
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
      setOnlineModal(false);
      // sendMail();
    },
    onClose: () => alert("Wait! You need this food, don't go!!!!"),
  };

  const sendDeliveryMail = () => {
    console.log("sendDeliveryMail");
  };

  const sendPickupMail = () => {
    console.log("sendPickupMail");
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
              method.text === "Pay Online"
                ? openOnlineModal
                : method.text === "Pick up"
                ? openPickupModal
                : openDeliveryModal
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
          <form
            className="lg:w-[65%] md:w-[75%] mx-auto p-4 my-auto"
            onSubmit={sendDeliveryMail}
          >
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
      {pickupModal && (
        <Modal closeFunc={setPickupModal}>
          <h3 className="font-jost text-base text-center">
            Please, enter your details to place an order
          </h3>
          <form
            className="lg:w-[65%] md:w-[75%] mx-auto p-4 my-auto"
            onSubmit={sendPickupMail}
          >
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
            <button className="border w-full p-2 rounded-xl text-xl">
              Place Order
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

// ${cart.map(
//   (item) => (
//     <li>
//       <div>
//         {item.productName}
//         {item.quantity}
//       </div>
//     </li>
//   )
// )}

// const sendMail = () => {
//   const options = {
//     method: "POST",
//     url: "https://email-sender1.p.rapidapi.com/",
//     params: {
//       txt_msg: `This is to confirm your order. `,
//       to: `${email}`,
//       // to: "ezembachiamaka@gmail.com",
//       from: "Eazyapps",
//       subject: "Order Confirmation",
//       // bcc: "webdev@trostechnologies.com",
//       reply_to: "webdev@trostechnologies.com",
//       html_msg: `<html><body><b>Dear ${name}</b>, <br/> <br/>This is to confirm your order for <table>
//       <tr>${cartItemName}</tr>
//       <tr>${cartItemPrice}</tr>
//       <tr>${cartItemQuantity}</tr>
//       </table>
//        <br/> Your order will be ready in a couple of minutes and will be delivered to you at ${address}. Best Regards <br/> <br/><b>EazyApps</b></body></html>`,
//       cc: "webdev@trostechnologies.com",
//     },
//     headers: {
//       "content-type": "application/json",
//       "x-rapidapi-host": "email-sender1.p.rapidapi.com",
//       "x-rapidapi-key": "041695ddc2msh03ecff701bdb863p15a99ejsnfcf96e24fbff",
//     },
//     data: { key1: "value", key2: "value" },
//   };

//   axios
//     .request(options)
//     .then(function (response) {
//       console.log(response.data);
//     })
//     .catch(function (error) {
//       console.error(error);
//     });
// };
