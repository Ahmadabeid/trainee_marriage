import React,{ useEffect, useState } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import './ViewDocument.css'
import axios from 'axios'
import { useParams, Link } from 'react-router-dom'

const ViewResource = () => {
    const[resource,setResource ]=useState({  
        
        resType:"",
        resName: "",
        resContent:"",
        resFile:"",
        resDate:""
    }
);

      const {resId} = useParams();
    
      useEffect(()=>{
        loadResource();
      }, []);

      
const headers={
  Authorization: 'Basic QWhtYWQ6MTIz',
}
    
      const onSubmit = async (e) =>{
        e.preventDefault();
    
      }
      
    
      const {resType, resName, resContent, resFile, resDate} =resource;
      const loadResource =async()=>{
        const fetch = await axios.get(`http://localhost:8085/resource/getResourceById/${resId}`,{headers});
        setResource(fetch.data);
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
      <h1>View Resource</h1>
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
      <div className="col-sm-2">
      <div class="form-container">

      <form className="shadow-md border-t-4 border-sky-400 rounded-lg px-8 pt-6 pb-8 mb-4" onSubmit={(e)=>onSubmit(e)}>
<div class="flex">

<div class="fm">
<label htmlFor="documentType">Resource Type:</label>
<input
value={resType}

class=" input" type="text" id="resType" name="resType" required />
</div>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<div class="fm">
<label htmlFor="resName">Resource Name:</label>
<input
value={resName}

class=" input" type="text" id="resName" name="resName" required />
</div>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<div class="fm">
<label htmlFor="documentSize">Resource Content:</label>
<input
value={resContent}
class=" input" type="text" id="resContent" name="resContent" required />
</div>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;



<div class="fm">
<label htmlFor="documentSize">Resource File:</label>
<input
value={resFile}
class=" input" type="text" id="resFile" name="resFile" required />
</div>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<div class="fm">
<label htmlFor="resDate">Resource Date:</label>
<input
value={resDate}
class=" input" type="text" id="resDate" name="resDate" required />
</div>
</div>



<br></br>

<Link to="/resource">Back</Link>

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

export default ViewResource
