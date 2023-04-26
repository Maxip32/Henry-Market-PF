import './App.css';
import {Routes, Route,useLocation} from "react-router-dom"
import LandingPage from './components/LandingPage/LandingPage';
import Home from "./components/home/Home";
import Nav from "./components/nav/Nav";
function App() {
      const location = useLocation()

  return (
    
    <div className='App'>
          <div className="nav"> {location.pathname !== '/' && <Nav/>}</div>
      <Routes>
        <Route exact path='/' element={<LandingPage/>} />
        <Route exact path='/home' element={<Home/>} />

      </Routes>
      
      
    </div>
    
    

  );
}

export default App;
