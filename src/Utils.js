import axios from "axios";

const api = axios.create({
  baseURL: "https://nc-marketplace-seminar-2.onrender.com/api",
});

//MODEL

export function getAllItems(cat) {
  return api.get("/items").then(({ data }) => {
    if (cat === "none") {
      const allItems = [...data.items];
      return allItems;
    } else {
      const allItems = [...data.items];
      return allItems.filter((item) => item.category_name === cat);
    }
  });
}
