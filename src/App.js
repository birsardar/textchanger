import Navbar from "./component/Navbar";
import About from "./component/About";
import TextForm from "./component/Textform";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
}  from "react-router-dom";
function App() {
  return (
    <Router>
      {/* passing title using props to navbar */}
    <Navbar title="Text Changer" about="About"/>  
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
