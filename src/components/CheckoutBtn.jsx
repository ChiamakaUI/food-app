import Modal from "./Modal";

const CheckoutBtn = () => {
  const publicKey = "pk_your_public_key_here"
  const amount = 1000000 // Remember, set in kobo!
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  
  return (
    <div>
      <button className="bg-black text-white py-2 px-4 rounded-full cursor-pointer">
        Checkout
      </button>

      <Modal>
        <p>hyyyy</p>
      </Modal>

   

...

<div className="checkout-form">
  <div className="checkout-field">
    <label>Name</label>
    <input
      type="text"
      id="name"
      onChange={(e) => setName(e.target.value)}
    />
  </div>
  <div className="checkout-field">
    <label>Email</label>
    <input
      type="text"
      id="email"
      onChange={(e) => setEmail(e.target.value)}
    />
  </div>
  <div className="checkout-field">
    <label>Phone</label>
    <input
      type="text"
      id="phone"
      onChange={(e) => setPhone(e.target.value)}
    />
  </div>
  <PaystackButton className="paystack-button" {...componentProps} />
</div>
    </div>
  );
};

export default CheckoutBtn;
