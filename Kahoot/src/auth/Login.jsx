import React, {useState} from 'react'
import  './Login.css'
import {Link, useNavigate} from "react-router-dom";

function Login() {
     const userProfile={
          email: '',
          password: '',

     };
     const [userInput,setUserInput] = useState(userProfile);

     const handleUserInput = (event) => {
          const {name,value} = event.target;
          setUserInput((prev) => ({
               ...prev,
               [name]:value.trim()}))
          event.preventDefault();
     }
     const submitHandler =async (event) => {
          event.preventDefault();

     }
     const navigate = useNavigate();
     return (
         <div className="logIn" onClick={submitHandler}>
              <div className="form">
                   <h1>Login</h1>
                   <form>
                        <div >
                             <input type='email'
                                    onChange={handleUserInput}
                                    placeholder='Email address'
                                    required/>
                        </div>
                        <div>
                             <input type='password'
                                    onChange={handleUserInput}
                                    placeholder='Password'
                                    required/>
                        </div>
                        <div className="buttonContainer">
                             <button onClick={() =>
                                 navigate("/login")}
                                     type='submit' >Login</button>

                             <div className="signUpContainer">
                                  <label>Don't have an account?</label>
                                  <button  onClick={() =>
                                      navigate("/signup")}
                                           type='submit'>Sign Up</button>
                             </div>
                        </div>
                        <div className="forgetPassword">
                             <Link to="/">forget password</Link>
                        </div>
                   </form>
              </div>
         </div>
     )
}
export default Login