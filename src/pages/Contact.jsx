const Contact = () => {
  return (
    <div>
      <h2 className="font-jost text-2xl text-center mt-6 font-semibold">
        Contact Us
      </h2>
      <form className="w-[80%] mx-auto p-4 my-auto font-jost">
        <div className="w-full p-4">
          <label className="text-lg">Name</label>
          <input
            type="text"
            id="name"
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2.5 rounded-xl border"
          />
        </div>
        <div className="w-full p-4">
          <label className="text-lg">Email</label>
          <input
            type="text"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2.5 rounded-xl border"
          />
        </div>
        <div className="w-full p-4">
          <label className="text-lg">Message</label>
          <textarea className="w-full p-2.5 rounded-xl border"></textarea>
        </div>
      </form>
    </div>
  );
};

export default Contact;
