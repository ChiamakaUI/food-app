import { ref as databaseRef, onValue, push } from "firebase/database";
import { useState, useEffect } from "react";
import { database } from "../config/firebase";
import Category from "./Category";
const Categories = ({ row }) => {
  const [categories, setCategories] = useState([]);
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
  return (
    <div className="flex flex-row items-center my-10 overflow-x-auto scroll-smooth scrollbar-hide">
      {categories.map((category, index) => (
        <Category
          key={index}
          image={category.image}
          name={category.categoryName}
        />
      ))}
    </div>
  );
};

export default Categories;
//w-full 