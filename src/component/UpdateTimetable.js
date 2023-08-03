import React, { useState,useEffect } from 'react'
import axios from 'axios'
import{Link,useNavigate, useParams} from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import './DocumentForm.css'

function UpdateTimetable (){
    let navigate=useNavigate();
    const{timeTableId}=useParams();

    const [timeTable, setTimeTable] = useState({
        ttDate :"",
        ttTime:"",
        ttTitle:"",
        ttVenue:""
    });
    const {ttDate, ttTime, ttTitle, ttVenue} =timeTable;

    const onInputChange=(e) =>{
        setTimeTable({...timeTable, [e.target.name]: e.target.value});
    };

    useEffect(() =>{
        loadTimeTable()
    }, []);

    const headers={
      Authorization: `Basic QWhtYWQ6MTIz}`,
    }

    
    const onSubmit =async (e)=>{
        e.preventDefault();

        await axios.put(`http://localhost:8085/timetable/updateTimeTable/${timeTableId}`, timeTable,{headers});
        navigate("/timeTable");
    }

    
    const loadTimeTable =async ()=>{
        const fetch= await
        axios.get(`http://localhost:8085/timetable/getTimeTableById/${timeTableId}`,{headers})
        setTimeTable(fetch.data);
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
      <h1>Update Timetable</h1>
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
          <div className="col-sm-4">
          <div class="form-container">
            <h3> Update Timetable</h3>
            <form onSubmit={(e) => onSubmit(e)}>
  <div className="form-group">
    <label  htmlFor="docType">
      Timetable Date
    </label>
    <input
     
      name="ttDate"
      type="text"
      value={ttDate}
      placeholder=""
      onChange={(e) => onInputChange(e)}
    />
  </div>
  <div className="form-group">
    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="docName">
      Timetable Time
    </label>
    <input
     
      name="ttTime"
      type="text"
      value={ttTime}
      placeholder=""
      onChange={(e) => onInputChange(e)}
    />
  </div>
  <div className="form-group">
    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="docSize">
      Timetable Title
    </label>
    <input
     
      name="ttTitle"
      type="text"
      value={ttTitle}
      placeholder=""
      onChange={(e) => onInputChange(e)}
    />
  </div>
  <div className="form-group">
    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="docSize">
      Timetable Venue
    </label>
    <input
     
      name="ttVenue"
      type="text"
      value={ttVenue}
      placeholder=""
      onChange={(e) => onInputChange(e)}
    />
  </div>

  <div className="flex flex-row items-center space-x-4 -space-x-reverse mb-4">
    <Link
      to="/document"
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

export default UpdateTimetable
