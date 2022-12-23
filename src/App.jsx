import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import { useState, createContext } from "react";
import Cart from "./pages/Cart";
import Footer from "./components/Footer";

export const cartContext = createContext();

function App() {
  const [cart, setCart] = useState([]);
  console.log(cart)
  return (
    <cartContext.Provider value={{ cart, setCart }}>
      <Router>
        <div className="w-screen h-screen overflow-x-hidden relative">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart/>} />
          </Routes>
          <Footer/>
        </div>
      </Router>
      
    </cartContext.Provider>
  );
}

export default App;
