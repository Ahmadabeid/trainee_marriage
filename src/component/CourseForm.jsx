import React, {useState,}from 'react' 
import './CourseForm.css'
import Sidebar from './Sidebar';

import Navbar from './Navbar';
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';

function CourseForm() {
  const navigateToCourset = useNavigate();
   
        const[course, setCourse] = useState({
            courseCode: '',
            courseTitle: '',
            courseYear: '',
            courseLevel: ''
        });

 const handleChange = (e) => {
    setCourse({...course, [e.target.name]: e.target.value });
};

const onSubmit= async(e)=>{
  e.preventDefault();
  await axios.post("http://localhost:8080/Course/addCourse", course);
  navigateToCourset("/courset");

}
    return (
        <>
        <Sidebar/>
        <Navbar/>
        
   <div className="content-wrapper">
   <section className="content-header">
    <div className="container-fluid">
      <div className="row mb-2">
        <div className="col-sm-6"> 
          <h1>Course Form</h1>
        </div>
        
        <div className="col-sm-6">
          <ol className="breadcrumb float-sm-right">
            <li className="breadcrumb-item"><a href="#">Home</a></li>
            <li className="breadcrumb-item active">Course</li>
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
                    <Link to="/courset">
                <button type="button" class="btn btn-block btn-outline-success btn-sm " >
                <i class="fa fa-plus-alt"></i> Course List</button>
                </Link>
                </div>
                
                    </div>
                  
    
          
  <form class="form" onSubmit={(e)=>onSubmit(e)}>
  <div className="card-body">
    <div class="flex">
  <div class="form-group">
    <label for="courseCode">Course Code:</label>
    <input
      type="text"
      class="form-control"
      id="courseCode"
      name="courseCode"
      value={course.courseCode}
      onChange={(e) =>handleChange(e)}
      placeholder="Enter course code"
      required
    />
  </div>
  <div class="form-group" id="form2">
   <label for="courseTitle">Course Title:</label>
    <input
      type="text"
      class="form-control"
      id="courseTitle"
      name="courseTitle"
      value={course.courseTitle}
      onChange={(e) =>handleChange(e)}
      placeholder="Enter course title"
      required
    />
  </div>
  </div>
  <div class="flex">

  <div class="form-group" >
    <label for="courseYear">Course Year:</label>
    <input
      type="text"
      class="form-control"
      id="courseYear"
      name="courseYear"
      value={course.courseYear}
      onChange={(e) =>handleChange(e)}
      placeholder="Enter course year"
      required
    />
  </div>
  <div class="form-group" id="form2">
    <label for="courseLevel">Course Level:</label>
    <input
      type="text"
      class="form-control"
      id="courseLevel"
      name="courseLevel"
      value={course.courseLevel}
      onChange={(e) =>handleChange(e)}
      placeholder="Enter course level"
      required
    />
  </div>
  </div>
  <div className="card-footer">
        <div className="col-sm-2">
        <button type="submit" class="btn btn-block btn-outline-success btn-sm" >Save</button>
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
}


export default CourseForm
