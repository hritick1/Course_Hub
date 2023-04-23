import React from 'react';
import axios from 'axios';
import base_url from './Apis';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom/dist';


const Courses = (props) => {
const navigate=useNavigate();
  const updateCourse=(e,id)=>{
    e.preventDefault();
    navigate(`/updateCourse/${id}`);
  }

  const deleteCourse =(id)=>{
    var course="";
    axios.get(`${base_url}/${id}`).then((response)=>{console.log(response.data);course=response.data.title},()=>{});
    axios.delete(`${base_url}/${id}`).then((response)=>{console.log("delete Sucessfull");{props.updateData(course)}},(error)=>{console.log("Error in deleting")});
}
    return <div>
        <ToastContainer/>
        <div className="card mt-3"style={{backgroundColor:"#FAECD6"}} >
  <div className="card-header fw-bold fs-4">
    {props.title}
  </div>
  <div className="card-body">
    <h5 className="card-title">{props.subject}</h5>
    <p className="card-text">{props.description}</p>
    <a href="#" className="btn btn-primary ms-5"onClick={(e)=>{updateCourse(e,props.id)}}style={{backgroundColor:"#4E6C50"}}>Update</a>
    <a href="#" className="btn btn-primary ms-5" onClick={()=>{deleteCourse(props.id)}}style={{backgroundColor:"#4E6C50"}}>Delete</a>
  </div>
</div>
    </div>;
}


export default Courses;