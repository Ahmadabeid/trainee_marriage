import React,{ useEffect, useState } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import './ViewDocument.css'
import axios from 'axios'
import { useParams, Link } from 'react-router-dom'

const View = () => {
  const[document, setDocument]=useState({
   
    docName:"",
    docFile:"",
    docSize:""
  });
  const {docId} = useParams();

  useEffect(()=>{
    loadDocument();
  }, []);

  const onSubmit = async (e) =>{
    e.preventDefault();

  }

  const headers={
    Authorization: `Basic QWhtYWQ6MTIz}`,
  }
  

  const { docName, docFile, docSize} =document;
  const loadDocument =async()=>{
    const fetch = await axios.get(`http://localhost:8085/document/getDocumentById/${docId}`,{headers});
    setDocument(fetch.data);
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
          <h1>View Document</h1>
        </div>
        
        <div className="col-sm-6">
          <ol className="breadcrumb float-sm-right">
            <li className="breadcrumb-item"><a href="#">Home</a></li>
            <li className="breadcrumb-item active">Document</li>
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
  <label htmlFor="documentType">Document Name:</label>
  <input
  value={docName}

   class=" input" type="text" id="documentName" name="documentName" required />
  </div>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <div class="fm">
  <label htmlFor="documentFile">Document File:</label>
  <input
  value={docFile}
  
  class=" input" type="text" id="documentFile" name="File" required />
  </div>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <div class="fm">
  <label htmlFor="documentSize">Document Size:</label>
  <input
  
  value={docSize}
   class=" input" type="text" id="documentSize" name="documentSize" required />
  </div>
 
  </div>
  <br></br>

  <Link to="/document">Back</Link>
 
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

export default View
