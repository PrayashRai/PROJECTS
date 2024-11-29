import React, { useEffect, useState } from "react";
import axios from "axios";
import Category from "./Category";
import Endpoints from "../api/Endpoints";

const CategoryList = () => {
  const [categories, setCategories] = useState([]);

  const fetchData = () => {
    axios
      .get(Endpoints.CATEGORY_URL)
      .then((response) => setCategories(response.data.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container">
      <h2 className="text-center">Category List</h2><br/>
      <div className="row">
       {
        categories.map((Category)=> <Category data={Category}/> )
       }
      </div>
    </div>
  );
};
export default CategoryList;
