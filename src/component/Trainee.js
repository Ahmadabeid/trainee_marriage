import React, { useEffect, useState } from 'react';
<<<<<<< HEAD
import './Trainee.css';
import { Link, useParams } from 'react-router-dom';
import Navbar from './Navbar';
import axios from '../server/axiosClient'

import Sidebar from './Sidebar';

const Trainee = () => {
  const { userID } = useParams();
  const [trainee, setTrainee] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredTrainee, setFilteredTrainee] = useState([]);

  useEffect(() => {
    loadTrainee();
  }, []);
=======

import { Link, useParams } from 'react-router-dom';
import Navbar from './Navbar';
import axios from 'axios';
import Sidebar from './Sidebar';

const Trainee = () => {
  const { userID } = useParams();
  const [trainee, setTrainee] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  // const [filteredTrainee, setFilteredTrainee] = useState([]);

  useEffect(() => {
    loadTrainee();
  }, []);

  useEffect(() => {
    filterTrainee();
  }, [searchQuery, trainee]);
>>>>>>> 46ff9eb49028ae9dbb4a50897874adf25fe21816

  useEffect(() => {
    filterTrainee();
  }, [searchQuery, trainee]);
  
const headers={
  Authorization: `Basic QWhtYWQ6MTIz`,
}

  const loadTrainee = async () => {
<<<<<<< HEAD
    const response = await axios.get("trainee/getTrainees");
=======
    const response = await axios.get("http://localhost:8085/trainee/getTrainees",{headers});
>>>>>>> 46ff9eb49028ae9dbb4a50897874adf25fe21816
    setTrainee(response.data);
  };

  const deleteTrainee = async (userID) => {
<<<<<<< HEAD
    await axios.delete(`trainee/delete/${userID}`);
    loadTrainee();
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filterTrainee = () => {
    const filtered = trainee.filter((item) => {
      // Customize the filtering logic based on your data structure
      return item.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.lastName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.email.toLowerCase().includes(searchQuery.toLowerCase());
    });
    setFilteredTrainee(filtered);
  };

  const traineeData = searchQuery ? filteredTrainee : trainee;
=======
    await axios.delete(`http://localhost:8085/trainee/delete/${userID}`,{headers});
    loadTrainee();
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filterTrainee = () => {
    const filtered = trainee.filter((item) => {
      // Customize the filtering logic based on your data structure
      return 
           item.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.lastName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.email.toLowerCase().includes(searchQuery.toLowerCase());
    });


    // setFilteredTrainee(filtered);

  };

  // const traineeData = searchQuery ? filteredTrainee : trainee;

  const traineeData = trainee;
>>>>>>> 46ff9eb49028ae9dbb4a50897874adf25fe21816

  return (
    <>
      <Navbar />
      <Sidebar />
      <div class="content-wrapper col-sm-40" >
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb">
              <div className="col-sm-12">
                <h1>Trainee List</h1>
              </div>
              <div className="col-sm-12">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item"><a href="#">Home</a></li>
                  <li className="breadcrumb-item active">Trainee</li>
                </ol>
              </div>
            </div>
          </div>
        </section>
        <section class="content" id="f">
          <div className="container-fluid" id="f">
            <div className="row">
              <div className="col-50">
                <div className="card">
                  <div className="card-header">
                    <div className="">
                      <div className='di-flex'>
                      <div >
                      <input
                        className='search'
                        type="text"
                        value={searchQuery}
                        onChange={handleSearchChange}
                        placeholder="Search here..."
                      /> 
                      </div>
                      &nbsp; &nbsp;
                       <Link to="/traineeForm">
                        <button type="button" 
                        class="btn btn-block btn-outline-success btn-sm"
                        >
                          <i class="fa fa-plus-alt"></i> Add Trainee
                        </button>
                      </Link>
<<<<<<< HEAD
=======
                      &nbsp; &nbsp;

                      <Link to="/reportGenerator">
                        <button type="button" 
                        class="btn btn-block btn-outline-success btn-sm"
                        >
                          <i class="fa fa-plus-alt"></i> Report
                        </button>
                      </Link>
>>>>>>> 46ff9eb49028ae9dbb4a50897874adf25fe21816
                      

                      
                  
                    
                   
                      
                     
                    

                    
                      </div>

                    
                     
                    
                    </div>&nbsp;
                    <div className="table-container col-sm table-wrapper ">
                    
                    
                    
                      &nbsp;   &nbsp;  &nbsp;  &nbsp;
                      <table className='table col-sm-10 table'>
                        <thead>
                          <tr>
                            <th id="age">ID</th>
                            <th id="n">Firstname</th>
                            <th id="n">MiddleName</th>
                            <th id="n">LastName</th>
                            <th id="us">Username</th>
                            <th id="f">Email</th>
                            <th id="n">Address</th>
<<<<<<< HEAD
                            {/* <th id="age">Age</th> */}
                            {/* <th id="gender">Gender</th> */}
                            {/* <th id="n">Password</th> */}
=======
>>>>>>> 46ff9eb49028ae9dbb4a50897874adf25fe21816
                            <th id="us">Phone No</th>
                            <th id="us">Reg No</th>
                            <th id="f">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {traineeData.map((trainee, index) =>
                            <tr key={index}>
                              <td>{index + 1} </td>
                              <td>{trainee.firstName}</td>
                              <td>{trainee.middleName}</td>
                              <td>{trainee.lastName}</td>
                              <td>{trainee.username}</td>
                              <td>{trainee.email}</td>
<<<<<<< HEAD
                              {/* <td>{trainee.password}</td> */}
=======
                             
>>>>>>> 46ff9eb49028ae9dbb4a50897874adf25fe21816
                              <td>{trainee.address}</td>
                              {/* <td>{trainee.age}</td> */}
                              {/* <td>{trainee.gender}</td> */}
                              <td>{trainee.phoneNumber}</td>
                              <td>{trainee.regNo}</td>
                              <td>
                                &nbsp;
                                  <Link to={`/viewTrainee/${trainee.userID}`} class="btn btn-info">
                                    <span class="glyphicon glaphycon-check-alt"></span>
                                    <i class="fas fa-eye"></i>
                                  </Link>&nbsp;
                                  <Link to={`/updateTrainee/${trainee.userID}`} class="btn btn-primary">
                                    <span className="glyphicon glaphycon-check-alt"></span>
                                    <i className="fa fa-edit"></i>
                                  </Link>&nbsp;
                                  <button type="button" class="btn btn-sm-10 btn-danger" onClick={() => deleteTrainee(trainee.userID)}>
                                    <i class="fas fa-trash-alt"></i>
                                  </button>
                                
                              </td>
                            </tr>
                          )}
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

export default Trainee;
