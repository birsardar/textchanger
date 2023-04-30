import Navbar from "./component/Navbar";
import About from "./component/About";
import TextForm from "./component/Textform";
import React,{useState} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
}  from "react-router-dom";
function App() {
  const [mode, setmode] = useState('mode');
  const toggleMode =()=>{
    if (mode === 'dark'){
      setmode('light')
    }
    else{
      setmode('dark')
    }

  }
  return (
    <Router>
      {/* passing title using props to navbar */}
    <Navbar title="Text Changer" about="About" mode={ mode } toogleMode={toggleMode}/>  
      <div className="container my-3" >
    <Routes>
          <Route path="/about"  element={<About />} >
          </Route>
          <Route path="/" element={<TextForm heading="Enter the text analyse"/>}>  
          </Route>
    </Routes>
      
    </div>
    
    </Router>
  );
}

export default App;
