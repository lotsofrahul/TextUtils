// import logo from './logo.svg';
import "./App.css";
import Alert from "./components/Alert";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
// import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");
  const [bgMode, setbgMode] = useState("light");
  const [textMode, settextMode] = useState("dark");
  const [diffDarkMode, setdiffDarkMode] = useState("1");

  const removeBodyClasses = ()=>{
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-muted');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-secondary');
  }

  const toggleMode = (cls) => {
    removeBodyClasses();
    document.body.classList.add('bg-'+cls);
    if (mode === "light") {
      setmode("dark");
      setbgMode("dark");
      settextMode("light");
      document.body.style.backgroundColor = "rgb(30, 33, 30)";
      showAlert("dark mode enabled", "success");
      // document.title = "TextUtils-DarkMode";
    } else {
      setmode("light");
      setbgMode("light");
      settextMode("dark");
      document.body.style.backgroundColor = "white";
      showAlert("light mode enabled", "success");
      // document.title = "TextUtils-LightMode";
    }
  };

  // for different colors in darkmode
  const toggleMode2 = () => {
    if (mode === "light") {
      setmode("dark");
      setbgMode("dark");
      settextMode("light");
      document.body.style.backgroundColor = "rgb(30, 33, 30)";
      showAlert("dark mode enabled", "success");
      setdiffDarkMode("0");
      // document.title = "TextUtils-DarkMode";

      //not a good thing to do this

      // setInterval(() => {
      //   document.title = 'Update TextUtils';
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'Virus in TextUtils';
      // }, 1500);
    } else {
      setmode("light");
      setbgMode("light");
      settextMode("dark");
      document.body.style.backgroundColor = "white";
      showAlert("light mode enabled", "success");
      setdiffDarkMode("1");
      // document.title = "TextUtils-LightMode";
    }
  };

  const [alert, setalert] = useState(null);

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 1500);
  };
  return (
    <>
      <Router>
        <Navbar
          title="Whatsapp"
          first_variable="Chats"
          mode={mode}
          bgMode={bgMode}
          toggleMode={toggleMode}
          toggleMode2={toggleMode2}
          textMode={textMode}
        />
        {/* <Navbar first_variable="Chats"/> */}
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route path='/about' element={ <About mode={mode}/>}/>
            <Route path='/' element={ <TextForm
                showAlert={showAlert}
                heading="Paragraph Here"
                mode={mode}
                diffDarkMode={diffDarkMode}
              />}/>
          </Routes>
        </div>
        {/* <About /> */}
      </Router>
    </>
  );
}

export default App;
