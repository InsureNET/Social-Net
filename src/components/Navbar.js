import React, { Component } from 'react';
import Identicon from 'identicon.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

class Navbar extends Component {

  render() {
    return (
      <>
      <Router>
      <div className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
        <nav>
          <ul>
            <li>
              <Link className="navbar-brand col-sm-3 col-md-2 mr-0" to="/">ISN</Link>
            </li>
            <li>
              <Link className="navbar-brand col-sm-3 col-md-2 mr-0" to="/ico">ICO</Link>
            </li>
            <li>
              <Link className="navbar-brand col-sm-3 col-md-2 mr-0" to="/whitepaper">Whitepaper</Link>
            </li>
            <li>
              <Link className="navbar-brand col-sm-3 col-md-2 mr-0" to="/team">Team</Link>
            </li>
            <li className="nav-item text-nowrap d-none d-sm-none d-sm-block">
              <small className="text-secondary">
                <small id="account">{this.props.account}</small>
              </small>
              {this.props.account
                ? <img
                  className='ml-2'
                  width='30'
                  height='30'
                  src={`data:image/png;base64,${ new Identicon(this.props.account, 30).toString() }`}
                  alt='Avatar'
                />
                : <span></span>
              }
          </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
        < Route path="/:id" children={<Child />} />
        </Switch>
      </div>
    
      {/* <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
        <a
          className="navbar-brand col-sm-3 col-md-2 mr-0"
          href="/"
          rel="noopener noreferrer"
        >
          InsureNET Social Network
        </a>
        <a
          className="navbar"
          href="https://insurenet-ico-site.netlify.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          ICO
        </a>
        <a
          className="navbar"
          href="https://insurenet-whitepaper.netlify.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Whitepaper
        </a>
        <a
          className="navbar"
          href="/team"
          rel="noopener noreferrer"
        >
          Team
        </a>
        <ul className="navbar-nav px-3">
          <li className="nav-item text-nowrap d-none d-sm-none d-sm-block">
            <small className="text-secondary">
              <small id="account">{this.props.account}</small>
            </small>
            {this.props.account
              ? <img
                className='ml-2'
                width='30'
                height='30'
                src={`data:image/png;base64,${ new Identicon(this.props.account, 30).toString() }`}
                alt='Avatar'
              />
              : <span></span>
            }
          </li>
        </ul>
      </nav> */}
      </Router>
      </>
    );
  }
}

function Child() {
  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  let { id } = useParams();

  return (
    <div>

      <h3>path = /{id}</h3>

    </div>
  );
}

export default Navbar;
