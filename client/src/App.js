import React, { Component } from 'react';
import './App.css';
import InfoDisplay from './components/InfoDisplay';

let users = [ {
	name: 'Ronnie', id: 1
	}
]

class App extends Component {
  render() {
    return (
      <div className="App">
      	<div className="navbar">
      		{ /* <Navbar /> */ }
      	</div>
      	<div className="info-display">
      		<InfoDisplay users={users} /> 
      	</div>
      	<div className="info-entry">
      		{ /* <InfoEntry /> */ }
      	</div>
      </div>
    );
  }
}

export default App;
