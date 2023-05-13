import Navbar from "./component/Navbar";
import About from "./component/About";
import TextForm from "./component/Textform";
import React,{useState} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
}  from "react-router-dom";
import Alert from "./component/Alert";
function App() {

  //darkmode setup
  const [mode, setmode] = useState('light');
  const toggleMode =()=>{
    if (mode === 'light'){
      setmode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("DarkMode Enabled","success")
    }
    else{
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("DarkMode Disabled","success")
    }
  }
  //Alert message 
  const [alert, setAlert] = useState(null);
    const showAlert =(message, type)=>{
      setAlert({
        msg: message,
        type: type,

      })

  }
  return (
    <Router>
      {/* passing title using props to navbar */}
    <Navbar title="Text Changer" about="About" mode={ mode } toogleMode={toggleMode}/>  
    <Alert alert={alert} />
      <div className="container my-3" >
    <Routes>
          <Route path="/about"  element={<About />} >
          </Route>
          <Route path="/" element={<TextForm heading="Enter the text analyse" showAlert={showAlert} mode={ mode } toogleMode={toggleMode}/>} >  
          </Route>
    </Routes>
      
    </div>
    
    </Router>
  );
}

export default App;
