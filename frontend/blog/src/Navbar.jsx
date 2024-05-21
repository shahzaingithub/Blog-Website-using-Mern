import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ isAuthenticated, logout }) {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/Blog">Navbar</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {/* <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li> */}
              <li className="nav-item">
                <Link className="nav-link" to="/Blog">Blog</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/AddBlog">Add Blog</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/NewsBlog">News Blog</Link>
              </li>
              {isAuthenticated ? (
                <li className="nav-item">
                  <button className="nav-link btn" onClick={logout}>Logout</button>
                </li>
              ) : (
                <li className="nav-item">
                  <Link className="nav-link" to="/Login">Login</Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
