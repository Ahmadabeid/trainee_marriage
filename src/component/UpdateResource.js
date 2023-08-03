import React, { useState,useEffect } from 'react'
import axios from 'axios'
import{Link,useNavigate, useParams} from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import './DocumentForm.css'

function UpdateResource (){
    let navigate=useNavigate();
    const{resId}=useParams();

    const [resource, setResource] = useState({
        resType :"",
        resName:"",
        resContent:"",
        resFile:"",
        resDate:""
    });

    const{ resType, resName, resContent, resFile, resDate} =resource;

    const onInputChange=(e) =>{
        setResource({...resource, [e.target.name]: e.target.value});
    };
    useEffect(() =>{
        loadResource()
    }, []); 
    
    const headers={
      Authorization: `Basic QWhtYWQ6MTIz}`,
    }
    
    
    const onSubmit =async (e)=>{
        e.preventDefault();

        await axios.put(`http://localhost:8085/resource/updateResource/${resId}`, resource,{headers});
        navigate("/resource");
    }

    const loadResource =async ()=>{
        const fetch= await
        axios.get(`http://localhost:8085/resource/getResourceById/${resId}`,{headers})
        setResource(fetch.data);
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
      <h1>Update Resource</h1>
    </div>
    
    <div className="col-sm-6">
      <ol className="breadcrumb float-sm-right">
        <li className="breadcrumb-item"><a href="#">Home</a></li>
        <li className="breadcrumb-item active">Resource</li>
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
            <h3> Update Resource</h3>
            <form onSubmit={(e) => onSubmit(e)}>
        <div className="di-flex-container">
  <div className="form-group">
    <label  htmlFor="docType">
      Resource Type
    </label>
    <input
     
      name="resType"
      type="text"
      value={resType}
      placeholder=""
      onChange={(e) => onInputChange(e)}
    />
  </div>
  <div className="form-group">
    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="docName">
      Resource Name
    </label>
    <input
     
      name="resName"
      type="text"
      value={resName}
      placeholder=""
      onChange={(e) => onInputChange(e)}
    />
  </div>
  <div className="form-group">
    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="docSize">
      Resource Content
    </label>
    <input
     
      name="resContent"
      type="text"
      value={resContent}
      placeholder=""
      onChange={(e) => onInputChange(e)}
    />
  </div>
  </div>
  <div className="di-flex-container">
  <div className="form-group">
    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="docSize">
      Resource File
    </label>
    <input
     
      name="resFile"
      type="text"
      value={resFile}
      placeholder=""
      onChange={(e) => onInputChange(e)}
    />
  </div>
  <div className="form-group">
    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="docSize">
      Resource Date
    </label>
    <input
     
      name="resDate"
      type="text"
      value={resDate}
      placeholder=""
      onChange={(e) => onInputChange(e)}
    />
  </div>
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

export default UpdateResource
