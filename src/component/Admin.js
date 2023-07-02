import React from 'react';
import './Admin.css';
import Navbar from './Navbar';
import Sidebar from './Sidebar';




const Admin = () => {
  return (
    <>
    <Navbar/>
    <Sidebar/>
 <div>
 <div class="content-wrapper">
   
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
    
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
             
            </ol>
          </div>
        </div>
      </div>
    </section>


    <section class="content">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">PARTICIPANT LIST  </h3>
              </div>
              
              <div class="card-body">
                <table id="example2" class="table table-bordered table-hover">
                  <thead>
                  <tr>
                    <th>ID</th>
                    <th>FName</th>
                    <th>MName</th>
                    <th>LName</th>
                    <th>Uname</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Age</th>
                    <th>Gender</th>
                    <th>Password</th>
                    <th>Phone No</th>
                    <th>Qualification</th>
                    <th>Action</th>
                    
                   
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>Trident</td>
                    <td>Internet
                      
                    </td>
                    <td>Win 95+</td>
                    <td> 4</td>
                    <td>X</td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Trident</td>
                    <td>Internet
                      
                    </td>
                    <td>Win 95+</td>
                    <td>5</td>
                    <td>C</td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td></td>
                  </tr>
                  
                 
             
                 
                
                 
             
                
                </tbody>
                 
                </table>
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

export default Admin

