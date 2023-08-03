import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom' 
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import axios from 'axios'
import './QueAnsForm.css'

function QueAnsForm () {
  const navigateToQueAns = useNavigate();
  
  const[QueAns, setQueAns] = useState({
    queContent:"",
    ansContent:"",
    topic:"",
    comment:""
  });
  const handleChange=(e)=>{
    setQueAns({...QueAns, [e.target.name]: e.target.value});

  };

  const headers={
    Authorization: `Basic QWhtYWQ6MTIz}`,
  }
  

  const onSubmit=async(e)=>{
    e.preventDefault();
    await axios.post("http://localhost:8085/queAns/addQueAns", QueAns,{headers});
    navigateToQueAns("/queAns");

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
          <h1>QueAns Form</h1>
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
                    {/* <Link to="/queAns">
                <button type="button" class="btn btn-block btn-outline-success btn-sm " >
                <i class="fa fa-plus-alt"></i>QueAns List</button>
                </Link> */}
            
    <div class="container mt-5">
    <form class="form" onSubmit={(e)=>onSubmit(e)}>
    <div className="form-group">
    <label htmlFor="topic">Topic:</label>
    <input type="text" 
    className="form-control" 
    id="topic" 
    name="topic"
    onChange={(e) =>handleChange(e)}
     />
  </div>
    <div className="form-group">
    <label htmlFor="queContent">QueContent:</label>
    <textarea className="form-control" 
    id="queContent"
    name="queContent" 
    type="text"
    onChange={(e) =>handleChange(e)}
     />
  </div>

    

   <div className="form-group">
    <label htmlFor="ansContent">AnsContent:</label>
    <textarea className="form-control" 
    id="ansContent" 
    name="ansContent"
    type="text"
    onChange={(e) =>handleChange(e)} 
     />
  </div>


 
 
  <div className="form-group">
    <label htmlFor="comment">Comment:</label>
    <textarea 
    className="form-control" 
    id="comment" 
    name="comment" 
    onChange={(e) =>handleChange(e)} />
  </div>
  
  <div className="col-sm-2">
        <button type="submit" class="btn btn-block btn-outline-success btn-sm" >Save</button>
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
    
    
    </>
  )
}

export default QueAnsForm
