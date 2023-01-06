import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import ItemList from "./components/ItemList";
import Nav from "./components/Nav";

function App() {
  return (
    <div>
      <Header />
      <Nav />
      
      <Routes>
        <Route path="/" element={<ItemList category="none" />} />
        <Route
          path="/electronics"
          element={<ItemList category="Electronics" />}
        />
        <Route path="/clothing" element={<ItemList category="Clothing" />} />
        <Route path="/household" element={<ItemList category="Household" />} />
      </Routes>
    </div>
  );
}

export default App;
