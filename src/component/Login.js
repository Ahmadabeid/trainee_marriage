import React, { useState } from "react";
import "./Login.css";
import logomufti from "./Asset/logomufti.png";
import { Link, useNavigate, useLocation } from "react-router-dom";
import AuthContext from "./AuthProvider";

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");


  // const handleUsernameChange = (event) => {
  //     setUsername(event.target.value);
  // };

  // const handlePasswordChange = (event) => {
  //     setPassword(event.target.value);
  // };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const credentials = {
      username,
      password,
    };

    try {
      const response = await fetch("http://localhost:8085/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      if (response.ok) {
        var data = await response.json();
        console.log(response.headers);
        // console.log(data.role);
        navigate("/home", { state: { role: data.role } });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div class="login-container" id="login-con">
        <div class="inner-login-con">
          <div class="left-login-info">
            <h1 class="h-logo">
              {/* <span class="fas fa fa-laptop"></span> */}
              <br></br>
              Trainee<br></br>Marriage System
            </h1>
            {/* <img src="./Asset/logoMufti.png"/> */}
            <img src={logomufti} alt="logomufti" class="image" />
          </div>
          <form onSubmit={handleSubmit}>
            {/* class="card"> */}
            {/* <div id="card"></div> */}
            <h2>Login Here</h2>
            <div>
              <label htmlfor="username">Username:</label>
              <input
                type="username"
                id="username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlfor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <br></br>
            {/* <div class="remember-con">
                <input type="checkbox" name="username" id="uname" />
                &nbsp;
              </div> */}
            <div>
              <button type="submit" class="btn btn-success batan">
                Login
              </button>
              <button
                className="btn btn-success batan"
                onClick={() => {
                  navigate("/register");
                }}
              >
                {" "}
                Register
              </button>
            </div>
            <div></div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
