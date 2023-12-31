import React, { useState,useEffect } from 'react'
import axios from 'axios'
import{Link,useNavigate, useParams} from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import './CourseForm.css';
import './TraineeForm.css';
import './UpdateTrainee.css'


function UpdateTrainee() {
    let navigate=useNavigate();
    const{userID}=useParams();

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

      const { firstName, middleName,lastName,username,email,address,gender,phoneNumber,regNo} = trainee;

      const onInputChange=(e) =>{
        setTrainee({...trainee, [e.target.name]: e.target.value});
    };

    useEffect(() =>{
        loadTrainee()
    }, []);

<<<<<<< HEAD
    const headers={
      Authorization: `Basic QWhtYWQ6MTIz}`,
    }
=======
    
const headers={
  Authorization: 'Basic QWhtYWQ6MTIz',
}
>>>>>>> 46ff9eb49028ae9dbb4a50897874adf25fe21816
    
    const onSubmit =async (e)=>{
        e.preventDefault();

        await axios.put(`http://localhost:8085/trainee/updateTrainee/${userID}`, document,{headers});
        navigate("/trainee");
    }

    const loadTrainee =async ()=>{
        const fetch= await
<<<<<<< HEAD
        axios.get(`http://localhost:8085/trainee/getTraineeById/${userID}`,{headers

        })
=======
        axios.get(`http://localhost:8085/trainee/getTraineeById/${userID}`,{headers})
>>>>>>> 46ff9eb49028ae9dbb4a50897874adf25fe21816
        setTrainee(fetch.data);
    }



  return (
    <>
    <div>
        
           
        <Navbar/>
        <Sidebar/>
          <div class="content-wrapper">
        
        <section className="content-header">
<div className="container-fluid">
  <div className="row mb-2">
    <div className="col-sm-6"> 
      <h1>Update Trainee</h1>
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
          <div className="col-sm-4">
          <div class="form-container table-wrapper">
            <h3> Update Trainee</h3>
            <form class="form " onSubmit={(e)=>onSubmit(e)}>
<div className="card-body">
  <div class="form-group">
     
  <div class="form1" >
  <div id="margin" class="form-group">

  <label>First name:</label>
  <input
   className='input' 
   type="text" 
   name="firstName"  
   id="firstName" 
   value={firstName}
   onChange={(e) => onInputChange(e)}
    />
  </div>
  &nbsp; &nbsp; &nbsp; &nbsp;
  <div class="margin,form-group"> 
    
  <label>Middle name:</label>
  <input  className='input' 
  type="text" 
  name="middlename" 
  id="middleName"
  value={middleName}
  onChange={(e) => onInputChange(e)} />
  </div>
  &nbsp; &nbsp; &nbsp; &nbsp;
  <div class="margin,form-group"> 
  <label>Last name:</label>
  <input 
  className='input' 
  type="text" 
  name="lastname" 
  id="lastName" 
  value={lastName}
  onChange={(e) => onInputChange(e)}
   />
  </div>
  &nbsp; &nbsp; &nbsp; &nbsp;
  <div class="margin,form-group"> 
  <label>Username:</label>
  <input 
  className='input' 
  type="text" 
  name="username" 
  id="username" 
  value={username}
  onChange={(e) => onInputChange(e)}  />
  </div>
  </div>

  <div class="form2">
 
 
  <div className='input' id="margin" class="form-group">
  <label>Email:</label>
  <input className='input' 
  type="email" 
  name="email" 
  id="email"
  value={email}  
  onChange={(e) => onInputChange(e)} />
  </div>
  &nbsp; &nbsp; &nbsp; &nbsp;
  {/* <div id="margin,form-group">
  <label>Password:</label>
  <input className='input' 
  type="password" 
  name="password" 
  id="password"
  value={password}
  onChange={(e) => onInputChange(e)}
    />
  </div>  */}
  &nbsp; &nbsp; &nbsp; &nbsp;
  <div class="margin,form-group"> 
  <label>Address:</label>
  <input className='input'
  type="text" 
  name="address" 
  id="address"
  value={address} 
  onChange={(e) => onInputChange(e)}  />
  </div>
  &nbsp; &nbsp; &nbsp; &nbsp;
  {/* <div class="margin,form-group"> 
  <label>Age:</label>
  <input 
  className='input' 
  type="text" 
  name="age" 
  id="age"
  value={age} 
  onChange={(e) => onInputChange(e)}  />
  </div> */}
  &nbsp; &nbsp; &nbsp; &nbsp;
  
  
  

  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </div>
  <div class="form3">
  &nbsp; &nbsp; 
  
  
  <div class="margin,form-group"> 
  <label>Gender:</label>
  <select 
  className='input' 
  name="gender" 
  id="gender"
  value={gender} 
  onChange={(e) => onInputChange(e)}  >
      <option value>Select </option>
      <option value="male">Male</option>
      <option value="female">Female</option>
     
  </select>
  </div>
  &nbsp; &nbsp; &nbsp; &nbsp;
  <div class="margin,form-group">
  <label>Phone Number:</label>
  <input 
  className='input' 
  type="text" 
  name="phoneNumber" 
  id="phoneNumber" 
  value={phoneNumber}
  onChange={(e) => onInputChange(e)}  />
  </div>
  &nbsp; &nbsp; &nbsp; &nbsp;
  <div class="margin,form-group">
  <label>Reg No:</label>
  <input 
  className='input' 
  type="text" 
  name="regNo" 
  id="regNo" 
  value={regNo} 
  onChange={(e) => onInputChange(e)}  />
  </div>
  
  </div>

  </div>
  <div className="card-footer">
  <div className="col-sm-2">

  <Link
      to="/trainee"
      className="bg-emerald-500 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline"
      type="submit"
    >
      Cancel
    </Link>

  
    <button
    onclick="showAlert()"
  className="btn btn-block btn-outline-primary btn-sm bg-sky-400 hover:bg-sky-600"
  type="submit"
  style={{ width: "200%" }} // Add the style to increase the width
>
  Update
</button>
  </div>
  </div>
  </div>
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
    
    </div>
    </>
  )
}

export default UpdateTrainee
