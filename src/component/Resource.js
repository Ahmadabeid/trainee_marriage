import React, { useEffect, useState } from 'react'
import './Resource.css'
import { Link, useParams } from 'react-router-dom'
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import axios from 'axios'

const Resource = () => {
  const {resId} = useParams();
  const[resource, setResource]=useState([]);

  useEffect(()=>{
    loadResource();
  }, []);

  
const headers={
  Authorization: 'Basic QWhtYWQ6MTIz',
}

  const loadResource =async()=>{
    const fetch = await axios.get("http://localhost:8085/resource/getResource",{headers});
    setResource(fetch.data);
  };

  const deleteResource =async(resId)=>{
    await axios.delete(`http://localhost:8085/resource/delete/${resId}`,{headers});
    loadResource();
  };
  

  return (
    <>
    <Navbar/>
    <Sidebar/>
    <div class="content-wrapper">
    <section className="content-header">
    <div className="container-fluid">
      <div className="row mb-2">
        <div className="col-sm-6"> 
          <h1>Resource List</h1>
        </div>
        
        <div className="col-sm-6">
          <ol className="breadcrumb float-sm-right">
            <li className="breadcrumb-item"><a href="#">Home</a></li>
            <li className="breadcrumb-item active">Resource</li>
          </ol>
        </div>
      </div>
    </div>
  </section>
  <section class="content">
  <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="card">
          <div className="card-header">
          <div className="col-sm-2">
                    <Link to="/resourceForm">
                <button type="button" class="btn btn-block btn-outline-success btn-sm " >
                <i class="fa fa-plus-alt"></i> Add Resource</button>
                </Link>
                </div>&nbsp;&nbsp;
                <div className="card-body">
    <div className="table-container">
    <table class="table table-striped table-responsive">
      <thead>
        <tr>
          <th>Resource ID</th>
          <th>Resource Type</th>
          <th>Resource Name</th>
          <th>Resource Content</th>
          <th>Resource File</th>
          <th>Resource Date</th>
          <th><center>Action </center></th>
        </tr>
      </thead>
      <tbody>
        {resource.map((resource, index)=>(

        
        <tr>
          <td key={index}>{index + 1}</td>
          <td>{resource.resType}</td>
          <td>{resource.resName}</td>
          <td>{resource.resContent}</td>
          <td>{resource.resFile}</td>
          <td>{resource.resDate}</td>
          <td>
            <div className='d-flex'>
              <div>
                      
          <Link to ={`/viewResource/${resource.resId}`}class="btn btn-info">
                            <span className="glyphicon glaphycon-check-alt"></span>
                            <i className="fas fa-eye"></i>
                           
                        </Link>
                        </div> &nbsp;&nbsp;
                        <div>
                         
                        <Link to ={`/updateResource/${resource.resId}`}class="btn btn-primary">
                            <span class="glyphicon glaphycon-check-alt"></span>
                            <i class="fa fa-edit"></i>
                           
                        </Link>
                        </div>
                        &nbsp;&nbsp;
                        <div>
                         
                        {/* <button type="button" class="btn btn-danger btn-sm " onClick={()=> deleteResource(resource.resId)}>
                           
                           <i class="fas fa-trash-alt"></i>
                       </button> */}
                      
                       {/* <button type="button" className="btn btn-danger btn-sm"> */}

                       <button type="button" className=" trash btn btn-danger col-sm-2" onClick={()=> deleteResource(resource.resId)}>
                        <span className="glyphicon glaphycon-trash-alt"></span>
                            <i class="fas fa-trash-alt"></i>
                        </button>
                        
                      {/* </button> */}
                       </div>
                       </div>
                      </td>
        </tr>
        ))
        }
      </tbody>
    </table>
         </div>
         </div>
    </div>
          
        </div>
      </div>
    </div>
    
      </div>
      </section>
    </div>
    
    
    </>
  

  )
}

export default Resource
