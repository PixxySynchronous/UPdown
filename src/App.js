import logo from './logo.svg';
import './App.css';
import NAVBAR from './COMPONENTS/NAVBAR';
import FORM from './COMPONENTS/FORM';
import ABOUT from './COMPONENTS/ABOUT';
import { use, useState } from 'react';
import ALERT from './COMPONENTS/ALERT';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
const [mode,setMode]= useState('light')
const [Switchname, setswitchname]= useState("ENABLE DARK MODE")
const [alert,setAlert]= useState(null)

const showAlert =(message,type)=>
  {
  setAlert ({
    msg: message,
    type: type

  })
  setTimeout( () => {
    setAlert(null); }
    ,1500)
}
function togglemode() {
  if (mode == 'light') {
    setMode('dark');
    setswitchname("ENABLE LIGHT MODE");
    document.body.style.backgroundColor = "grey";
    showAlert("DARK MODE ENABLED", "success")
  }

  else {
    setMode('light');
    setswitchname("ENABLE DARK MODE");
    document.body.style.backgroundColor = "white";
    showAlert("LIGHT MODE ENABLED", "success")

  }
}



  return (
    
   <>
   <NAVBAR title= "UP&down" mode={mode} togglemode={togglemode} Switchname={Switchname}/>
   <ALERT alert ={alert}/  >
   <div className='container'>
   <FORM heading ="ENTER TEXT HERE"  title =" " mode={mode} showAlert={showAlert}/>
{/*     
      <Routes>
          <Route path="/about" element={<ABOUT mode={mode} />} />
          <Route path="/" element={   <FORM heading ="ENTER TEXT HERE"  title =" " mode={mode} showAlert={showAlert}/>} /> 
      </Routes>
         */}

        
    
  </div>

   
   
   </>
  );
}

export default App;
