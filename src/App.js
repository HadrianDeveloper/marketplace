import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import ItemList from "./components/ItemList";
import Nav from "./components/Nav";
import ErrorPage from "./components/ErrorPage";
import LoggedinUserContext from './contexts/loggedinUser.js';
import Basket from "./components/Basket";
import { getAllItems, postItems } from "../Utils";

function App() {

  const [inBasket, setInBasket] = useState([]);
  const [user, setUser] = useState("stormytuna");

  const [items, setItems] = useState([]);
  useEffect(() => {
    getAllItems(category).then((data) => setItems(data));
  }, [category, inBasket]);
  
  return (
    <LoggedinUserContext.Provider value={{user}}>
      <div>
          <Header inBasket={inBasket} />
          <Nav />

          <Routes>
            <Route 
              path="/" 
              element={<ItemList 
                setInBasket={setInBasket} 
                category="none" />} />

            <Route
              path="/electronics"
              setInBasket={setInBasket}
              element={<ItemList category="Electronics" />}
            />

            <Route 
              path="/clothing" 
              element={<ItemList 
                setInBasket={setInBasket} 
                category="Clothing"
                items={items} />} />

            <Route path="/household" element={<ItemList setInBasket={setInBasket} category="Household" />} />
            <Route path="/basket" element={<Basket />} />
            <Route path="/*" element={<ErrorPage  />} />
          </Routes>

      </div>
    </LoggedinUserContext.Provider>
  );
}

export default App;
