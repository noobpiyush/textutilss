
import { useState } from 'react';
import './App.css';

import NavBar from './components/NavBar';
import TextForms from './components/TextForms';
import Alert from './components/Alert';
// import About from './components/About';
// import {  
//  BrowserRouter, Routes, Route 
// } from "react-router-dom";

function App() {
  const [buttonText, setbuttonText] = useState('Enable dark Mode');
  const [mode, setMode] = useState('light'); //whether dark mode is enabled
  const [alert, setAlert] = useState(null);

  const showAlert = (message , type)=>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  
  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor='white';
      setbuttonText('Enable dark Mode');
      showAlert('Light Mode has been enabled',"success");
      document.title = 'TextUtils - Light Mode'
     
    }
    else {
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      setbuttonText('Enable light Mode')
      showAlert('Dark Mode has been enabled',"success");
      document.title = 'TextUtils - Dark Mode'
    }
  }

  return (
    <>
    <>
    
      <div className="container my-3">
       <NavBar tittle="TextUtils" aboutText="About" mode={mode} buttonText={buttonText} toggleMode={toggleMode} />
         <Alert alert={alert}/>

        <TextForms showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
        </div>
      </>
    </>
  );
}

export default App;
