import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Redirect,
  withRouter
} from "react-router-dom";  

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isAuthenticated: false };
  }
  authenticator = () => {
    this.setState({ isAuthenticated: this.state.isAuthenticated });
    this.setState.isAuthenticated = !this.setState.isAuthenticated;
  };
  render() {
    if (this.setState.isAuthenticated) {
      return (
        <Content
          authentication={this.authenticator}
        />
      );
    }
    return (
      <div className="container text-center">
        <h1>WELCOME HERE!</h1>
        <button className="btn" onClick={this.authenticator}>
          Click here to Login!
        </button>
      </div>
    );
  }
}
const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};
const Content = props => (
  <Router>
    <div className="container">
      <div className="jumbotron">
        <ul>
          <li>
            <Link
              to="/about"
              style={{ textDecoration: "none", color: "#f5f5f5;" }}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/contactsus"
              style={{ textDecoration: "none", color: "#f5f5f5;" }}
            >
              Contact Us
            </Link>
          </li>
          <li>
            <Link
              to="/messages"
              style={{ textDecoration: "none", color: "#f5f5f5;" }}
            >
              Messages
            </Link>
          </li>
          <br />
        </ul>
        <Route exact path="/about" component={About} />
        <Route path="/contactsus" component={Contact} />
        <Route path="/messages" component={Messages} />
      </div>
      <button className="btn" onClick={props.authentication}>
        Sign Out
      </button>
    </div>
  </Router>
);
const About = () => (
  <div className="child">
    <h2>
      We are India based IT Services company found in August 2009, with the
      vision to provide Excellence in Software Solution. We at Excellence
      Technologies bring innovative ideas and cutting edge technologies into
      business of customers.
    </h2>
  </div>
);
const Messages = () => (
  <div className="child">
    <h2>This is the best platform to work as a Web Developer! Thank You!!!</h2>
  </div>
);
const Contact = () => (
  <div className="child">
    <h2>
      C-86 B, 2nd Floor, C Block, Sector 8<br />
      Noida (U.P) India-201301
      <br />
      Landline 0120- 4278603
      <br />
      contact@excellencetechnologies.in
      <br />
      Follow us on Facebook
    </h2>
  </div>
);
export default App;
