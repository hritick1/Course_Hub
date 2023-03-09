import React from 'react';
const Nav = () => {
    return <div><nav className="navbar navbar-dark navbar-expand-lg  "style={{backgroundColor:"#820000"}}>
    <div className="container-fluid">
      <a className="navbar-brand" href="#">CourseApp</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="#">ViewCourses</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">AddCourses</a>
          </li>
          <li className="nav-item fixed-right">
            <a className="nav-link" href="#">Login/SignUp</a>
          </li>
        </ul>
      </div>
    </div>
  </nav></div>;
}



export default Nav;