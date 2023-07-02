import React from 'react'
import { Link } from 'react-router-dom'
import Sidebar from './Sidebar';
import './UserForm.css'


class UserForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        firstName:'',
        middleName:'',
        lastName:'',
        username: '',
        email: '',
        address: '',
        age: '',
        gender: '',
        password: '',
        phoneNumber: '',
        qualification: '',
        role: '',
        authority: '',
      };
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
      };
    
      handleSubmit = (e) => {
        e.preventDefault();
        console.log('FirstName:',this.state.firstName);
        console.log('MiddleName:',this.state.middleName);
        console.log('LastName:',this.state.lastName);
        console.log('Username:', this.state.username);
        console.log('Email:', this.state.email);
        console.log('Address:', this.state.address);
        console.log('Age:', this.state.age);
        console.log('Gender:', this.state.gender);
        console.log('Password:', this.state.password);
        console.log('Phone Number:', this.state.phoneNumber);
        console.log('Qualification:', this.state.qualification);
        console.log('Role:', this.state.role);
        console.log('Authority:', this.state.authority);
      };

      
    
      render() {
        return (
            <>
              <Sidebar/>
              
              <div className="content-wrapper">
              
              <section className="content-header">
    <div className="container-fluid">
      <div className="row mb-2">
        <div className="col-sm-6"> 
          <h1>Participant Form</h1>
        </div>
        
        <div className="col-sm-6">
          <ol className="breadcrumb float-sm-right">
            <li className="breadcrumb-item"><a href="#">Home</a></li>
            <li className="breadcrumb-item active">Participant</li>
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
                    <Link to="/participant">
                <button type="button" class="btn btn-block btn-outline-success btn-sm " >
                <i class="fa fa-plus-alt"></i> Participant List</button>
                </Link>
                </div>
                
                    </div>
            
       <form onsubmit="{this.handleSubmit}" class="user-form">
            <div class="form-group">
               
            <div class="form1" >
            <div id="margin">

            <label>First name:</label>
            <input type="text" name="username"  onchange="{this.handleChange}" required />
            </div>
            <div class="margin"> 
              
            <label>Middle name:</label>
            <input type="text" name="middlename"  onchange="{this.handleChange}" required />
            </div>
            <div class="margin"> 
            <label>Last name:</label>
            <input type="text" name="lastname"  onchange="{this.handleChange}" required />
            </div>
            <div class="margin"> 
            <label>Username:</label>
            <input type="text" name="username"  onchange="{this.handleChange}" required />
            </div>
            </div>

            <div class="form2">
           
           
            <div id="margin">
            <label>Email:</label>
            <input type="email" name="email"  onchange="{this.handleChange}" required />
            </div>
            <div class="margin"> 
            <label>Address:</label>
            <input type="text" name="address"  onchange="{this.handleChange}" required />
            </div>
            <div class="margin"> 
            <label>Age:</label>
            <input type="text" name="age"  onchange="{this.handleChange}" required />
            </div>
            
            
            <div class="margin"> 
            <label>Gender:</label>
            <select name="gender" onchange="{this.handleChange}" required>
                <option value>Select </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
               
            </select>
            </div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </div>
            <div class="form3">
            
            <div id="margin">
            <label>Password:</label>
            <input type="password" name="password"  onchange="{this.handleChange}" required />
            </div> 
            <div class="margin">
            <label>Phone Number:</label>
            <input type="text" name="phoneNumber"  onchange="{this.handleChange}" required />
            </div>
            <div class="margin">
            <label>Qualification:</label>
            <input type="text" name="qualification"  onchange="{this.handleChange}" required />
            </div>
            </div>
            <div class="form4">
            <div id="margin">
            <label>Role:</label>
            <input type="text" name="role"  onchange="{this.handleChange}" required />
            </div>
            
            <div class="margin">
            <label>Authority:</label>
            <input type="text" name="authority"  onchange="{this.handleChange}" required />
            </div>
            </div>
            <div>
            <br></br>
            <button type="submit" id="margin">Save</button>
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
}

export default UserForm
