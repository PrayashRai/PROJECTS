import { useEffect, useState } from "react";
import axios from "axios";
import Endpoints from "../api/Endpoints";


const SubCategory = () => {
  const catId = 3;
  const [SubCategories, setSubCategories] = useState([]);

  const fetchData = () => {
    axios
      .get(Endpoints.SUB_CATEGORY_URL+ catId)
      .then((response) => setSubCategories(response.data.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchData();
  }, [catId]);

  return (
    <div>
      <h2 className="text-center">Sub-Category</h2>
      <ul className="list-group">
        {SubCategories.map((item) => (
          <li className="list-group-item">{item.subName}</li>
        ))}
      </ul>
    </div>
  );
};

export default SubCategory;
