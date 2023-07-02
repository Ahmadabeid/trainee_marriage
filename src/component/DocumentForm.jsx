import React, {useState,}from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import './DocumentForm.css'


    


// handleChange=(e)=>{
//     e.preventDefault();
//     console.log('Document Id', this.state.docId);
//     console.log('Document Type', this.state.docType);
//     console.log('Document Name', this.state.docName);
//     console.log('Document Size', this.state.docSize);

// }
// const certificateFileRef=useRef(null);
// const onCertificateAttach =() => {
//     const file = certificateFileRef.current.files[0];
//     if (file){
//         console.log('File Selected:', file.name);
//     }
// }
// const onCertificateAttach = (e) => {
//     const file = certificateFileRef.current.files[0];
// }

// const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     const fileSize = file.size; // Size in bytes
  
//     console.log("File size:", fileSize);
//   };




function DocumentForm(){
  const navigateToDocument = useNavigate();

  const[document, setDocument]=useState({
    docType:"",
    docName:"",
    docSize:""
  });

  const handleChange=(e)=>{
    setDocument({...document, [e.target.name]: e.target.value});
  };

  const onSubmit= async(e)=>{
    e.preventDefault();
    await axios.post("http://localhost:8080/Document/addDocument", document);
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
        <label htmlFor="docType">Document Type:</label>
        <input
          type="text"
          
          id="docType"
          name="docType"
          onChange={(e) => handleChange(e)}
          placeholder="Enter document type"
          required
        />
      </div>
      &nbsp; &nbsp;&nbsp;
      <div  >
        <label htmlFor="docName">Document Name:</label>
        <input
           class="control"
          type="file"
          id="docName"
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
          placeholder="Enter document size"
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
