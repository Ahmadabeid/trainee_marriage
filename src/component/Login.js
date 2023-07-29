import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Slide from '@mui/material/Slide';
import { uswContext} from 'react';
import axios from 'axios';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
export default function Login() {
 const[open, setOpen] =React.useState(false);
 const [role, setRole] = useState('');
  const [user_id, setUserId] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();



 const handleClickOpen = () => {
  setOpen(true);
};

const handleClose = () => {
  setOpen(false);
};

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.post('api/login/', {
      email,
      password
    }, { withCredentials: true }); 


    // Check if login was successful
  
          navigate('/technician');
          setEmail('');
          setPassword('');
          setIsValidEmail(true);
  
  } catch (error) {
    // Handle API errors
    console.error('Error:', error.message);

    }
  };


   return (
        <>
          <div className="hold-transition login-page">
            <div className="login-box">
              <div className="login-logo">
                <a href="../../index2.html"><b>Trainee</b>Marriage</a>
              </div>
              <div className="card">
                <div className="card-body login-card-body">
                  <p className="login-box-msg"><i>Login Here</i></p>
                  <form >
                    <div className="input-group mb-3">
                      <input 
                      type="email" 
                      className="form-control" 
                      placeholder="Email"
                      required />
                      <div className="input-group-append">
                        <div className="input-group-text">
                          <span className="fas fa-envelope" />
                        </div>
                      </div>
                    </div>
                    <div className="input-group mb-3">
                      <input 
                      type="password" 
                      className="form-control"
                       placeholder="Password"
                        required />
                      <div className="input-group-append">
                        <div className="input-group-text">
                          <span className="fas fa-lock" />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-8">
                        <div className="icheck-primary">
                          <input type="checkbox" id="remember" />
                          <label htmlFor="remember">Remember Me</label>
                        </div>
                      </div>
                      <div className="col-4">
                      <Link to="/home">
                        
                        <button type="button" className="btn btn-primary btn-block">Login</button>
                        </Link>
                      </div>
    
    
                      {/* <Link to="/queAnsForm">
                    <button type="button" class="btn btn-block btn-outline-success btn-sm " >
                    <i class="fa fa-plus-alt"></i> Add QueAns</button>
                    </Link> */}
                    </div>
                  </form>
                  <div className="social-auth-links text-center mb-3">
                    <p>- OR -</p>
                    <a href="#" className="btn btn-block btn-primary">
                      <i className="fab fa-facebook mr-2" /> Sign in using Facebook
                    </a>
                  </div>
                  <p className="mb-1">
                    <a href="forgot-password.html">I forgot my password</a>
                  </p>
                  <p className="mb-0">
                    <a href="register.html" className="text-center">Register</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
  )
}

