import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import ItemList from "./components/ItemList";
import Nav from "./components/Nav";
import ErrorPage from "./components/ErrorPage";

function App() {
  const [inBasket, setInBasket] = useState([]);
  

  return (
    <div>
      <Header inBasket={inBasket} />
      <Nav />
      <Routes>
        <Route path="/" element={<ItemList setInBasket={setInBasket} category="none" />} />
        <Route
          path="/electronics"
          setInBasket={setInBasket}
          element={<ItemList category="Electronics" />}
        />
        <Route path="/clothing" element={<ItemList setInBasket={setInBasket} category="Clothing" />} />
        <Route path="/household" element={<ItemList setInBasket={setInBasket} category="Household" />} />
        <Route path="/*" element={<ErrorPage  />} />
      </Routes>
    </div>
  );
}

export default App;
