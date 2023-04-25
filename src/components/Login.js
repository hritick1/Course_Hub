import axios from 'axios';
import React, { useSyncExternalStore } from 'react';
import { useState } from 'react';
import { json, useNavigate } from 'react-router-dom/dist';
// chrome.exe --user-data-dir="C://Chrome dev session" --disable-web-security
const Login = () => {
const navigate=useNavigate();
const [User, setUser] = useState([]);
const [token, setToken] = useState("");

const handleForm=(e)=>{
  e.preventDefault();
  console.log(User);
login(User);

// navigate('/viewCourses')
setUser1();
// console.log(token);
// getCurrentUser();
// findUser();
 }

 const login=(data)=>{
 
  axios.post('https://jwt-auth-t0qc.onrender.com/login',data).
  then((response)=>{console.log(response);});
   console.log(document.cookie);
 }
 const setUser1=()=>{
   
 }


 const handleChange=(e)=>{
  const value=e.target.value;
  setUser({...User,[e.target.name]:value});
 }

       const signUp=()=>{
navigate(`/signUp`);
       }

    return <div>
        <div className="container-fluid position-relative" style={{backgroundColor:"#4E6C50",height:"90vh"}} >
        <div className="card position-absolute top-50 start-50 translate-middle align-items-center w-50 h-auto" style={{backgroundColor:"#FAECD6"}}>
  <div className="card-body ">
    <h4 className="card-title ps-5 text-secondary mx-5">Login</h4>
    <form onSubmit={handleForm}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="text" className="form-control" name="email"id="email"value={User.email} onChange={(e)=>handleChange(e)} aria-describedby="name"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" name="password"value={User.password} onChange={(e)=>handleChange(e)} id="password"/>
  </div>
  <button type="submit" className="btn btn-primary ms-5" style={{backgroundColor:"#4E6C50"} }>Submit</button>
  <button type="button" className="btn btn-primary ms-5" onClick={signUp}style={{backgroundColor:"#4E6C50"}}>SignUp</button>
  
</form>
  </div>
</div> </div>
    </div>;
}

export default Login;