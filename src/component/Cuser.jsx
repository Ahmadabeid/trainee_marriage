import React from 'react';
import './Cuser.css';

const cuser = ({users, onView, onEdit, onDelete}) => {
  return (
    <>
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
    </>
  )
}

export default cuser;
