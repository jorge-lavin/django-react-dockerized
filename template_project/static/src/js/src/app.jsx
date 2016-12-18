import React from 'react';

require('../../css/style.scss');

const App = () => {
  return (
    <div className="container-fluid">
    <div className="row">
    <nav className="navbar navbar-full navbar-light bg-faded">
  <a className="navbar-brand" href="#">Navbar</a>
  <ul className="nav navbar-nav">
    <li className="nav-item active">
      <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#">Link</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#">Link</a>
    </li>
    <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle" href="http://example.com" id="supportedContentDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
      <div className="dropdown-menu" aria-labelledby="supportedContentDropdown">
        <a className="dropdown-item" href="#">Action</a>
        <a className="dropdown-item" href="#">Another action</a>
        <a className="dropdown-item" href="#">Something else here</a>
      </div>
    </li>
  </ul>
  <form className="form-inline float-xs-right">
    <input className="form-control" type="text" placeholder="Search"/>
    <button className="btn btn-outline-success" type="submit">Search</button>
  </form>
</nav>
</div>
    <div className="row">
    <div className="login-container">
      <form>
        <fieldset className="form-group">
          <label htmlFor="first_name">User</label>
          <input type="text" className="form-control" id="user" name="user" />
        </fieldset>
        <fieldset className="form-group">
          <label htmlFor="last_name">Password</label>
          <input type="password" className="form-control" id="password" name="password" />
        </fieldset>
        <div className="text-center">
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
    </div>
    </div>
  );
};

export default App;
