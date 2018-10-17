import React, { Component } from 'react';
import Nav from './component/nav';
import Welcome from './page/welcome';
import Goods from './page/good';
import './App.css';
import { Route } from 'react-router-dom'
const LIST = [{
  text: 'welcome',
  url: '/welcome'
}, {
  text: 'goods',
  url: '/goods'
}];

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="nav_bar">
          <Nav list={LIST} />
        </div>
        <div className="conent">
          <Route path='/welcome' component={Welcome}></Route>
          <Route path='/goods' component={Goods}></Route>
        </div>
      </div>
    );
  }
}

export default App;
