import React from 'react';
import { Link } from 'react-router-dom';
const Nav = () => {
    return <div><nav className="navbar navbar-dark navbar-expand-lg  "style={{backgroundColor:"#820000"}}>
    <div className="container-fluid">
      <a className="navbar-brand" to="#">CourseApp</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link" aria-current="page" to="/">ViewCourses</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/addCourse">AddCourses</Link>
          </li>
          <li className="nav-item fixed-right">
            <Link className="nav-link" to="/login">Login/SignUp</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav></div>;
}



export default Nav;