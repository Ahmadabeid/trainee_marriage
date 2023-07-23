import React from 'react'
import './Sidebar.css'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <>
      <aside className="main-sidebar sidebar-dark-success elevation-4">
    <div className="sidebar">
      <div className="user-panel mt-3 pb-3 mb-3 d-flex">
        <div className="ima">
          {/* <img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="" /> */}
          
        </div>
        <div className="info">
          <a  className="d-block" id="bl  ock"><strong>Trainee Marriage System</strong> </a>
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
            <Link to="/trainee">
            <a  className="nav-link">
            <i className="nav-icon fas fa-user-graduate" />

              <p>
                Trainee Information
              </p>
            </a>
            </Link>
            </li>
            <li className="nav-item">
                <Link to="/participant">
            <a className="nav-link">
              <i className="nav-icon fas fa-chalkboard-teacher" />
              <p>
                Participant Information
              </p>
            </a>
            </Link>
            </li>
            <li className="nav-item">
                <Link to="/courset">
            <a  className="nav-link">
            {/* <i className="nav-icon fas fa-book" /> */}
            {/* <i className="nav-icon fas fa-book-open" /> */}
            <i className="nav-icon fas fa-chalkboard" />


              <i class="bi bi-book"></i>
              <p>
                Course
              </p>
            </a>
            </Link>
            </li>
            <li className="nav-item">
                <Link to="/resource">
            <a className="nav-link">
              <i className="nav-icon far fa-folder" />
              <p>
                Resource
              </p>
            </a>
            </Link>
            </li>
       
        
            <li className="nav-item">
                <Link to="/timeTable">
            <a  className="nav-link">
            {/* <i className="nav-icon far fa-calendar-alt" /> */}
            {/* <i className="nav-icon far fa-clock" /> */}
            <i className="nav-icon far fa-calendar-check" />



              <p>
                Timetable
              </p>
            </a>
            </Link>
            </li>
            <li className="nav-item">
                <Link to="/document">
            <a  className="nav-link">
              <i className="nav-icon far fa-file-alt" />
              <p>
                Document
              </p>
            </a>
            </Link>
            </li>
            <li className="nav-item">
                <Link to="/queAns">
            <a  className="nav-link">
              <i className="nav-icon far fa-comments" />
              <p>
                QueAns
              </p>
            </a>
            </Link>
            </li>
        
            <li className="nav-item">
                <Link to="/profile">
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

export default Sidebar
