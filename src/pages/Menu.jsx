import { useState, useEffect } from "react";
import { database } from "../config/firebase";
import { ref as databaseRef, onValue, } from "firebase/database";
import { BsSearch } from "react-icons/bs";
import Product from "../components/Product";
const Menu = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  // const [backup,setBackup] = useState([
  //   {
  //     id:1,
  //     productName: "Meatpie",
  //     price: 700,
  //     image: "/easyappz.png"
  //   },
  //   {
  //     id:2,
  //     productName: "Chickenpie",
  //     price: 400,
  //     image: "/easyappz.png"
  //   },

  // ])

  const fetchProducts = () => {
    const productsRef = databaseRef(database, "products/");
    onValue(productsRef, (snapshot) => {
      const products = snapshot.val();
      setProducts(Object.values(products));
    });
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  const fetchCategories = () => {
    const categoriesRef = databaseRef(database, "categories/");
    onValue(categoriesRef, (snapshot) => {
      const categories = snapshot.val();
      setCategories(Object.values(categories));
    });
  };
  useEffect(() => {
    fetchCategories();
  }, []);
  // console.log(products);
  return (
    <div className="w-[90%] h-full mx-auto pt-4.5">
      <div className="w-[90%] mx-auto">
        <p className="font-jost text-base font-semibold my-3">Filters</p>
        <div className="flex flex-row items-center w-full justify-between">
          <select className="font-jost text-base font-medium border w-[40%] p-2.5 rounded-lg">
            <option value="">Select Category</option>
            {categories.map((category, index) => (
              <option key={index} value={category.categoryName}>
                {category.categoryName}
              </option>
            ))}
          </select>
          <div className="w-[40%] flex flex-row items-center border p-2.5 rounded-lg justify-between">
            <input placeholder="Search..." className="font-jost w-[90%]" />
            <BsSearch />
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-between my-5 flex-wrap w-full overflow-y-auto h-[88%]">
        {products.map((product) => (
          <Product key={product.id} item={product} />
        ))}
      </div>
    </div>
  );
};

export default Menu;
