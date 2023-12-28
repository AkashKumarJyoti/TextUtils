import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';

 
function App() {
  const [mode, setMode] = useState('light');
  const [isDark, SetIsDark] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
          setAlert(null);
      }, 1500);
  }

  const toggleMode = (cls)=>{
    console.log(cls)
    if(cls === 'reddish') {
      setMode('reddish');
      document.body.style.backgroundColor = 'rgb(255, 112, 67)'
    }
    else if(cls === 'greenish') {
      setMode('greenish')
      document.body.style.backgroundColor = 'rgb(76, 175, 80)';
    }
    else if(cls === 'yellowish') {
      setMode('yellowish')
      document.body.style.backgroundColor = 'rgb(255, 213, 79)'
    }
    else if(cls === 'light') {
      setMode('dark');
      SetIsDark('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'TextUtils - Dark Mode';
    }
    else {
      setMode('light');
      SetIsDark('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = 'TextUtils - Light Mode';
    }
  }

  return (
    <>
    <BrowserRouter>
    <Navbar title="TextUtils" mode={mode} isDark={isDark} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <div className="container my-3">
    <Routes>
          <Route exact path="/about" element={<About mode={mode}/>}></Route>
          <Route exact path="/" 
          element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>}>  
          </Route>
    </Routes>
    </div>
    </BrowserRouter>
    </> 
  );
}

export default App;