import React, { Component } from 'react';
import './App.css';
import Finder from './Tabs/Finder';
import Customizer from './Tabs/Cutomizer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ul className="nav nav-tabs nav-justified" id="myTab" role="tablist">
          <li className="nav-item">
            <a className="nav-link active" id="one-tab" data-toggle="tab" href="#finder" role="tab" aria-controls="home" aria-selected="true">Finder</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id="two-tab" data-toggle="tab" href="#customizer" role="tab" aria-controls="profile" aria-selected="false">Customizer</a>
          </li>
        </ul>
        <div className="tab-content" id="myTabContent">
          <div className="tab-pane fade show active" id="finder" role="tabpanel" aria-labelledby="one-tab">
            <Finder />
          </div>
          <div className="tab-pane fade" id="customizer" role="tabpanel" aria-labelledby="two-tab">
            <Customizer />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
