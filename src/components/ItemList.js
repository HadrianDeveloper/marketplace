import { useEffect, useState } from "react";
// import { getAllItems, postItems } from "../Utils";
import ItemCard from "./ItemCard";
import { useContext } from "react";
import LoggedinUserContext from "../contexts/loggedinUser";
import '../css/ItemCard.module.css'

export default function ItemList({ setInBasket, items}) {
  const { user } = useContext(LoggedinUserContext)

  // const [items, setItems] = useState([]);

  // useEffect(() => {
  //   getAllItems(category).then((data) => setItems(data));
  // }, [category]);

  function handleClick(id) {
    setInBasket((curr) => {
      const newAdd = items.filter((item) => item.item_id === id)
      return [...curr, ...newAdd]
    })
    postItem(user, id)
  };

  return (
    <ul id="item-list">
      {items.map((item) => {
        return <ItemCard key={item.item_id} {...item} handleClick={handleClick} onClick={handleClick}/>;
      })}
    </ul>
  );
}
