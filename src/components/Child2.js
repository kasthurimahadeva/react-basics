import React from 'react';
import '../App.css';
import Notification from './Notification';
import {createNotification} from './Notification';
import {NotificationContainer, NotificationManager} from 'react-notifications';


class Child2 extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      text: '',
      isClicked: false
    };
  }

  onChangeText = (event) => {
    this.setState({text: event.target.value});
    this.props.changeText(event.target.value);
  };


  render() {
    return (
      <div>
        <p>Child: </p>
        <input type="text"
               onChange={this.onChangeText.bind(this)}
        />
        <button onClick={() => {
          this.props.onSubmit(this.state.text);
         this.setState({isClicked: true});
         {createNotification('success', this.props.input)};
          }
        }>Click</button>
        <NotificationContainer />
        {/* {this.state.isClicked && (<Notification message={this.props.input}
        type='success' />)} */}
      </div>
      
    );
  }
}

export default Child2;
