import React from 'react';

class TaskMessage extends React.Component {
  render() {
    return (
      <div className="tasklogger-taskmessage">
        <div>
          {JSON.stringify(this.props.message)}
        </div>
      </div>
    );
  }
}

class TaskLogger extends React.Component {
  constructor(props) {
    super(props);

    this.handleClose = this.handleClose.bind(this);
    this.handleError = this.handleError.bind(this);
    this.handleMessage = this.handleMessage.bind(this);

    this.state = {
      messages : []
    };
  }

  handleClose(e) {
    console.log('Closing ws');
  }

  handleError(e) {
    console.log('Error');
    console.log(e);
  }

  handleMessage(e) {
    console.log('Received message');
    const message = JSON.parse(e.data);
    console.log(message);
    this.setState({messages: [...this.state.messages, message]});
  }

  componentDidMount() {
    this.ws = new WebSocket(window.location.origin.replace('http', 'ws'));
    this.ws.onmessage = e => this.handleMessage(e);
    this.ws.onerror = e => this.handleError(e);
    this.ws.onclose = e => this.handleClose(e);
  }

  componentWillUnmount() {
    this.ws.close();
  }

  render() {
    var messages;
    if (this.state.messages.length > 0) {
      messages = this.state.messages.map( (m) => <li><TaskMessage message={m}/></li> );
    } else {
      messages = [];
    }
    
    return (
      <div>
       Messages:
        <ul>
          {messages}
        </ul>
      </div>
    );
  }

}

export default TaskLogger;
