import React from 'react'
import './UserAdmin.css'
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { Link } from 'react-router-dom';


class UserAdmin extends React.Component {
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
      regNo: '',
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

render = ({users, onView, onEdit, onDelete }) => {
  return (
    <>
    <Navbar/>
    <Sidebar/>
    <div class="content-wrapper">
    <section className="content-header">
    <div className="container-fluid">
      <div className="row mb-2">
        <div className="col-sm-6"> 
          <h1>Trainee Form</h1>
        </div>
        
        <div className="col-sm-6">
          <ol className="breadcrumb float-sm-right">
            <li className="breadcrumb-item"><a href="#">Home</a></li>
            <li className="breadcrumb-item active">Trainee</li>
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
                    <Link to="/trainee">
                <button type="button" class="btn btn-block btn-outline-success btn-sm " >
                <i class="fa fa-plus-alt"></i> Add Trainee</button>
                </Link>
                </div>
    <div className="table-container">
    <table>
      <thead>
        <tr>
          <th>Id</th>  
          <th>First Name</th>
          <th>Middle Name</th>
          <th>Last Name</th>
          <th>Age</th>
          <th>Address</th>
          <th>Phone Number</th>
          <th>Registration Number</th>
          <th>Username</th>
          <th>Email</th>
          <th>Password</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr key={user.id}>
            <td>{user.firstName}</td>
            <td>{user.middleName}</td>
            <td>{user.lastName}</td>
            <td>{user.age}</td>
            <td>{user.address}</td>
            <td>{user.phoneNumber}</td>
            <td>{user.regNo}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{user.password}</td>
            <td>
              <button onClick={() => onView(user.id)}>View</button>
              <button onClick={() => onEdit(user.id)}>Edit</button>
              <button onClick={() => onDelete(user.id)}>Delete</button>
           </td>
          </tr>
        ))}
      </tbody>
    </table>
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
}

export default UserAdmin
