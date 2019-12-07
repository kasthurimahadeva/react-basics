import React from 'react';
import './App.css';
import Child from './components/Child';
import Child1 from './components/Child1';
import Child2 from './components/Child2';
import Notification from './components/Notification';
import 'react-notifications/lib/notifications.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      input: ''
    }
    this.getData = this.getData.bind(this);
  }

  getData(val) {
    this.setState({text: val});
    console.log(val);
  }
  
  render() {
    return (
      // <Child1 />
      // <Child data={this.getData} />
     <div>
        <Child2 input={this.state.input}
                changeText={this.getData}
                onSubmit={(val) => this.setState({input: 'Hi ' + val + '!'})}
        />
        <p>Parent: </p>
        {this.state.text}
     </div>
    // <Notification />
    );
  }
}


export default App;