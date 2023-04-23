// import axios from 'axios';
// import React, { useSyncExternalStore } from 'react';
// import { useState } from 'react';
// import { json, useNavigate } from 'react-router-dom/dist';

// const Login = () => {
// const navigate=useNavigate();
// const [User, setUser] = useState([]);

// const config = {
//   headers:{
//     Authorization:"Bearer "+localStorage.getItem('token')
//   }
// };

// const handleForm=(e)=>{
//   e.preventDefault();
//   console.log(User);
// generateToken(User);
//  }
//  const generateToken=(data)=>{
//      axios.post("http://localhost:8080/generate-token",data).then
//      ((response)=>{console.log(response.data.token);
//       logoutUser();
//       userLogin(response.data.token);
//       console.log(localStorage.getItem('token'));
//       getCurrentUser();},
//      (error)=>{console.log(error)});
//  }
//  const getCurrentUser=()=>{
//  axios.get("http://localhost:8080/current-user",config).then
//  ((response)=>{console.log(response.data);setuser(response.data)},
//  (error)=>{console.log(error)});
//  }
//  const userLogin=(token)=>{
//   localStorage.setItem('token',token);
//   return true;
//  }
//  const isLoggedIn=()=>{
//   let tokenStr=localStorage.getItem('token');
//   if(tokenStr==undefined || tokenStr=='' ||tokenStr==null){
//     return false;
//   }
//   return true;
//  }
//  const logoutUser=()=>{
//   localStorage.removeItem('token');
//   return true;
// }
// const setuser=(user)=>{
// localStorage.setItem('user',JSON.stringify(user));
// }
// const getuser=(user)=>{
//   let userStr=localStorage.getItem('user');
//   if(userStr!=null){
//     return JSON.parse(userStr);
//   }
//   else{
//     logoutUser();
//     return null;
//   }
// }
// const getUserRole=()=>{
//   let user=getuser();
//   return user.authorities[0].authority;
// }

//  const handleChange=(e)=>{
//   const value=e.target.value;
//   setUser({...User,[e.target.name]:value});
//  }

//        const signUp=()=>{
// navigate(`/signUp`);
//        }

//     return <div>
//         <div className="container-fluid position-relative" style={{backgroundColor:"#4E6C50",height:"90vh"}} >
//         <div className="card position-absolute top-50 start-50 translate-middle align-items-center w-50 h-auto" style={{backgroundColor:"#FAECD6"}}>
//   <div className="card-body ">
//     <h4 className="card-title ps-5 text-secondary mx-5">Login</h4>
//     <form onSubmit={handleForm}>
//   <div className="mb-3">
//     <label for="exampleInputEmail1" className="form-label">Email address</label>
//     <input type="text" className="form-control" name="name"id="name"value={User.name} onChange={(e)=>handleChange(e)} aria-describedby="name"/>
//     <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
//   </div>
//   <div className="mb-3">
//     <label for="exampleInputPassword1" className="form-label">Password</label>
//     <input type="password" className="form-control" name="password"value={User.password} onChange={(e)=>handleChange(e)} id="password"/>
//   </div>
//   <button type="submit" className="btn btn-primary ms-5" style={{backgroundColor:"#4E6C50"} }>Submit</button>
//   <button type="button" className="btn btn-primary ms-5" onClick={signUp}style={{backgroundColor:"#4E6C50"}}>SignUp</button>
  
// </form>
//   </div>
// </div> </div>
//     </div>;
// }

// export default Login;







//Trying
import axios from 'axios';
import React, { useSyncExternalStore } from 'react';
import { useState } from 'react';
import { json, useNavigate } from 'react-router-dom/dist';

const Login = () => {
const navigate=useNavigate();
const [User, setUser] = useState([]);



const handleForm=(e)=>{
  e.preventDefault();
  console.log(User);
login(User);
// getCurrentUser();
// findUser();
 }

 const login=(User)=>{

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
    <input type="text" className="form-control" name="name"id="name"value={User.name} onChange={(e)=>handleChange(e)} aria-describedby="name"/>
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