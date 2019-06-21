import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header';
import SpecList from './SpecList/SpecList';
import PriceList from './PriceList/PriceList';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      "selected": {
        Processor: {
            name: '17th Generation Intel Core HB (7 Core with donut spare)',
            cost: 700
          },
        "Operating System": {
            name: 'Ubuntu Linux 16.04',
            cost: 200
          },
        "Video Card":{
            name: 'Toyota Corolla 1.5v',
            cost: 1150.98
          },
        "Display": {
            name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
            cost: 1500
          }
      }
    }
  }

  updateFeature(feature, newValue) {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  }

  render() {
    return (
      <main>
        <div className="App">
          <Header />      
          <SpecList 
          features={this.props.features}
          currentSelections={this.state.selected}
          handleUpdate={(feature, newValue)=>this.updateFeature(feature, newValue)}
          />
          <PriceList currentSelections={this.state.selected}/>
        </div>
      </main>
    );
  }
}

export default App;  
