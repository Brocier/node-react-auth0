import React, {Component} from 'react';
import '../App.css';

class NavbarComponent extends Component {
  goTo(route) {
    this
      .props
      .history
      .replace(`/${route}`)
  }

  login() {
    this
      .props
      .auth
      .login();
  }

  logout() {
    this
      .props
      .auth
      .logout();
  }

  render() {
    const {isAuthenticated} = this.props.auth;

    return (
      <div>
        <div>
          <div>
            <button onClick={this
              .goTo
              .bind(this, 'home')}>
              Home
            </button>
            {!isAuthenticated() && (
              <button onClick={this
                .login
                .bind(this)}>
                Log In
              </button>
            )
}
            {isAuthenticated() && (
              <button onClick={this
                .logout
                .bind(this)}>
                Log Out
              </button>
            )
}
          </div>
        </div>
      </div>
    );
  }
}

export default NavbarComponent;