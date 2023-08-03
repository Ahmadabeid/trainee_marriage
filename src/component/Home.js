import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { useLocation } from 'react-router-dom';
const Home = () => {
  const location = useLocation();
  const role = location.state ? location.state.role : null;

  return (
    <>
    <div className="wrapper">
      <Navbar/> 
      <Sidebar role={role} />
  <div className="content-wrapper">
    <div className="content-header">
      <div className="container-fluid">
        <div className="row mb-2">
          <div className="col-sm-6">
            <h1 className="m-0">Dashboard</h1>
          </div>
          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
              <li className="breadcrumb-item"><a>Home</a></li>
            </ol>
          </div>
        </div>
      </div>
    </div>
    <section className="content">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3 col-6">
            <div className="small-box bg-success">
              <div className="inner">
                <h3>150</h3>
                <p>New Orders</p>
              </div>
              <div className="icon">
                <i className="ion ion-bag" />
              </div>
            </div>
          </div>
        
          <div className="col-lg-3 col-6">
         
            <div className="small-box bg-success">
              <div className="inner">
                <h3>53<sup style={{fontSize: 20}}>%</sup></h3>
                <p>Bounce Rate</p>
              </div>
              <div className="icon">
                <i className="ion ion-stats-bars" />
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-6">
            <div className="small-box bg-success">
              <div className="inner">
                <h3>44</h3>
                <p>User Registrations</p>
              </div>
              <div className="icon">
                <i className="ion ion-person-add" />
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-6">
            <div className="small-box bg-success">
              <div className="inner">
                <h3>65</h3>
                <p>Unique Visitors</p>
              </div>
              <div className="icon">
                <i className="ion ion-pie-graph" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  <center>
  <footer className="main-footer">
    
    <strong> @Copyright All rights reserved..</strong>
    
  
  </footer>
  </center>
  <aside className="control-sidebar control-sidebar-dark">
  </aside>
</div>
</>
  )
}

export default Home
