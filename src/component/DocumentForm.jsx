import React, {useState,}from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import './DocumentForm.css'


    


function DocumentForm(){
  const navigateToDocument = useNavigate();

  const[document, setDocument]=useState({
    
    docName:"",
    docFile:"",
    docSize:""
  });

  const handleChange=(e)=>{
    setDocument({...document, [e.target.name]: e.target.value});
  };

  const headers={
    Authorization: `Basic QWhtYWQ6MTIz}`,
  }
  

  const onSubmit= async(e)=>{
    e.preventDefault();
    await axios.post("http://localhost:8085/document/addDocument", document,{headers});
    navigateToDocument("/document");

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
          <h1>Document Form</h1>
        </div>
        
        <div className="col-sm-6">
          <ol className="breadcrumb float-sm-right">
            <li className="breadcrumb-item"><a href="#">Home</a></li>
            <li className="breadcrumb-item active">Document </li>
          </ol>
        </div>
      </div>
    </div>
  </section>
  <section>
  <div className="container-fluid">
  <div className="row">
  <div className="col-12">
  <div className="card">
  <div className="card-header">
                
                <div className="col-sm-2">
                    <Link to="/Document">
                <button type="button" class="btn btn-block btn-outline-success btn-sm " >
                <i class="fa fa-plus-alt"></i> Document List</button>
                </Link>
                </div>
                
                    </div>
                    <form onSubmit={(e) => onSubmit(e)}>
  <div className="card-body">
    <div className="di-flex">
      <div className="form-group">
        <label htmlFor="docType">Document Name:</label>
        <input
          type="text"
          
          id="docName"
          name="docName"
          onChange={(e) => handleChange(e)}
          placeholder="Enter document type"
          required
        />
      </div>
      &nbsp; &nbsp;&nbsp;
      <div  >
        <label htmlFor="docName">Document File:</label>
        <input
           class="control"
          type="file"
          id="docFile"
          title="file"
          placeholder="Enter document name"
          name="docName"
          accept="application/pdf"
        />
      </div>
      &nbsp;&nbsp;&nbsp;
      <div >
        <label htmlFor="docSize">Document Size:</label>
        <input
        class="control"
          type="text"
         
          id="docSize"
          name="docSize"
          placeholder="document size"
          required
          onChange={(e) => handleChange(e)}
        />
      </div>
    </div>
   
    <div className="card-footer">
      <div className="col-sm-2">
        <button
          type="submit"
          className="btn btn-block btn-outline-success btn-sm"
        >
          Save
        </button>
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
  )
}


export default DocumentForm
