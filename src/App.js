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
  const [mode, setmode] = useState('light');
  const toggleMode =()=>{
    if (mode === 'light'){
      setmode('dark');
      document.body.style.backgroundColor = 'grey';
    }
    else{
      setmode('light');
      document.body.style.backgroundColor = 'white';
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
          <Route path="/" element={<TextForm heading="Enter the text analyse" mode={ mode } toogleMode={toggleMode}/>} >  
          </Route>
    </Routes>
      
    </div>
    
    </Router>
  );
}

export default App;
