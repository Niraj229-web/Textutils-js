import React, { useState } from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Nabar from './Component/Nabar';
import Home from './Component/Home';
import About from './Component/About';
import Alert from './Component/Alert';
import './App.css';


function App() {

  const[mode,setMode]=useState('light');

  const togglemode = () => {
    if(mode === 'light'){
    setMode('dark')
    document.body.style.backgroundColor = '#042743';
    showAlert('DarkMode Enable','Success')
    document.title = 'Textutil - DarkMode';
    }else{
    setMode('light')
    document.body.style.backgroundColor = 'white';
    showAlert('LightMode Enable','Success')
    document.title = 'Textutil - LightMode';
    }}

  const[alert,setAlert]=useState(null);

  const showAlert = (message,type) => {
        setAlert({
          msg:message,
          type:type
  })
   setTimeout(()=>{
    setAlert(null);
   },1500)
  }

  return ( 
    <>
    <Router>
    <Nabar title='Textutils' mode={mode} togglemode={togglemode}/>
    <Alert alert={alert}/>
    <div className='container'></div>
      <Routes>
        <Route path='/' element={<Home heading='Enter the text below' mode={mode} showAlert={showAlert}/>}/>
        <Route path='/about' element={<About mode={mode}/>}/>
      </Routes>
    </Router>
  </>
  );
} 

export default App;
