import React from 'react';

import './style.css';

import Hello from './Hello';
import Timer from './Timer';
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            title : "سلام بر دوستان خوبم"
        }
    }
    render(){
    return (<div className='main'>
      <Hello title={this.state.title}/>
      <Timer/>
      </div>)
    }
  }

  export default App;