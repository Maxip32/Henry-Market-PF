import './App.css';
import {Routes, Route} from "react-router-dom"
import LandingPage from './components/LandingPage/LandingPage';
import Home from "./components/home/Home";
//import Nav from "./components/nav/Nav";
import FormProducts from './components/formProducts/FormProducts';
import MailValidate from "./components/MailValidate";
import ProductsDetail from "./components/ProductsDetail/ProductsDetail";


import axios from "axios";
axios.defaults.baseURL = "http://localhost:3001/";


function App() {
     

  return (
    
    <div className='App'>
         
      <Routes>
        <Route exact path='/' element={<LandingPage/>} />
        <Route exact path='/home' element={<Home/>} />
        <Route exact path='/formProducts' element={<FormProducts />} />
        <Route exact path= "/mailValidate" element={<MailValidate/>}/>
        <Route exact  path="/detail/:id" element={<ProductsDetail/>}/>
          
      </Routes>
      
      
    </div>
    
    

  );
}

export default App;
