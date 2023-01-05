import styles from "../css/ItemCard.module.css";

export default function ItemCard(p) {
  const imgLink =
    "https://img.icons8.com/external-victoruler-flat-gradient-victoruler/512/external-add-to-basket-food-and-delivery-victoruler-flat-gradient-victoruler-1.png";

  return (
    <li>
      <h3>{p.item_name}</h3>
      <span>
        {p.price}
        <img alt="add to cart" src={imgLink} />
      </span>
      <p>{p.description}</p>
    </li>
  );
}

/*
    "item_id": 1,
      "item_name": "The Holy Grail",
      "description": "Defo the real deal and not a prop from Indiana Jones",
      "img_url": "https://test.com/The Holy Grail.jpg",
      "price": 5000,
      "category_name": "Relics"
*/
