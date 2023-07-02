import React, {useState} from 'react'
import { Link,useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import './CourseForm.css'
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
    
     const handleSubmit = (e) => {
        e.preventDefault();
        console.log('FirstName:',this.state.firstName);
        console.log('MiddleName:',this.state.middleName);
        console.log('LastName:',this.state.lastName);
        console.log('Username:', this.state.username);
        console.log('Email:', this.state.email);
        console.log('Address:', this.state.address);
        console.log('Age:', this.state.age);
        console.log('Gender:', this.state.gender);
        console.log('Password:', this.state.password);
        console.log('Phone Number:', this.state.phoneNumber);
        console.log('RegistrationNumber:', this.state.regNo);
        console.log('Role:', this.state.role);
        console.log('Authority:', this.state.authority);
      };

      const onSubmit=async(e)=>{
        e.preventDefault();

        await axios.post("http://localhost:8080/Trainee/addTrainee", trainee);
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
     
  <div class="form1" >
  <div id="margin" class="form-group">

  <label>First name:</label>
  <input className='input' type="text" name="firstName"  id="firstName" onChange={(e) =>handleChange(e)} required />
  </div>
  &nbsp; &nbsp; &nbsp; &nbsp;
  <div class="margin,form-group"> 
    
  <label>Middle name:</label>
  <input  className='input' type="text" name="middlename" id="middleName"  onChange={(e) =>handleChange(e)} required />
  </div>
  &nbsp; &nbsp; &nbsp; &nbsp;
  <div class="margin,form-group"> 
  <label>Last name:</label>
  <input className='input' type="text" name="lastname" id="lastName" onChange={(e) =>handleChange(e)} required />
  </div>
  &nbsp; &nbsp; &nbsp; &nbsp;
  <div class="margin,form-group"> 
  <label>Username:</label>
  <input className='input' type="text" name="username" id="username" onChange={(e) =>handleChange(e)} required />
  </div>
  </div>

  <div class="form2">
 
 
  <div className='input' id="margin" class="form-group">
  <label>Email:</label>
  <input className='input' type="email" name="email" id="email"  onChange={(e) =>handleChange(e)} required />
  </div>
  &nbsp; &nbsp; &nbsp; &nbsp;
  <div id="margin,form-group">
  <label>Password:</label>
  <input className='input' type="password" name="password" id="password"  onChange={(e) =>handleChange(e)} required />
  </div> 
  &nbsp; &nbsp; &nbsp; &nbsp;
  <div class="margin,form-group"> 
  <label>Address:</label>
  <input className='input' type="text" name="address" id="address" onChange={(e) =>handleChange(e)} required />
  </div>
  &nbsp; &nbsp; &nbsp; &nbsp;
  <div class="margin,form-group"> 
  <label>Age:</label>
  <input className='input' type="text" name="age" id="age"  onChange={(e) =>handleChange(e)} required />
  </div>
  &nbsp; &nbsp; &nbsp; &nbsp;
  
  
  

  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </div>
  <div class="form3">
  &nbsp; &nbsp; 
  
  
  <div class="margin,form-group"> 
  <label>Gender:</label>
  <select className='input' name="gender" id="gender" onChange={(e) =>handleChange(e)} required>
      <option value>Select </option>
      <option value="male">Male</option>
      <option value="female">Female</option>
     
  </select>
  </div>
  &nbsp; &nbsp; &nbsp; &nbsp;
  <div class="margin,form-group">
  <label>Phone Number:</label>
  <input className='input' type="text" name="phoneNumber" id="phoneNumber" onChange={(e) =>handleChange(e)} required />
  </div>
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
