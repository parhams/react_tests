import React, { useEffect, useState } from 'react';
import TimeList from './TimeList';
import './style.css';
import Hello from './Hello';
import Timer from './Timer';
import { TestContext } from './testContext';
import './style.css';

const App = () => {
  const [title, setTitle] = useState("به پروژه من خوش آمدید")
  const [isLight, setIsLight] = useState(false);
  const [timeArr, setTimeArr] = useState([])

  const handelsetIsLight = () => {
    setIsLight(!isLight)
  }

  useEffect = [() => {
    console.log("useEffect")
    return () => {

    }

  }, isLight]

  return (
    <TestContext.Provider value={{timeArr, setTimeArr}}>
      <div className='main' style={{ background: isLight ? "white" : "black" }}>
        <Hello title={title} />
        <Timer isLight={isLight} handelsetIsLight={handelsetIsLight} />
        <TimeList/>
      </div>
      </TestContext.Provider>  
  )
}

export default App;