 import Navbar from "./component/Navbar";
import TextForm from "./component/Textform";
function App() {
  return (
    <div>
    <Navbar/>
    <div className="container">
      <TextForm heading="Enter the text analyse"/>
    </div>
    
    </div>
  );
}

export default App;
