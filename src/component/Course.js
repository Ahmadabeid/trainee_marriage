// import React, {useEffect, useState} from 'react'
// import Navbar from './Navbar'
// import Sidebar from './Sidebar'
// import { Link, useParams } from 'react-router-dom'
// import axios from 'axios'

// const Course = () => {
//   const {courseId} = useParams();
//   const[course, setCourse]=useState([]);

//   useEffect(()=>{
//     loadCourse();
//   }, []);

//   const loadCourse =async()=>{
//     const fetch = await axios.get("http://localhost:8080/Course/getCourses");
//     setCourse(fetch.data);
//   };

//   const deleteCourse =async(courseId)=>{
//     await axios.delete(`http://localhost:8080/Course/deleteById/${courseId}`);
//     loadCourse();
//   };
//   return (
//     <>
//     <Navbar/> 
//       <Sidebar />
//    <div className="content-wrapper">
//   <section className="content-header">
//     <div className="container-fluid">
//       <div className="row mb-2">
//         <div className="col-sm-6">
//           <h1>Advanced Form</h1>
//         </div>
//         <div className="col-sm-6">
//           <ol className="breadcrumb float-sm-right">
//             <li className="breadcrumb-item"><a href="#">Home</a></li>
//           </ol>
//         </div>
//       </div>
//     </div>
//   </section>
//   <section className="content">
//     <div className="container-fluid">
//       <div className="card card-default">
//         <div className="card-header">
        
//         <div className="col-sm-2">
//         <button type="button" class="btn btn-block btn-outline-success btn-sm" >Course List</button>
//         </div>
        
//         </div>
//         <div className="card-body">
//           <div className="row">
//             <div className="col-md-6">
//               <div className="form-group">
//                 <label>NAME</label>
//                 <input type="name" class="form-control" id="exampleInputEmail1" placeholder="Enter name"></input>
//               </div>
//               <div className="form-group">
//                 <label>Disabled</label>
//                 <input type="name" class="form-control" id="exampleInputEmail1" placeholder="Enter name"></input>
//               </div>
//             </div>
//             <div className="col-md-6">
//               <div className="form-group">
//                 <label>Multiple</label>
//                 <input type="name" class="form-control" id="exampleInputEmail1" placeholder="Enter name"></input>
//               </div>
//               <div className="form-group">
//                 <label>Disabled Result</label>
//                 <select className="form-control select2" style={{width: '100%'}}>
//                   <option selected="selected">Alabama</option>
//                   <option>Alaska</option>
//                   <option disabled="disabled">California (disabled)</option>
//                   <option>Delaware</option>
//                   <option>Tennessee</option>
//                   <option>Texas</option>
//                   <option>Washington</option>
//                 </select>
//               </div>
//             </div>
//           </div>
//           <div className="row">
//             <div className="col-12 col-sm-6">
//               <div className="form-group">
//                 <label>Minimal </label>
//                 <select className="form-control select2 select2-danger" data-dropdown-css-class="select2-danger" style={{width: '100%'}}>
//                   <option selected="selected">Alabama</option>
//                   <option>Alaska</option>
//                   <option>California</option>
//                   <option>Delaware</option>
//                   <option>Tennessee</option>
//                   <option>Texas</option>
//                   <option>Washington</option>
//                 </select>
//               </div>
//             </div>
//             <div className="col-12 col-sm-6">
//               <div className="form-group">
//               <label>Disabled Result</label>
//               <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter email"></input>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="card-footer">
//         <div className="col-sm-2">
//         <button type="submit" class="btn btn-block btn-outline-success btn-sm" >Save</button>
//         </div>
//         </div>
//       </div>
     
  
//     </div>
//   </section>
// </div>

//     </>
//   )
// }

// export default Course
