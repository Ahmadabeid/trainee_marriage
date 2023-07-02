import React, { useState,useEffect } from 'react'
import axios from 'axios'
import{Link,useNavigate, useParams} from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import './DocumentForm.css'

<script>
  function showAlert() {'{'}
  alert("Update successful!");
  {'}'}
</script>

function UpdateDocument(){
    let navigate=useNavigate();
    const{docId}=useParams();

    const [document, setDocument] = useState({
        docType :"",
        docName:"",
        docSize:""
    });

    const{ docType, docName, docSize} =document;

    const onInputChange=(e) =>{
        setDocument({...document, [e.target.name]: e.target.value});
    };
    useEffect(() =>{
        loadDocument()
    }, []);  
    
    const onSubmit =async (e)=>{
        e.preventDefault();

        await axios.put(`http://localhost:8080/Document/updateDocument/${docId}`, document);
        navigate("/document");
    }

    const loadDocument =async ()=>{
        const fetch= await
        axios.get(`http://localhost:8080/Document/getDocumentById/${docId}`)
        setDocument(fetch.data);
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
      <h1>Update Document</h1>
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
          <div className="col-sm-4">
          <div class="form-container">
            <h3> Update Document</h3>
            <form onSubmit={(e) => onSubmit(e)}>
  <div className="form-group">
    <label  htmlFor="docType">
      Document Type
    </label>
    <input
     
      name="docType"
      type="text"
      value={docType}
      placeholder=""
      onChange={(e) => onInputChange(e)}
    />
  </div>
  <div className="form-group">
    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="docName">
      Document Name
    </label>
    <input
     
      name="docName"
      type="text"
      value={docName}
      placeholder=""
      onChange={(e) => onInputChange(e)}
    />
  </div>
  <div className="form-group">
    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="docSize">
      Document Size
    </label>
    <input
     
      name="docSize"
      type="text"
      value={docSize}
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

export default UpdateDocument
