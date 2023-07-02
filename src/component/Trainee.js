import React, { useEffect, useState } from 'react'
import './Trainee.css';
import { Link, useParams } from 'react-router-dom'
import Navbar from './Navbar';
import axios from 'axios'
import Sidebar from './Sidebar';




  




const Trainee = ( ) => {
  const {userID} = useParams();
  const[trainee, setTrainee]=useState([]);

  useEffect(()=>{
    loadTrainee();
  }, []);
  const loadTrainee =async()=>{
    const fetch = await axios.get("http://localhost:8080/Trainee/getTrainees");
    setTrainee(fetch.data);
  };

  const deleteTrainee =async(userID)=>{
    await axios.delete(`http://localhost:8080/Trainee/delete/${userID}`);
    loadTrainee();
  };

  return (
    <>
    <Navbar/>
    <Sidebar/>
    <div class="content-wrapper" >
    <section className="content-header" >
    <div className="container-fluid">
      <div className="row mb-1">
        <div className="col-sm-6"> 
          <h1>Trainee List</h1>
        </div>
        
        <div className="col-sm-6">
          <ol className="breadcrumb float-sm-right">
            <li className="breadcrumb-item"><a href="#">Home</a></li>
            <li className="breadcrumb-item active">Trainee</li>
          </ol>
        </div>
      </div>
    </div>
  </section>
  <section class="content " id="f">
  <div className="container-fluid" id="f">
      <div className="row">
        <div className="col-20">
          <div className="card">
          <div className="card-header">
          <div className="col-sm-1">
                    <Link to="/traineeForm">
                <button type="button" class="btn btn-block btn-outline-success btn-sm " >
                <i class="fa fa-plus-alt"></i> Add Trainee</button>
                </Link>
                </div>&nbsp;
    <div className="table-container col-sm">
    <table className='table col-sm-14'>
    <thead>
        <tr>
          <th id="age">ID</th>
          <th id="n">Firstname</th>
          <th id="n">MiddleName</th>
          <th id="n">LastName</th>
          <th id="us">Username</th>
          <th id="f">Email</th>
          <th id="n">Address</th>
          <th id="age">Age</th>
          
          <th id="gender">Gender</th>
          <th id="n">Password</th>
          <th id="us">Phone No</th>
          <th id="us">Reg No </th>
          <th id="f">Actions</th>
        </tr>
      </thead>
      <tbody>
        {trainee.map((trainee, index) =>
        
      <tr>
          <td key={index}>{index + 1} </td>
          <td>{trainee.firstName}</td>
          <td>{trainee.middleName}</td>
          <td>{trainee.lastName}</td>
          <td>{trainee.username}</td>
          <td>{trainee.email}</td>
          <td>{trainee.password}</td>
          <td>{trainee.address}</td>
          <td>{trainee.age}</td>
          <td>{trainee.gender}</td>
          <td>{trainee.phoneNumber}</td>
          <td>{trainee.regNo}</td>
          <td>
           
          <center>&nbsp;  <Link to ={`/viewTrainee/${trainee.userID}`}class="btn btn-info">
                            <span class="glyphicon glaphycon-check-alt"></span>
                            <i class="fas fa-eye"></i>
                           
                        </Link>
                        <Link to ={`/updateTrainee/${trainee.userID}`}class="btn btn-primary">
                            <span className="glyphicon glaphycon-check-alt"></span>
                            <i className="fa fa-edit"></i>
                           
                        </Link>
             <button type="button" class="btn btn-sm-10 btn-danger" onClick={()=> deleteTrainee(trainee.userID)}>
                           
                           <i class="fas fa-trash-alt"></i>
                       </button>
            </center>
          </td>
        </tr>
        )
}
        
      </tbody>
    </table>
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


export default Trainee
