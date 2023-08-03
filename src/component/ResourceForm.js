import React, {useState,}from 'react'
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { Link, useNavigate } from 'react-router-dom'
import './ResourceForm.css';
import axios from 'axios';



function ResourceForm(){
  const navigateToResource = useNavigate();
  const[resource,setResource ]=useState({  
        
            resType:"",
            resName: "",
            resContent:"",
            resFile:"",
            resDate:""
        }
  );

  const handleChange = (e) => {
    setResource({...resource, [e.target.name]: e.target.value });
    
};

const headers={
  Authorization: `Basic QWhtYWQ6MTIz}`,
}

const onSubmit= async(e)=>{
  e.preventDefault();
  await axios.post("http://localhost:8085/resource/addResource", resource,{headers});
  navigateToResource("/resource");

}



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


  return (
    <>
    <Sidebar/>
    <Navbar/>
   <div className="content-wrapper">
   <section className="content-header">
    <div className="container-fluid">
      <div className="row mb-2">
        <div className="col-sm-6"> 
          <h1>Resource Form</h1>
        </div>
        
        <div className="col-sm-6">
          <ol className="breadcrumb float-sm-right">
            <li className="breadcrumb-item"><a href="#">Home</a></li>
            <li className="breadcrumb-item active">Resource </li>
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
                    <Link to="/resource">
                <button type="button" class="btn btn-block btn-outline-success btn-sm " >
                <i class="fa fa-plus-alt"></i> Resource List</button>
                </Link>
                </div>
                
                    </div>
                    <form class="form" onSubmit={(e)=>onSubmit(e)}>
  <div className="card-body">
    <div class="flex" >
    <div class="form-group">
    <label for="resType">Resource Type:</label>
    <input
      type="text"
      class="form-control"
      id="resType"
      name="resType"
      onChange={(e) =>handleChange(e)}
      placeholder="Enter resource type"
      required
    />
  </div>
  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <div class="form-group">
    <label for="resName">Resource Name:</label>
    <input
      type="text"
      class="form-control"
      id="resName"
      name="resName"
      onChange={(e) =>handleChange(e)}
      placeholder="Enter resource name"
      required
    />
  </div>
 &nbsp;  &nbsp;  &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp; <div class="form-group">
    <label for="resContent">Resource Content:</label>
    <input
      type="text"
      class="form-control"
      id="resContent"
      name="resContent"
      
      onChange={(e) =>handleChange(e)}
      placeholder="Enter resource content"
      required
    />
  </div>
  </div>
  
  <div class="flex">
  <div class="form-group">
    <label for="resType">Resource Date:</label>
    <input
      type="text"
      class="form-control"
      id="resDate"
      name="resDate"
      onChange={(e) =>handleChange(e)}
      placeholder="Enter resource date"
      required
    />
  </div>
  &nbsp;  <div class="form-group" id="form2">
   <label for="resFile">Resource File:</label>
    <input
      type="file"
      class="form-control" 
      id="resFile"
      title="file"
      placeholder="Enter resource file"
      name="resFile"
      accept='application/pdf'
    
      onChange={(e) =>handleChange(e)}
    //   onChange={onCertificateAttach}
      
      // ref={(input)=>{this.certificateFile=input;}}
      
      
      
    />
  </div>
  </div>
 

  
 
  <div className="card-footer">
        <div className="col-sm-2">
        <button type="submit" class="btn btn-block btn-outline-success btn-sm" >Save</button>
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
  );
};


export default ResourceForm
