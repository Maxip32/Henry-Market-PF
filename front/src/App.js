import './App.css';
import {Routes, Route} from "react-router-dom"
import LandingPage from './components/LandingPage/LandingPage';
import Home from "./components/home/Home";
//import Nav from "./components/nav/Nav";
import FormProducts from './components/formProducts/FormProducts';
import ValidateMail from "./components/validateMail/ValidateMail";  
import ProductsDetail from "./components/ProductsDetail/ProductsDetail";

import CategoryFilter from './components/categoryFilter/CategoryFilter';
import OrderByProducts from './components/orderByProducts/OrderByProducts';
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3001/";


function App() {
     

  return (
    
    <div className='App'>
         
      <Routes>
        <Route exact path='/' element={<LandingPage/>} />
        <Route exact path='/home' element={<Home/>} />
        <Route exact path='/formProducts' element={<FormProducts />} />
        <Route exact path= "/mailValidate" element={<ValidateMail/>}/>
        <Route exact  path="/detail/:id" element={<ProductsDetail/>}/>
       
        {/*<Route exact  path="/Notifications" element={</>}/>*/}
        {/*<Route exact  path="/Myshopping" element={</>}/>*}
       
        {/*<Route exact  path="/favorites" element={</>}/>*/}
        {/*<Route exact  path="/discounts" element={</>}/>*/}  
        {/*<Route exact  path="/record" element={</>}/>*/}
        <Route exact  path="/account" element={<ValidateMail/>}/>
        <Route exact  path="/category" element={<CategoryFilter/>}/>
        <Route exact  path="/filterPrice" element={<OrderByProducts/>}/>
        
      </Routes>
      
      
    </div>
    
    

  );
}

export default App;
