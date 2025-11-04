import { render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom/client';

class Hello extends React.Component {
  render() {
    return (<h1>!سلام دوستان من</h1>)
  }
}

class Timer extends React.Component {
  render() {
    return (<h2>it is {new Date().toLocaleTimeString()}</h2>)
  }
}

class App extends React.Component {
  render(){
  return (<div>
    <Hello/>
    <Timer/>
    </div>)
  }
}
const root = ReactDOM.createRoot(document.getElementById("root"))
const tick = ()=> {
 root.render(<App/>)
}

 setInterval(()=>{
   tick();
 }, 1000)
