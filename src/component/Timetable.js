import React, { useEffect, useState } from 'react'
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import './Timetable.css'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';

function Timetable(){
  const {timeTableId}=useParams();
  const [timeTable, setTimeTable]=useState([]);

  useEffect(()=>{
    loadTimeTable();
  }, []);

  const loadTimeTable =async()=>{
    const fetch = await axios.get("http://localhost:8080/TimeTable/getTimetables");
    setTimeTable(fetch.data);
  };

  const deleteTimeTable =async(timeTableId)=>{
    await axios.delete(`http://localhost:8080/TimeTable/delete/${timeTableId}`);
    loadTimeTable();
  };

  return (
    <>
<Navbar/> 
  <Sidebar />
<div className="content-wrapper">
<section className="content-header">
<div className="container-fluid">
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
<section className="content">
<div className="container-fluid">
  <div className="row">
    <div className="col-12">
      <div className="card">
        <div className="card-header">
            {/* <Link to='course'> */}
    <div className="col-sm-2">
        <Link to="/timetablerender">
    <button type="button" class="btn btn-block btn-outline-success btn-sm " >
    <i class="fa fa-plus-alt"></i> Add Timetable</button>
      </Link>
    </div>
    {/* </Link> */}
        </div>
        {/* /.card-header */}
        <div className="card-body">
          <table id="example2" className="table table-bordered table-hover">
            <thead>
            <tr>
              <th>Id</th>
              <th>Date</th>
              <th>Time</th>
              <th>Title</th>
              <th>Venue</th>
              <th>Action</th>
            </tr>
                  </thead>
            <tbody>
              {timeTable.map((timeTable, index)=>(
              <tr>
                <td key={index}>{index + 1}</td>
                <td>{timeTable.ttDate}</td>
                <td>{timeTable.ttTime}</td>
                <td>{timeTable.ttTitle}</td>
                <td>{timeTable.ttVenue}</td>
                
                
                <td>
                    &nbsp;&nbsp;
                    <Link to ={`/viewTimetable/${timeTable.timeTableId}`}class="btn btn-info">
                            <span class="glyphicon glaphycon-check-alt"></span>
                            <i class="fas fa-eye"></i>
                           
                        </Link>&nbsp;&nbsp;
                   
                    <Link to ={`/updateTimetable/${timeTable.timeTableId}`}class="btn btn-primary">
                            <span className="glyphicon glaphycon-check-alt"></span>
                            <i className="fa fa-edit"></i>
                           
                        </Link>&nbsp; 
                   
                    <button type="button" className=" trash btn btn-danger col-sm-2" onClick={()=> deleteTimeTable(timeTable.timeTableId)}>
                        <span className="glyphicon glaphycon-trash-alt"></span>
                            <i class="fas fa-trash-alt"></i>
                        </button>
                </td>
              </tr>
              ))
              }
             
            </tbody>
          </table>
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
export default Timetable