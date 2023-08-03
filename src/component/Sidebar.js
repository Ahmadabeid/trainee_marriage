import React from 'react'
import './Sidebar.css'
import { Link, NavLink } from 'react-router-dom'

const Sidebar = ({ role }) => {
  return (
    <>
    <aside className="main-sidebar sidebar-dark-success elevation-4">
    <div className="sidebar">
      <div className="user-panel mt-3 pb-3 mb-3 d-flex">
        <div className="ima">
          {/* <img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="" /> */}
          
        </div>
        <div className="info">
          <NavLink href='#' className="d-block" id="block"><strong>{role} Trainee Marriage System</strong> </NavLink>
        </div>
      </div>
      {/* <p></p> */}
      <nav className="mt-2">
{role === 'ROLE_ADMIN' && (
                // Show additional menu items for admin user
        <>
        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          <li className="nav-item menu-open">
            <Link to={'#'}  className="nav-link active">
              <i className="nav-icon fas fa-tachometer-alt" />
              <p>
                Dashboard
              </p>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/trainee" className="nav-link">
            <i className="nav-icon fas fa-user-graduate" />

              <p>
                Trainee Information
              </p>
            
            </Link>
            </li>
            <li className="nav-item">
                <Link to="/participant" className="nav-link">
              <i className="nav-icon fas fa-chalkboard-teacher" />
              <p>
                Participant Information
              </p>
            
            </Link>
            </li>
            <li className="nav-item">
                <Link to="/courset" className="nav-link">
            {/* <i className="nav-icon fas fa-book" /> */}
            {/* <i className="nav-icon fas fa-book-open" /> */}
            <i className="nav-icon fas fa-chalkboard" />


              <i class="bi bi-book"></i>
              <p>
                Course
              </p>
            
            </Link>
            </li>
            <li className="nav-item">
                <Link to="/resource" className="nav-link">
              <i className="nav-icon far fa-folder" />
              <p>
                Resource
              </p>
            
            </Link>
            </li>
       
        
            <li className="nav-item">
                <Link to="/timeTable" className="nav-link">
            {/* <i className="nav-icon far fa-calendar-alt" /> */}
            {/* <i className="nav-icon far fa-clock" /> */}
            <i className="nav-icon far fa-calendar-check" />



              <p>
                Timetable
              </p>
            
            </Link>
            </li>
            <li className="nav-item">
                <Link to="/document" className="nav-link">
              <i className="nav-icon far fa-file-alt" />
              <p>
                Document
              </p>
            
            </Link>
            </li>
            {/* <li className="nav-item">
                <Link to="/queAns">
            <a  className="nav-link">
              <i className="nav-icon far fa-comments" />
              <p>
                QueAns
              </p>
            </a>
            </Link>
            </li> */}
        
            <li className="nav-item">
                <Link to="/profile" className="nav-link">
              <i className="nav-icon far fa-user" />
              <p>
                Profile
              </p>
            
            </Link>
            </li>
                    
        </ul>
        </>
)
};
{role === 'ROLE_PARTICIPANT_LECTURER' && (
                // Show additional menu items for admin user
        <>
        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          <li className="nav-item menu-open">
            <Link  className="nav-link active">
              <i className="nav-icon fas fa-tachometer-alt" />
              <p>
                Dashboard
              </p>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/trainee" className="nav-link">
            <i className="nav-icon fas fa-user-graduate" />

              <p>
                Trainee Information
              </p>
              className="nav-link"
            </Link>
            </li>
       
            <li className="nav-item">
                <Link to="/courset" className="nav-link">
            {/* <i className="nav-icon fas fa-book" /> */}
            {/* <i className="nav-icon fas fa-book-open" /> */}
            <i className="nav-icon fas fa-chalkboard" />


              <i class="bi bi-book"></i>
              <p>
                Course
              </p>
            
            </Link>
            </li>
            <li className="nav-item">
                <Link to="/resource" className="nav-link">
              <i className="nav-icon far fa-folder" />
              <p>
                Resource
              </p>
            
            </Link>
            </li>
       
        
            <li className="nav-item">
                <Link to="/timeTable" className="nav-link">
            {/* <i className="nav-icon far fa-calendar-alt" /> */}
            {/* <i className="nav-icon far fa-clock" /> */}
            <i className="nav-icon far fa-calendar-check" />



              <p>
                Timetable
              </p>
            
            </Link>
            </li>
          
            {/* <li className="nav-item">
                <Link to="/queAns">
            <a  className="nav-link">
              <i className="nav-icon far fa-comments" />
              <p>
                QueAns
              </p>
            </a>
            </Link>
            </li> */}
        
            {/* <li className="nav-item">
                <Link to="/profile">
            <a  className="nav-link">
              <i className="nav-icon far fa-user" />
              <p>
                Profile
              </p>
            </a>
            </Link>
            </li> */}
                    
        </ul>
        </>
)
};
      </nav>
    </div>
  </aside>
    </>
  )
}

export default Sidebar
