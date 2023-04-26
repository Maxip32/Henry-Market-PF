import './App.css';
import {Routes, Route} from "react-router-dom"
import LandingPage from './components/LandingPage/LandingPage';
//import Home from "./components/home/Home";
function App() {
  return (
    
    <div className='App'>
      <Routes>
        <Route exact path='/' element={<LandingPage/>} />
        {/* <Route exact path='/home' element={<Home/>} /> */}

      </Routes>
      
      
    </div>
    
    
  );
}

export default App;
