import React, { Component } from 'react';
import Users from './components/Users';

const url = "https://dummyjson.com";

class App extends Component {
  constructor(){
    super();
    this.state = {
      users : [],
    }
  }

  componentDidMount(){
    fetch(`${url}/users`)
    .then(res => res.json())
    .then((out) => {
      console.log('USERS = ', out)
      this.setState({
        users : out.users
      })
    })
    .catch((err) => console.log(err.message));
  }

  render() {
    return (
      <div>
        <div className='container shadow-lg p-3 mb-5 bg-body-tertiary rounded'>
          <div className='row'>
            <div className='col'>
              <h1 className='display-5 text-success text-center bg-dark-subtle fw-bolder'>
                PROPS IN CLASS COMPONENT..!
              </h1>
            </div>
          </div>
        </div>
        <Users users = {this.state.users} />
      </div>
    );
  }
}

export default App;