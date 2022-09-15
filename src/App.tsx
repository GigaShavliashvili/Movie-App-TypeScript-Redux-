import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Filter from './Components/Filter';
import Header from './Components/Header';
import Home from './Pages/Home';
import Movies from './Pages/Movies';
import TvSeries from './Pages/Tv';
const App:React.FC = () => {





  return (
     <div className="container">
      
 <Router>
  <Header/>
   <Filter/>
<Routes>
  <Route  path="/" element={<Home/>} />
    <Route  path="/movies" element={<Movies/>} />
    <Route  path="/tvseries" element={<TvSeries/>} />
</Routes>
   </Router>
   </div>
  )
}

export default App


