import React from 'react';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
 
// class Notification extends React.Component {

//     constructor(props) {
//         super(props)
//     }

export const createNotification = (type, message) => {
    switch (type) {
        case 'info':
        return NotificationManager.info('Info message');
        case 'success':
        return NotificationManager.success(message, 'Welcome');
        case 'warning':
        return NotificationManager.warning('Warning message', 'Close after 3000ms', 3000);
        case 'error':
        return NotificationManager.error('Error message', 'Click me!', 5000, () => {
            alert('callback');
        });
    }
};
 
//   render() {
//     return (
//       <div>
//           <button className='btn btn-primary'
//           onClick={this.createNotification(this.props.type, this.props.message)}>Click me!
//         </button>
//         <NotificationContainer/>
//       </div>
//     );
// //   }
// }
 
// export default Notification;