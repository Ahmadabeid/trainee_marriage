import React,{ useEffect, useState } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import './ViewDocument.css'
import axios from 'axios'
import { useParams, Link } from 'react-router-dom'

const ViewTrainee = () => {
    const[trainee, setTrainee]=useState({
      firstName:"",
      middleName:"",
      lastName:"",
      username:"",
      email:"",
      address:"",
      age:"",
      gender:"",
      password:"",
      phoneNumber:"",
      regNo:"",

    });
    const {userID} = useParams();
  
    useEffect(()=>{
      loadTrainee();
    }, []);

<<<<<<< HEAD
    const headers={
      Authorization: `Basic QWhtYWQ6MTIz}`,
    }
=======
    
const headers={
  Authorization: `Basic QWhtYWQ6MTIz`,
}
>>>>>>> 46ff9eb49028ae9dbb4a50897874adf25fe21816
  
    const onSubmit = async (e) =>{
      e.preventDefault();
  
    }
    
    const { firstName, middleName,lastName,username,email,address,phoneNumber,regNo} = trainee;
    const loadTrainee =async()=>{
<<<<<<< HEAD
      const fetch = await axios.get(`http://localhost:8085/trainee/getTraineeById/${userID}` ,{headers});
=======
      const fetch = await axios.get(`http://localhost:8085/trainee/getTraineeById/${userID}`,{headers});
>>>>>>> 46ff9eb49028ae9dbb4a50897874adf25fe21816
      setTrainee(fetch.data);
    }
    return (
      <div>
          <>
          <Navbar/>
          <Sidebar/>
          <div class="content-wrapper">
          
              <section className="content-header">
      <div className="container-fluid">
        <div className="row mb-2">
          <div className="col-sm-6"> 
            <h1>View Trainee</h1>
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
    <section class="content">
    <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="card">
            <div className="card-header">
            <div className="col-sm-20">
            <div class="form-container">
  
            <form className="shadow-md border-t-4 border-sky-400 rounded-lg px-8 pt-6 pb-8 mb-4" onSubmit={(e)=>onSubmit(e)}>
      <div class="di-flex">
      
      <div class="fm">
    <label htmlFor="firstName">First Name:</label>
    <input
    
    value={firstName}
  
     class=" input" type="text" id="firstName" name="firstName" required />
    </div> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
   
    <div class="fm">
    <label htmlFor="middleName">Middle Name:</label>
    <input
    value={middleName}
    
    class=" input" type="text" id="middleName" name="middleName" required />
    </div> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
   
    <div class="fm">
    <label htmlFor="documentSize">Last Name:</label>
    <input
    value={lastName}
     class=" input" type="text" id="lastName" name="lastName" required />
    </div>
    </div>
  
      <div class="di-flex">

    <div class="fm">
    <label htmlFor="documentSize">Username:</label>
    <input
    value={username}
     class=" input" type="text" id="username" name="username" required />
    </div>
    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
   
    <div class="fm">
    <label htmlFor="documentSize">Email:</label>
    <input
    value={email}
     class=" input" type="text" id="email" name="email" required />
    </div>
   
    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
    
    <div class="fm">
    <label htmlFor="documentSize">Address:</label>
    <input
    value={address}
     class=" input" type="text" id="address" name="address" required />
    </div>

    </div>
    <div class="di-flex">
   
    <div class="fm">
    <label htmlFor="documentSize">Phone N0:</label>
    <input
    value={phoneNumber}
     class=" input" type="text" id="phoneNumber" name="phoneNumber" required />
    </div>
    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
    <div class="fm">
    <label htmlFor="documentSize">Reg N0:</label>
    <input
    value={regNo}
     class=" input" type="text" id="regNo" name="regNo" required />
    </div>
    
    
   

    </div>

    <br></br>
  
    <Link to="/trainee">Back</Link>
   
  </form>
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
  
        
      </div>
    )
  }

export default ViewTrainee
