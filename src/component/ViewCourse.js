import React,{ useEffect, useState } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import './ViewDocument.css'
import axios from 'axios'
import { useParams, Link } from 'react-router-dom'

const ViewCourse = () => {
    const[course, setCourse] = useState({
        courseCode: '',
        courseTitle: '',
        courseYear: '',
        courseLevel: ''
    });
      const {courseId} = useParams();
    
      useEffect(()=>{
        loadCourse();
      }, []);

      
const headers={
  Authorization: 'Basic QWhtYWQ6MTIz',
}
    
      const onSubmit = async (e) =>{
        e.preventDefault();
    
      }
      
    
      const {courseCode, courseTitle, courseYear, courseLevel} =course;
      const loadCourse =async()=>{
        const fetch = await axios.get(`http://localhost:8085/course/getCourseById/${courseId}`,{headers});
        setCourse(fetch.data);
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
      <h1>View Course</h1>
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
<section class="content">
<div className="container-fluid">
  <div className="row">
    <div className="col-12">
      <div className="card">
      <div className="card-header">
      <div className="col-sm-2">
      <div class="form-container">

      <form className="shadow-md border-t-4 border-sky-400 rounded-lg px-8 pt-6 pb-8 mb-4" onSubmit={(e)=>onSubmit(e)}>


<div class="fm">
<label htmlFor="courseCode">Course Code:</label>
<input
value={courseCode}

class=" input" type="text" id="courseCode" name="courseCode"  />
</div>


<div class="fm">
<label htmlFor="documentName">Course Title:</label>
<input
value={courseTitle}

class=" input" type="text" id="courseTitle" name="courseTitle"  />
</div>

<div class="fm">
<label htmlFor="documentSize">Course Year:</label>
<input
value={courseYear}
class=" input" type="text" id="courseYear" name="courseYear"  />
</div>


<div class="fm">
<label htmlFor="documentSize">Course Level:</label>
<input
value={courseLevel}
class=" input" type="text" id="courseLevel" name="courseLevel"  />
</div>
<br></br>

<Link to="/courset">Back</Link>

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


export default ViewCourse
