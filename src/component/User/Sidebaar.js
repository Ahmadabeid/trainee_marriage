import React from 'react'
import { Link } from 'react-router-dom'

const Sidebaar = () => {
  return (
    <>
    <aside className="main-sidebar sidebar-dark-success elevation-4">
  <div className="sidebar">
    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
      <div className="image">
        {/* <img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="" /> */}
        <strong>Trainee Marriage System</strong>
      </div>
      <div className="info">
        <a  className="d-block"></a>
      </div>
    </div>
    <nav className="mt-2">
      <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
        <li className="nav-item menu-open">
          <a  className="nav-link active">
            <i className="nav-icon fas fa-tachometer-alt" />
            <p>
              Dashboard
            </p>
          </a>
        </li>
        
         
          <li className="nav-item">
              <Link to="location">
          <a href="#" className="nav-link">
            <i className="nav-icon far fa-map" />
            <p>
              Location
            </p>
          </a>
          </Link>
          </li>
          <li className="nav-item">
              <Link to="courset">
          <a  className="nav-link">
            <i className="nav-icon far fa-book" />
            <p>
              Course
            </p>
          </a>
          </Link>
          </li>
          <li className="nav-item">
              <Link to="resource">
          <a className="nav-link">
            <i className="nav-icon far fa-cog" />
            <p>
              Resource
            </p>
          </a>
          </Link>
          </li>
          <li className="nav-item">
              <Link to="result">
          <a  className="nav-link">
            <i className="nav-icon far fa-plus-square" />
            <p>
              Result
            </p>
          </a>
          </Link>
          </li>
      
          <li className="nav-item">
              <Link to="timeTable">
          <a  className="nav-link">
            <i className="nav-icon far fa-plus-square" />
            <p>
              Timetable
            </p>
          </a>
          </Link>
          </li>
         
          <li className="nav-item">
              <Link to="queAns">
          <a  className="nav-link">
            <i className="nav-icon far fa-plus-square" />
            <p>
              QueAns
            </p>
          </a>
          </Link>
          </li>
          <li className="nav-item">
              <Link to="profile">
          <a  className="nav-link">
            <i className="nav-icon far fa-user" />
            <p>
              Profile
            </p>
          </a>
          </Link>
          </li>
      </ul>
    </nav>
  </div>
</aside>
  </>
  )
}

export default Sidebaar
