import React,{useState} from 'react'
import './Login.css'
import logomufti from './Asset/logomufti.png';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();



        if (email && password) {
            
            console.log('Logged in successfully!');
        } else {
            console.log('Please fill in all fields!');
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
          <img src={logomufti} alt="logomufti" class="image"/>

          

          
            {/* <p> 
              Coreehsdghgsdhjgdshjgdsjhsd
              sddshgsdjhgsdjhghjsdvfdghghgd
              dshgsdjhgsdhfjhsdfgdsfdsfsdf
              sdgsdhgsdjhgsdjhsdjhshdsfdsfsd
              gfsaghdfghfagfasgfasghfahgadsfg
              ajsgfjaghfdhgasdfghasfhgasfhgdag
              asfashgfaghfgadsfhadsgfashgfa
              jhfsajfasfsahfsahjfsafhsafhfsa
              asjfsafsahgfsahgfsaghfsahgfsahgsa
              asgfsahgfsahgfsaghfsaghsafghsf
              sahgshasafhgashfsagfsafhgsfgsa
            </p> */}
           
          
            
            
            
          
        </div>
     <form onsubmit="{handleSubmit}" > 
     {/* class="card"> */}
      {/* <div id="card"></div> */}
  <h2>Login Here</h2>
  <div>
    <label htmlfor="email">Email:</label>
    <input type="email" id="email" defaultvalue="{email}" onchange="{handleEmailChange}" required />
  </div>
  <div>
    <label htmlfor="password">Password:</label>
    <input type="password" id="password" defaultvalue="{password}" onchange="{handlePasswordChange}" required />
  </div>
  <br></br>
  <br></br>
  <div class="remember-con">
                <input type="checkbox" name="username" id="uname" />
                &nbsp;
                <span>Remember me</span>
              </div>
  <div>
  <button type="submit">Login
  <span class="fas fa fa-sign-in"></span>
  </button>
  </div>
</form>
</div>
</div>


            
            </>
        );
    };


export default Login
