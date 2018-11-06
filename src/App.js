import React, { Component } from 'react';
import Form from './Form';
import './App.css';

class App extends Component {
  state = {
    response: '',
    post: '',
    reponseToPost: ''
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  };

  handleSubmit = async e => {
    e.preventDefault();

    const response = await fetch('/api/world', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ post: this.state.post }),
    });
    const body = await response.text();
    this.setState({ responseToPost: body });
  };

  render() {
    return (
      <div className="App">
        <p>{this.state.response}</p>
          <p>
            <strong>Post to Server:</strong>
          </p>
          <Form />
        <p>{this.state.responseToPost}</p>
      </div>
    );
  }
}

export default App;
