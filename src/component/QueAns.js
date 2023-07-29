import React, { useEffect, useState } from 'react'
import './QueAns.css'
import { Link, useParams } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import axios from 'axios';

const QueAns = () => {
  const {queAnsId} = useParams();
  const[queAns, setQueAns]=useState([]);

  useEffect(() => {
    loadQueAns();
  },[]);

  
const headers={
  Authorization: 'Basic QWhtYWQ6MTIz',
}

  const loadQueAns =async()=>{
    const fetch = await axios.get("http://localhost:8085/queAns/getAllQueAns",{headers});
    setQueAns(fetch.data);
  }
  const deleteQueAns =async(queAnsId)=>{
    await axios.delete(`http://localhost:8085/queAns/deleteQueAnsById/${queAnsId}`, {headers})
    loadQueAns();
  }

  return (
    <>
    <Navbar/>
    <Sidebar/>
    <div class="content-wrapper">
    <section className="content-header">
    <div className="container-fluid">
      <div className="row mb-2">
        <div className="col-sm-6"> 
          <h1>QueAns List</h1>
        </div>
        
        <div className="col-sm-6">
          <ol className="breadcrumb float-sm-right">
            <li className="breadcrumb-item"><a href="#">Home</a></li>
            <li className="breadcrumb-item active">QueAns</li>
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
                    <Link to="/queAnsForm">
                <button type="button" class="btn btn-block btn-outline-success btn-sm " >
                <i class="fa fa-plus-alt"></i> Add QueAns</button>
                </Link>
                </div> &nbsp;&nbsp;
    <div className="table-container">
    <table class="table">
    <thead>
      <tr>
        <th>Id</th>
        <th>Question Content</th>
        <th>Answer Content</th>
        <th>Topic</th>
        <th>Comment</th>
        <th><center>Actions</center></th>
      </tr>
    </thead>
    <tbody>
      {queAns.map((queAns,  index)=>(
      <tr>
        <td key={index}>{index + 1}</td>
        <td>{queAns.queContent}</td>
        <td>{queAns.ansContent}</td>
        <td>{queAns.topic}</td>
        <td>{queAns.comment}</td>
        <td>
                        
        <Link to ={`/viewQueAns/${queAns.queAnsId}`}class="btn btn-info">
                            <span class="glyphicon glaphycon-check-alt"></span>
                            <i class="fas fa-eye "></i>
                           
                        </Link>&nbsp;
                           
                        <Link to ={`/updateQueAns/${queAns.queAnsId}`}class="btn btn-primary">
                            <span class="glyphicon glaphycon-check-alt "></span>
                            <i class="fa fa-edit "></i>
                           
                           
                        </Link>&nbsp; 
                           
                        <button type="button" class=" trash btn btn-danger btn-sm col-sm-3" onClick={()=> deleteQueAns(queAns.queAnsId)}>
                           
                        <i class="fa fa-trash" ></i>

                        <span class="bi bi-trash"></span>
                          
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
    
      </div>
      </section>
    </div>
    
    
    </>
  )
}

export default QueAns
