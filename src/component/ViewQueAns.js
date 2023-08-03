import React,{ useEffect, useState } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import axios from 'axios'
import { useParams, Link } from 'react-router-dom'

const ViewQueAns = () => {
    const[queAns, setQueAns] = useState({
        queContent:"",
        ansContent:"",
        topic:"",
        comment:""
    });
    const {queAnsId} = useParams();

    useEffect(() => {
        loadQueAns();
    }, []);

    const headers={
      Authorization: `Basic QWhtYWQ6MTIz}`,
    }
    
  const onSubmit = async (e) =>{
    e.preventDefault();

  }
  const {queContent, ansContent, topic, comment} =queAns;
  const loadQueAns =async()=>{
    const fetch = await axios.get(`http://localhost:8085/queAns/getQueAnsById/${queAnsId}`,{headers});
    setQueAns(fetch.data);
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
      <h1>View QueAns</h1>
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
      <div className="col-sm-6">
      <div class="form-container">
      <form className="shadow-md border-t-4 border-sky-400 rounded-lg px-8 pt-6 pb-8 mb-4" onSubmit={(e)=>onSubmit(e)}>
    
    <div class="fm">
  <label htmlFor="topic">Topic:</label>
  <input
  value={topic}
   class=" input" 
   type="text" 
   id="topic" 
   name="topic" 
   required />
  </div>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    
    <div class="fm">
  <label htmlFor="queContent">Question Content:</label>
  <input
  value={queContent}

   class=" input" type="text" id="queContent" name="queContent" required />
  </div>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <div class="fm">
  <label htmlFor="ansContent">Answer Content:</label>
  <input
  value={ansContent}
  
  class=" input" type="text" id="AnsContent" name="AnsContent" required />
  </div>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <div class="fm">
  <label htmlFor="ansContent">Comment:</label>
  <input
  value={comment}
  
  class=" input" type="text" id="comment" name="content" required />
  </div>
  

  <Link to="/queAns">Back</Link>
 
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



export default ViewQueAns
