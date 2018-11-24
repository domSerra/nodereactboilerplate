import React, {Component} from 'react';

import ReactImg from '../../public/images/react.png';

import './app.scss';

export default class App extends Component{
  state = {username: null};

  componentDidMount() {
    fetch('/api/getUsername')
      .then(res => res.json())
      .then(user => this.setState({username: user.username}))
  }

  render() {
    const {username} = this.state;
    console.log(username)

    return (
      <div>
      {username ? <h1>{`Hello ${username}, Welcome to R3aCt1VE ;}`}</h1> : <h1>'Loading... Please Wait :)'</h1>}
      <img src={ReactImg} alt="react" />
      </div>
    )
  }
}
