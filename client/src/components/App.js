import React, {Component} from 'react';
import {Route, Router, Redirect} from 'react-router-dom';
import NavbarComponent from './NavbarComponent';
import Home from './Home';
import ProfilePage from './ProfilePage'
import CallbackComponent from './CallbackComponent';
import Auth from '../Auth/Auth';
import history from '../Auth/history';

const auth = new Auth();

const handleAuthentication = ({location}) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
}

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div>
          <Route path="/" render={(props) => <NavbarComponent auth={auth} {...props}/>}/>
          <Route path="/home" render={(props) => <Home auth={auth} {...props}/>}/>
          <Route
            path="/callback"
            render={(props) => {
            handleAuthentication(props);
            return <CallbackComponent {...props}/>
          }}/>
          <Route
            path="/profile"
            render={(props) => (!auth.isAuthenticated()
            ? (<Redirect to="/home"/>)
            : (<ProfilePage auth={auth} {...props}/>))}/>
        </div>
      </Router>
    );
  }
}

export default App;