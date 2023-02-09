import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Single from "./pages/Single";
import Navigation from "./components/Navigation";

function App(){
  return(
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/:id" element={<Single />}/>
      </Routes>
    </Router>
  )
}
export default App;