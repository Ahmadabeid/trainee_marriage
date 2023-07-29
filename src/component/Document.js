import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import axios from 'axios'




const Document = () => {
  const {docId} = useParams();
  const[document, setDocument]=useState([]);
 
  useEffect(()=>{
    loadDocument();
  }, []);

  
const headers={
  Authorization: 'Basic QWhtYWQ6MTIz',
}


  const loadDocument =async()=>{
    const fetch = await axios.get("http://localhost:8085/document/getDocuments",{headers});
    setDocument(fetch.data);
  };

  const deleteDocument =async(docId)=>{
    await axios.delete(`http://localhost:8085/document/deleteDocumentById/${docId}`,{headers});
    loadDocument();
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
          <h1>Document List</h1>
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
  <section className="content">
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
                
        <div className="col-sm-2">
            <Link to="/documentForm">
        <button type="button" class="btn btn-block btn-outline-success btn-sm " >
        <i class="fa fa-plus-alt"></i> Add Document</button>
        </Link>
        </div>
        
            </div>
          
            <div className="card-body">
              <table id="example2" className="table table-bordered table-hover">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>File</th>
                    <th>SIze</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {
                document.map((document, index)=>(
                  
                  <tr>
                   
                    <td key={index}>{index+1}</td>
                    <td>{document.docName}
                    </td>
                    <td>{document.docFile}</td>
                    <td> {document.docSize}</td>

                    <td><center>
                        
                    <Link to ={`/viewDocument/${document.docId}`}class="btn btn-info">
                            <span class="glyphicon glaphycon-check-alt"></span>
                            <i class="fas fa-eye"></i>
                           
                        </Link>&nbsp;

                        {/* <Link to="/documentForm">
        <button type="button" class="btn btn-block btn-outline-success btn-sm " >
        <i class="fa fa-plus-alt"></i> Add Document</button>
        </Link> */}

                       {/* same as battan ya kuview  path*/}

                       <Link to ={`/updateDocument/${document.docId}`}class="btn btn-primary">
                            <span className="glyphicon glaphycon-check-alt"></span>
                            <i className="fa fa-edit"></i>
                           
                        </Link> &nbsp; 
                       
                        <button type="button" className=" trash btn btn-danger col-sm-2" onClick={()=> deleteDocument(document.docId)}>
                        <span className="glyphicon glaphycon-trash-alt"></span>
                            <i class="fas fa-trash-alt"></i>
                        </button>
                        </center>
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

export default Document
