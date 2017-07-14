import React, { Component } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Github from './Github';
import Header from './Components/Header';
import Auth0Lock from 'auth0-lock'


class App extends Component {

  constructor(props){
    super(props);
  
    this.state = {
      idToken: '',
      profile: {}
    };
  }

  static defaultProps = {
    clientID: 'yJuUjTp7TKKLE2IKN54E0yMGIDIuKJPX',
    domain: 'sergioviniciuss.auth0.com'
  }

  componentWillMount() {
    this.lock = new Auth0Lock(this.props.clientID, this.props.domain);
    this.lock.on('authenticated', (authResult) => {
      // console.log(authResult);
      this.lock.getProfile(authResult.idToken, (error, profile) => {
        if (error) {
          console.log(error);
          return;
        }
        // console.log(profile);
        this.setProfile(authResult.idToken, profile);
      });
    });
  }

  setProfile(idToken, profile) {
    localStorage.setItem('idToken', idToken);
    localStorage.setItem('profile', JSON.stringify(profile));

    this.setState({
      idToken: localStorage.getItem('itToken'),
      profile: JSON.parse(localStorage.getItem('profile'))
    })
  }
  showLock() {
    this.lock.show();
  }

  render() {
    return (
      <div className="App">
        <Header
          onLogin={this.showLock.bind(this)}
         />
        <Github />
      </div>
    );
  }
}

export default App;
