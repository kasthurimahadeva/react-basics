import React from 'react';

class Child extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        count: 0
    }
    this.increment = this.increment.bind(this);
    this.sendData = this.sendData.bind(this);
  }

  increment = () => {
      this.setState({count: this.state.count + 1});
  }

  sendData() {
      this.props.data(this.state.count);
  }
  
  render() {
    return (
      <div>
        {this.state.count}
        <button onClick={this.increment}>
            Increment
        </button>
        <button onClick={this.sendData}>
            Click
        </button>
      </div>
    );
  }


}


export default Child;