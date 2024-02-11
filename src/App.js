import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar.jsx';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home.jsx';
import Recipes from './components/Recipes/Recipes.jsx';
import FoodItems from './components/FoodItems/FoodItems.jsx';
import Footer from './components/Footer/Footer.jsx';
import Error from './components/Error/Error.jsx';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/recipes' element={<Recipes/>}/>
        <Route path='/fooditems' element={<FoodItems/>}/>
        <Route path='/*' element={<Error/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
