import './App.css';
import {Routes, Route, BrowserRouter} from "react-router-dom"
import LandingPage from './components/LandingPage/LandingPage';
import Home from "./components/home/Home";
//import Nav from "./components/nav/Nav";
import FormProducts from './components/formProducts/FormProducts';

import ProductsDetail from "./components/ProductsDetail/ProductsDetail";
import CategoryFilter from './components/categoryFilter/CategoryFilter';
import axios from "axios";
import Payment from './components/payment/Payment';
import SearchBar from './components/searchbar/Searchbar';
import {useAuth0} from "@auth0/auth0-react";
import {AuthenticationGuard} from "./components/authentication-guard";
import FavoriteList from "./components/favorites/FavoriteList"
import EditProductPage from "./components/Dashboard/Editprod"
import Dashboard from './components/Dashboard/Dashboard';

axios.defaults.baseURL = "https://henrypfbackmarket.onrender.com";

function App() {
    // const {isLoading} = useAuth0()
    //
    // if (isLoading) {
    //     return <div>Loading...</div>
    // }

    return (

        <div className='App'>
            <BrowserRouter>
                <Routes>
                    <Route exact path='/' element={<LandingPage/>}/>
                    <Route exact path='/home' element={<Home/>}/>
                    <Route exact path='/formProducts' element={<AuthenticationGuard component={FormProducts}/>}/>
                    <Route exact path="/detail/:id" element={<ProductsDetail/>}/>
                    <Route exact path="/search" element={<SearchBar/>}/>
                    {/*<Route exact  path="/Notifications" element={</>}/>*/}
                    {/*<Route exact  path="/Myshopping" element={</>}/>*}
        {/*<Route exact  path="/discounts" element={</>}/>*/}
                    {/*<Route exact  path="/record" element={</>}/>*/}
                    <Route exact path="/favorite" element={<FavoriteList/>}/>
                    <Route exact path="/category" element={<CategoryFilter/>}/>
                    <Route exact path="/payment" element={<AuthenticationGuard component={Payment}/>}/>
                    <Route exact path="/edit-product/:id" element={<EditProductPage/>}/>
                    <Route exact path="/admin" element={<Dashboard/>}/>
                </Routes>
            </BrowserRouter>
        </div>


    );
}

export default App;
