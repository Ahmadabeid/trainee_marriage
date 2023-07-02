import React, {useState,}from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';

function Timetablerender (){
  const navigateToTimetable=useNavigate();

  const [timeTable, setTimeTable]=useState({
    ttDate:"",
    ttTime:"",
    ttTile:"",
    ttVenue:""

  });
  const handleChange=(e)=>{
    setTimeTable({...timeTable, [e.target.name]: e.target.value })
  }

  
  const onSubmit= async(e)=>{
    e.preventDefault();
    await axios.post("http://localhost:8080/TimeTable/addTimeTable", timeTable);
    navigateToTimetable("/timeTable");

  }
  
  return (
    <>
<Navbar/>
<Sidebar/>
<div className="content-wrapper">
<section className="content-header">
<div class='timetable-container'>
<div className="row mb-2">
    <div className="col-sm-6"> 
      <h1>Timetable</h1>
    </div>
    
    <div className="col-sm-6">
      <ol className="breadcrumb float-sm-right">
        <li className="breadcrumb-item"><a href="#">Home</a></li>
        <li className="breadcrumb-item active">Timetable</li>
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
                    <Link to="/timeTable">
                <button type="button" class="btn btn-block btn-outline-success btn-sm " >
                <i class="fa fa-plus-alt"></i> Timetable List</button>
                </Link>
                &nbsp; &nbsp; &nbsp;
                </div>
                



    
<div class="card card-primary">
  <div class="card-header">
            <h3 class="card-title">Timetable Form</h3>
            &nbsp;
     </div>
      <div> 
      <form onSubmit={(e) => onSubmit(e)}>
  <div classname="card-body">
  <div className="di-flex">

    <div classname="form-group">
      <label>Date:</label>
      <input type="text" 
      name="ttDate"
      id="ttDate"
      onChange={(e) => handleChange(e)} 
     
      required/>
    </div>
    &nbsp; &nbsp; &nbsp; &nbsp;
    <div classname="form-group">
      <label>Time:</label>
      <input 
      type="text"
      name="ttTime"
      id="ttTime" 
      onChange={(e) => handleChange(e)}
      required /> 
    </div>
    &nbsp; &nbsp; &nbsp; &nbsp;
    <div classname="form-group">
      <label>Title:</label>
      <input
      id="ttTitle"
      name="ttTitle" 
      type="text" 
     onChange={(e) => handleChange(e)}
     required />
    </div>
    &nbsp; &nbsp; &nbsp; &nbsp;
    <div classname="form-group">
      <label>Venue:</label>
      <input
      name="ttVenue"
      id="ttVenue" 
      type="text" 
     onChange={(e) => handleChange(e)}
     required /> 
    </div>
    
    </div>
    &nbsp; 

    <div classname="card-footer">
    &nbsp; &nbsp; <button type="submit" classname="btn btn-primary">Save</button>
    </div>
    &nbsp; &nbsp;
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

</>

  
  )
}

export default Timetablerender
