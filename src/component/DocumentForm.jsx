import React, {useState,}from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import './DocumentForm.css'


<<<<<<< HEAD
    


=======
>>>>>>> 46ff9eb49028ae9dbb4a50897874adf25fe21816
function DocumentForm(){
  const navigateToDocument = useNavigate();

  const[document, setDocument]=useState({
<<<<<<< HEAD
    
=======
>>>>>>> 46ff9eb49028ae9dbb4a50897874adf25fe21816
    docName:"",
    docFile:"",
    docSize:""
  });

  const [docFile, setDocFile]=useState("");
  const [docSize, setDocSize]=useState("");
  const[docName, setDocName]=useState("");

  const handleInputChange =(event) => {
    const name = event.target.name;
    const value = event.target.value;
    if (name === "docName") {
      setDocName(value);
  }
  else if(name === "docFile") {
    setDocFile(event.target.files[0]);
    setDocSize(formatFileSize(event.target.files[0].size));
  }
};

const handleSubmit= async(event)=>{
  event.preventDefault();
  const formData = new FormData();
  formData.append("docNme", docName);
  formData.append("file", docFile);
  try{
    const response = await axios.post("http://localhost:8085/document/addDocument,document");
    console.log(response.data);
  } catch(error){
    console.error(error);
  }
};

const formatFileSize =(size)=>{
  const kiloBytes = size / 1024;
  if(kiloBytes < 1){
    return size + "bytes";
  }
  const megaBytes =kiloBytes / 1024;
  if(megaBytes< 1){
    return kiloBytes + "KB";
  }
  const gigaBytes =megaBytes / 1024;
  if (gigaBytes < 1){
    return megaBytes + "MB";
  } return gigaBytes + "GB";
  
};

  

  const handleChange=(e)=>{
    setDocument({...document, [e.target.name]: e.target.value});
  };
  
const headers={
  Authorization: 'Basic QWhtYWQ6MTIz',
}

  const headers={
    Authorization: `Basic QWhtYWQ6MTIz}`,
  }
  

  const onSubmit= async(e)=>{
    e.preventDefault();
<<<<<<< HEAD
    await axios.post("http://localhost:8085/document/addDocument", document,{headers});
=======
    await axios.post("http://localhost:8080/Document/addDocument", document,{headers});
>>>>>>> 46ff9eb49028ae9dbb4a50897874adf25fe21816
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
                    <form onSubmit={(e) => onSubmit(handleSubmit)}>
  <div className="card-body">
    <div className="di-flex">
      <div className="form-group">
<<<<<<< HEAD
        <label htmlFor="docType">Document Name:</label>
=======
        <label htmlFor="docName">Document Name:</label>
>>>>>>> 46ff9eb49028ae9dbb4a50897874adf25fe21816
        <input
          type="text"
          
          id="docName"
          name="docName"
<<<<<<< HEAD
          onChange={(e) => handleChange(e)}
          placeholder="Enter document type"
=======
          onChange={ handleInputChange}
          placeholder="Enter document name"
>>>>>>> 46ff9eb49028ae9dbb4a50897874adf25fe21816
          required
        />
      </div>
      &nbsp; &nbsp;&nbsp;
      <div  >
<<<<<<< HEAD
        <label htmlFor="docName">Document File:</label>
=======
        <label htmlFor="docFile">Document File:</label>
>>>>>>> 46ff9eb49028ae9dbb4a50897874adf25fe21816
        <input
           class="control"
          type="file"
          id="docFile"
          title="file"
          onChange={handleInputChange}
          placeholder="Enter document file"
          name="docFile"
          accept="application/pdf"
        />
        
      </div>
      &nbsp;&nbsp;&nbsp;
      <div>{docSize}</div>
      {/* <div >
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
      </div> */}
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
