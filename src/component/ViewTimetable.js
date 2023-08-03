import React,{ useEffect, useState } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import axios from 'axios'
import { useParams, Link } from 'react-router-dom'
import './ViewDocument.css'

const ViewTimetable = () => {
    const [timeTable, setTimeTable] = useState({
        ttDate:"",
        ttTime:"",
        ttTitle:"",
        ttVenue:""
    });
    const {timeTableId} = useParams();
    useEffect(()=>{
        loadTimeTable();
      }, []);
    
      const onSubmit = async (e) =>{
        e.preventDefault();
    
      }

      const headers={
        Authorization: `Basic QWhtYWQ6MTIz}`,
      }

      
  const {ttDate, ttTime, ttTitle, ttVenue} =timeTable;
  const loadTimeTable =async()=>{
    const fetch = await axios.get(`http://localhost:808/timetable/getTimeTableById/${timeTableId}`,{headers});
    setTimeTable(fetch.data);
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
          <h1>View Timetable</h1>
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
          <div class="form-container">

          <form className="shadow-md border-t-4 border-sky-400 rounded-lg px-8 pt-6 pb-8 mb-4" onSubmit={(e)=>onSubmit(e)}>
    <div class="flex">
    
    <div class="fm">
  <label htmlFor="documentType">TimeTable Date:</label>
  <input
  value={ttDate}

   class=" input" type="text" id="ttDate" name="ttDate" required />
  </div>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <div class="fm">
  <label htmlFor="documentName">TimeTable Time:</label>
  <input
  value={ttTime}
  
  class=" input" type="text" id="ttTime" name="ttTime" required />
  </div>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <div class="fm">
  <label htmlFor="documentSize">Timetable Title:</label>
  <input
  value={ttTitle}
   class=" input" type="text" id="ttTitle" name="ttTitle" required />
  </div>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <div class="fm">
  <label htmlFor="documentSize">Timetable Venue:</label>
  <input
  value={ttVenue}
   class=" input" type="text" id="ttVenue" name="ttVenue" required />
  </div>
 
  </div>
  <br></br>

  <Link to="/timetable">Back</Link>
 
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

export default ViewTimetable
