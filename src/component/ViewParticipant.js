import React,{ useEffect, useState } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import './ViewDocument.css'
import axios from 'axios'
import { useParams, Link } from 'react-router-dom'

const ViewParticipant = () => {
    const[participant, setParticipant]=useState({
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
        qualification:"",
        status:"",
  
      });
      const {userID} = useParams();
    
      useEffect(()=>{
        loadParticipant();
      }, []);
    
      const onSubmit = async (e) =>{
        e.preventDefault();
    
      }
      
      const { firstName, middleName,lastName,username,email,address,age,gender,password,phoneNumber,qualification, status} = participant;
      const loadParticipant =async()=>{
        const fetch = await axios.get(`http://localhost:8080/Participant/getParticipantById/${userID}`);
        setParticipant(fetch.data);
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
              <h1>View Participant</h1>
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
      <section class="content">
      <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="card">
              <div className="card-header">
              <div className="col-sm-2">
              <div class="form-container">
    
              <form className="shadow-md border-t-4 border-sky-400 rounded-lg px-8 pt-6 pb-8 mb-4" onSubmit={(e)=>onSubmit(e)}>
        <div class="flex">
        
        <div class="fm">
      <label htmlFor="firstName">First Name:</label>
      <input
      value={firstName}
    
       class=" input" type="text" id="firstName" name="firstName" required />
      </div>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <div class="fm">
      <label htmlFor="middleName">Middle Name:</label>
      <input
      value={middleName}
      
      class=" input" type="text" id="middleName" name="middleName" required />
      </div>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <div class="fm">
      <label htmlFor="lastName">Last Name:</label>
      <input
      value={lastName}
       class=" input" type="text" id="lastName" name="lastName" required />
      </div>
      <div class="fm">
      <label htmlFor="username">Username:</label>
      <input
      value={username}
       class=" input" type="text" id="username" name="username" required />
      </div>
     
      </div>
      <div class="flex">
      <div class="fm">
      <label htmlFor="email">Email:</label>
      <input
      value={email}
       class=" input" type="text" id="email" name="email" required />
      </div>
      <div class="fm">
      <label htmlFor="password">Password:</label>
      <input
      value={password}
       class=" input" type="text" id="password" name="password" required />
      </div>
      
      <div class="fm">
      <label htmlFor="address">Address:</label>
      <input
      value={address}
       class=" input" type="text" id="address" name="address" required />
      </div>
      <div class="fm">
      <label htmlFor="age">Age:</label>
      <input
      value={age}
       class=" input" type="text" id="age" name="age" required />
      </div>
  
      </div>
      <div class="flex">
      <div class="fm">
      <label htmlFor="gender">Gender:</label>
      <input
      value={gender}
       class=" input" type="text" id="gender" name="gender" required />
      </div>
      <div class="fm">
      <label htmlFor="phoneNo">Phone Number:</label>
      <input
      value={phoneNumber}
       class=" input" type="text" id="phoneNumber" name="phoneNumber" required />
      </div>
      <div class="fm">
      <label htmlFor="qualification">Qualification:</label>
      <input
      value={qualification}
       class=" input" type="text" id="qualification" name="qualification" required />
      </div>

      <div class="fm">
      <label htmlFor="status">Status:</label>
      <input
      value={status}
       class=" input" type="text" id="status" name="status" required />
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


export default ViewParticipant
