import { Routes, Route, useParams } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import ItemList from './components/ItemList';
import Nav from './components/Nav';

function App() {

  

  return (
    <div>
      <Header />
      <Nav />
  
      <Routes>
        <Route path='/items' element={<ItemList category='' />} />
        <Route path='/electronics' element={<ItemList category='electronics' />} />
        <Route path='/clothing' element={<ItemList category='clothing' />} />
        <Route path='/household' element={<ItemList category='household' />} />
      </Routes>

    </div>
  )

};

export default App;
