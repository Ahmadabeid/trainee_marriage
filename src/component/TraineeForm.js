import React, {useState} from 'react'
import { Link,useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
// import './CourseForm.css'
import './TraineeForm.css'
import axios from 'axios';

function TraineeForm() {
  const navigateToTrainee = useNavigate();
  const [trainee, setTrainee]= useState({
          firstName:'',
          middleName:'',
          lastName:'',
          username: '',
          email: '',
          address: '',
          age: '',
          gender: '',
          password: '',
          phoneNumber: '',
          regNo: ''
  });
          
        
    

  const handleChange = (e) => {
        setTrainee({...trainee,[e.target.name]: e.target.value})
      };
    


      const headers={
        Authorization: `Basic QWhtYWQ6MTIz}`,
      }
      
      const onSubmit=async(e)=>{
        e.preventDefault();

        await axios.post("http://localhost:8085/trainee/addTrainee", trainee,{headers});
        navigateToTrainee("/trainee");

      }



  return (
    <>
    <Sidebar/>
    
    <div className="content-wrapper">
    
    <section className="content-header">
<div className="container-fluid">
<div className="row mb-2">
<div className="col-sm-6"> 
<h1>Trainee Form</h1>
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
<section className="content">
<div className="container-fluid">
<div className="row">
<div className="col-12">
<div className="card">

<div className="card-header">
      
      <div className="col-sm-2">
          <Link to="/trainee">
      <button type="button" class="btn btn-block btn-outline-success btn-sm " >
      <i class="fa fa-plus-alt"></i> Trainee List</button>
      </Link>
      </div>
      
          </div>
  
<form class="form" onSubmit={(e)=>onSubmit(e)}>
<div className="card-body">
  <div class="form-group">
     
  <div class="form1 di-flex " >
  <div id="margin" class="form-group">

  <label>First name:</label>
  <input className='input' type="text" name="firstName"  id="firstName" onChange={(e) =>handleChange(e)} required />
  </div>
  &nbsp; &nbsp; &nbsp; &nbsp;
  <div class="margin,form-group"> 
    
  <label>Middle name:</label>
  <input  className='input' type="text" name="middleName" id="middleName"  onChange={(e) =>handleChange(e)} required />
  </div>
  &nbsp; &nbsp; &nbsp; &nbsp;
  <div class="margin,form-group"> 
  <label>Last name:</label>
  <input className='input' type="text" name="lastName" id="lastName" onChange={(e) =>handleChange(e)} required />
  </div>
  &nbsp; &nbsp; &nbsp; &nbsp;

  </div>

  <div class="form2 di-flex">
  <div class="margin,form-group"> 
  <label>Username:</label>
  <input className='input' type="text" name="username" id="username" onChange={(e) =>handleChange(e)} required />
  </div>
  &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;
 
 
  <div className='input' id="margin" class="form-group">
  <label>Email:</label>
  <input className='input' type="email" name="email" id="email"  onChange={(e) =>handleChange(e)} required />
  </div>
  &nbsp; &nbsp; &nbsp; &nbsp;
  <div id="margin,form-group">
  <label>Password:</label>
  <input className='input' type="password" name="password" id="password"  onChange={(e) =>handleChange(e)} required />
  </div> 
 

  
  
  

  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </div>
  <div class="form3 di-flex">

  <div class="margin,form-group"> 
  <label>Address:</label>
  <input className='input' type="text" name="address" id="address" onChange={(e) =>handleChange(e)} required />
  </div>
  &nbsp; &nbsp; &nbsp; &nbsp;
  <div class="margin,form-group">
  <label>Phone Number:</label>
  <input className='input' type="text" name="phoneNumber" id="phoneNumber" onChange={(e) =>handleChange(e)} required />
  </div>
  &nbsp; &nbsp; &nbsp; &nbsp;

  <div class="margin,form-group"> 
  <label>Age:</label>
  <input className='input' type="text" name="age" id="age"  onChange={(e) =>handleChange(e)} required />
  </div>
  &nbsp; &nbsp; &nbsp; &nbsp;
  
  
  
  <div class="margin form-group"> 
  <label>Gender:</label>
  <select className='input' name="gender" id="gender" onChange={(e) =>handleChange(e)} required>
      <option value>Select </option>
      <option value="male">Male</option>
      <option value="female">Female</option>
     
  </select>
  </div>
  &nbsp; &nbsp; &nbsp; &nbsp;
  
  &nbsp; &nbsp; &nbsp; &nbsp;
  
  </div>
  <div class="form4">
  &nbsp; &nbsp; 
  
  &nbsp; &nbsp; &nbsp; &nbsp;
  
  
  </div>
  </div>
  <div className="card-footer">
  <div className="col-sm-2">
  <br></br>
  <button type="submit" id="margin" class="btn btn-block btn-outline-success btn-sm">Save</button>
  </div>
  </div>
  </div>
</form>
</div>
</div>
</div>
</div>
</section>

</div>
</>
  );
};

export default TraineeForm
