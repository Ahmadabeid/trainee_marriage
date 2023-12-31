import React, { useEffect, useState } from 'react'
import './Trainee.css';
import { Link, useParams } from 'react-router-dom'
import Navbar from './Navbar';
import axios from '../server/axiosClient'

import Sidebar from './Sidebar';



const Participant = ( ) => {
  const {userID} = useParams();
  const[participant, setTParticipant]=useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredTrainee, setFilteredTrainee] = useState([]);

  useEffect(()=>{
    loadParticipant();
  }, []);

<<<<<<< HEAD
  const headers={
    Authorization: `Basic QWhtYWQ6MTIz}`,
  }
  
  
  const loadParticipant =async()=>{
    const fetch = await axios.get("participant/getParticipants",{headers});
=======
  
const headers={
  Authorization: `Basic QWhtYWQ6MTIz`,
}
  
  const loadParticipant =async()=>{
    const fetch = await axios.get("http://localhost:8085/participant/getParticipants",{headers});
>>>>>>> 46ff9eb49028ae9dbb4a50897874adf25fe21816
    setTParticipant(fetch.data);
  };

  const deleteTrainee =async(userID)=>{
<<<<<<< HEAD
    await axios.delete(`participant/deleteParticipant/${userID}`,{headers});
=======
    await axios.delete(`http://localhost:8085/participant/deleteParticipant/${userID}`,{headers});
>>>>>>> 46ff9eb49028ae9dbb4a50897874adf25fe21816
    loadParticipant();
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
          <h1>Participant List</h1>
        </div>
        
        <div className="col-sm-6">
          <ol className="breadcrumb float-sm-right">
            <li className="breadcrumb-item"><a href="#">Home</a></li>
            <li className="breadcrumb-item active">Participant</li>
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
          <div className="col-sm-2">
                    <Link to="/participantForm">
                <button type="button" class="btn btn-block btn-outline-success btn-sm " >
                <i class="fa fa-plus-alt"></i> Add Participant</button>
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
          {/* <th id="age">Age</th> */}
          
          {/* <th id="gender">Gender</th> */}
          {/* <th id="n">Password</th> */}
          <th id="us">Phone No</th>
          {/* <th id="us">Qualification</th> */}
          <th id="us">Status</th>
          <th id="f">Actions</th>
        </tr>
      </thead>
      <tbody>
        {participant.map((participant, index) =>
        
      <tr>
          <td key={index}>{index + 1} </td>
          <td>{participant.firstName}</td>
          <td>{participant.middleName}</td>
          <td>{participant.lastName}</td>
          <td>{participant.username}</td>
          <td>{participant.email}</td>
          {/* <td>{participant.password}</td> */}
          <td>{participant.address}</td>
          {/* <td>{participant.age}</td> */}
          {/* <td>{participant.gender}</td> */}
          <td>{participant.phoneNumber}</td>
          {/* <td>{participant.qualification}</td> */}
          <td>{participant.status}</td>
          <td>
           
            <Link to ={`/viewParticipant/${participant.userID}`}class="btn btn-info">
                            <span class="glyphicon glaphycon-check-alt"></span>
                            <i class="fas fa-eye"></i>
                           
                        </Link>&nbsp;
                        <Link to ={`/updateParticipant/${participant.userID}`}class="btn btn-primary">
                            <span className="glyphicon glaphycon-check-alt"></span>
                            <i className="fa fa-edit"></i>
                           
                        </Link>&nbsp;
             <button type="button" class="btn btn-sm-10 btn-danger" onClick={()=> deleteTrainee(participant.userID)}>
                           
                           <i class="fas fa-trash-alt"></i>
                       </button>
           
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

export default Participant
