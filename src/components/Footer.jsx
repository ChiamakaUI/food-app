import { Link } from "react-router-dom";
import { FaTwitter } from "react-icons/fa";
import { BsFacebook, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="font-jost bg-[#121921] w-full text-white flex flex-row p-12 items-center justify-between text-sm mt-12">
      <div className="flex flex-col">
        <p className="text-lg">Menu Links</p>
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/faq">FAQ</Link>
        <Link to="/contact">Contact us</Link>
      </div>
      <div>
        <p className="text-lg">Contact Us</p>
        <p>
          Address: 1st Floor Capwire House, 19 Sinari Daranijo Street, Victoria
          Island, Lagos Nigeria
        </p>
        <p>Mail: info@yourdomain.com</p>
        <p>Phone: +234 1 630 9573</p>
      </div>
      <div>
        <p className="text-lg">Find Us On</p>
        <div className="flex flex-row items-center justify-between">
          <FaTwitter />
          <BsFacebook />
          <BsInstagram />
        </div>
      </div>
    </div>
  );
};
//fixed bottom-0
export default Footer;
