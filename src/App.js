import React from 'react';
import './App.css';
import Child from './components/Child';
import Child1 from './components/Child1';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    }
    this.getData = this.getData.bind(this);
  }

  getData(val) {
    this.state.value = val;
    console.log(val);
  }
  
  render() {
    return (
      <Child1 />
      // <Child data={this.getData} />
    );
  }


}


export default App;