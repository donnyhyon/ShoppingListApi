import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    items: []
  };

  async componentDidMount() {
    const response = await fetch('/shoppinglist');
    const body = await response.json();
    this.setState({items: body});
  }
  render() {
    const {items} = this.state;
    return (
        <div className="App">
          <header className="App-header">
            <div className="App-intro">
              <h2>Shopping List Items</h2>
              {items.map(item =>
                  <div key={item.id}>
                    {item.name} {item.quantity}, {item.unit}
                  </div>
              )}
            </div>
          </header>
        </div>
    );
  }
}
export default App;