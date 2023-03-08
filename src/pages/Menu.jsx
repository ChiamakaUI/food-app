import { useState, useEffect } from "react";
import { database } from "../config/firebase";
import { ref as databaseRef, onValue } from "firebase/database";
import { BsSearch } from "react-icons/bs";
import Product from "../components/Product";
import MainLayout from "../layouts/MainLayout";
// import toast, { Toaster } from "react-hot-toast";
const Menu = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
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
  const filterByCategories = (e) => {
    if (e.target.value !== "") {
      const filteredProducts = products.filter(
        (data) => data.categoryName === e.target.value
      );
      setFiltered(filteredProducts);
    }
    if (e.target.value === "") {
      // toast.error(`Please, pick a category`);
      setFiltered(products);
      return;
    }
  };
  return (
    <MainLayout>
      <div className="w-[90%] h-full mx-auto pt-4.5">
        <div className="w-[90%] mx-auto">
          <p className="font-jost text-base font-semibold my-3">Filters</p>
          <div className="flex flex-row items-center w-full justify-between">
            <select
              className="font-jost text-base font-medium border w-[40%] p-2.5 rounded-lg"
              onChange={filterByCategories}
            >
              <option value="">All Categories</option>
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
          {filtered.length === 0
            ? products.map((product) => (
                <Product key={product.id} item={product} />
              ))
            : filtered.map((product) => (
                <Product key={product.id} item={product} />
              ))}
        </div>
        {/* <Toaster position="top-right" reverseOrder={false} /> */}
      </div>
    </MainLayout>
  );
};

export default Menu;
