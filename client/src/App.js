import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      	<div className="navbar">
      		<Navbar />
      	</div>
      	<div className="info-display">
      		<InfoDisplay />
      	</div>
      	<div className="info-entry">
      		<InfoEntry />
      	</div>
      </div>
    );
  }
}

export default App;
