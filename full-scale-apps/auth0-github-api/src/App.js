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
        console.log("idtoken " + authResult.idToken);
        this.setProfile(authResult.idToken, profile);
      });
    });
    this.getProfile();
  }

  setProfile(idToken, profile) {
    localStorage.setItem('idToken', idToken);
    localStorage.setItem('profile', JSON.stringify(profile));

    this.setState({
      idToken: localStorage.getItem('idToken'),
      profile: JSON.parse(localStorage.getItem('profile'))
    })
  }

  getProfile() {
    if (!!localStorage.getItem('idToken')) {
      this.setState({
        idToken: localStorage.getItem('itToken'),
        profile: JSON.parse(localStorage.getItem('profile'))
      }, () => {
        console.log(this.state)
      })
    }
  }

  showLock() {
    this.lock.show();
  }

    logout() {
    this.setState({
      idToken: '',
      profile: ''
    }, () => {
      localStorage.removeItem('idToken');
      localStorage.removeItem('profile');
    })
  }

  render() {
    let pageContent;

    if (this.state.idToken) {
      pageContent = <Github />
    } else {
      pageContent = "Click on Login to view GitHub Viewer"
    }

    return (
      <div className="App">
        <Header
          lock={this.lock}
          idToken={this.state.idToken}
          onLogout={this.logout.bind(this)}
          onLogin={this.showLock.bind(this)}
         />
         {pageContent}
        
      </div>
    );
  }
}

export default App;
