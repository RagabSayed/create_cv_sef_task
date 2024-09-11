import React from "react";
import CvPage from "./Components/CVComponents/CvPage.js";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import MainInformation from "./Components/CVComponents/MainInformation.js";
import About from "./Components/CVComponents/About.js";
import Skills from "./Components/CVComponents/Skills.js";
import Experience from "./Components/CVComponents/Experience.js";
import Education from "./Components/CVComponents/Education.js";
import HonersAndAwards from "./Components/CVComponents/HonersAndAwards.js";
import HobbiesAndInterests from "./Components/CVComponents/HobbiesAndInterests.js";
import Links from "./Components/CVComponents/Links.js";

function App() {
    
    
    return(
      <div>
        
        <Router>
          <CvPage/>
          <Routes>
              <Route path="maininformation" element={<MainInformation/>}/>
              <Route path ="about" element={<About/>}/>
              <Route path ="skills" element={<Skills/>}/>
              <Route path ="experience" element={<Experience/>}/>
              <Route path ="education" element={<Education/>}/>
              <Route path ="honersandawards" element={<HonersAndAwards/>}/>
              <Route path ="hobbiesandinterests" element={<HobbiesAndInterests/>}/>
              <Route path ="links" element={<Links/>}/>
              <Route path="*"    element={  <h2>Page Not Found</h2> } />
          </Routes>
        </Router>
      </div>
  )
}

export default App;
