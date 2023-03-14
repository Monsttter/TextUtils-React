import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {

  const [mode, setMode]= useState("light");
  const [alert, setAlert]= useState(null);

  const showAlert= (msg,type)=>{
    setAlert({
      msg: msg,
      type:type
    });
    setTimeout(()=>{
      setAlert(null);
    }, 1500);
  }

  const toggleMode= ()=> {
    if(mode==="light"){
      // console.log(1);
      setMode("dark");
      document.body.style.backgroundColor= "#042743";
      showAlert("Dark mode has been enabled", "success");
      // document.title= "TextUtils - Dark mode";
      // setInterval(()=>{
      //   document.title= "TextUtils is Amazing";
      // }, 1500);
      // setInterval(()=>{
      //   document.title= "Install TextUtils now";
      // }, 3000);
    }
    else{
      setMode("light");
      document.body.style.backgroundColor= "white";
      showAlert("Light mode has been enabled", "success");
      // document.title= "TextUtils - Light mode";
    }
  }

  return (
    <>
      <Router>
        <Navbar title="TextUtils" about="About TextUtils" mode={mode} toggleMode={toggleMode}/>
        <Alert alert = {alert}/>  
        <div className="container my-3">
        {/* /users --> component 1 */}
        {/* /users/home --> component 1 */}
          <Routes>   
            <Route exact path="/about" element={<About mode={mode}/>} />
            <Route exact path="/" element={<TextForm heading="Try TextUtils - Word Counter, Character Counter, Remove extra spaces" mode={mode} showAlert={showAlert}/>} />
          </Routes>
          {/* <TextForm heading="Enter the text below to analyze" mode={mode} showAlert={showAlert}/> */}
           {/* <About /> */}
        </div>
      </Router>
    </>
  );
}

export default App;
