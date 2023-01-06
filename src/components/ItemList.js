// import axios from "axios";
// import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAllItems } from "../Utils";
import ItemCard from "./ItemCard";

//CONTROLLER

export default function ItemList({ category }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getAllItems(category).then((data) => setItems(data.items));
  }, [category]);

  return (
    <ul id="item-list">
      {items.map((item) => {
        return <ItemCard key={item.item_id} {...item} />;
      })}
    </ul>
  );
}
