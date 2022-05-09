
import './App.css';
import LatestNews from "./components/LatestNews"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Menu from './components/Menu';
import Newsfeed from './components/Newsfeed';
import Ipl from './components/Ipl';
import LifeStyle from './components/LifeStyle';
import World from './components/World';
import Technology from './components/Technology';
import Photos from './components/Photos';
import Cricket from './components/Cricket';
import Entertainment from './components/Entertainment';
import Business from './components/Business';
import India from './components/India';
import Explainers from './components/Explainers';
import Videos from './components/Videos';
import Education from './components/Education';
import Health from './components/Health';


function App() {
  
  return (
    <div className="App">
       <BrowserRouter>
       <Navbar/>
       <Menu/>
       {/* < Newsfeed /> */}
       <Routes>
       <Route path="/" element={<Newsfeed/>}/>
        <Route path="/latestnews" element={<LatestNews/>}/>
        <Route path="/ipl" element={<Ipl/>}/>
        <Route path="/video" element={<Videos/>}/>
        <Route path="/explainers" element={<Explainers/>}/>
        <Route path="/india" element={<India/>}/>
        <Route path="/business" element={<Business/>}/>
        <Route path="/entertainment" element={<Entertainment/>}/>
        <Route path="/cricket" element={<Cricket/>}/>
        <Route path="/photos" element={<Photos/>}/>
        <Route path="/technology" element={<Technology/>}/>
        <Route path="/world" element={<World/>}/>
        <Route path="/lifestyle" element={<LifeStyle/>}/>
        <Route path="/education" element={<Education/>}/>
        <Route path="/health" element={<Health/>}/>
      </Routes>
      {/* <NewsCard/> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
