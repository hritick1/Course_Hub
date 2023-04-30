import React from 'react';
import { useState,useEffect } from 'react';
import axios from 'axios';
import base_url from './Apis';
import { ToastContainer, toast } from 'react-toastify';
const AddCourses = () => {
    
    useEffect(() => {
        document.title="Add Courses";
        }, []);
       const [Course, setCourse] = useState({});



       const handleForm=(e)=>{
        e.preventDefault();
        // console.log(Course);
        postDataToServer(Course);
setCourse({title:"",description:""});
// console.log(Course);
       }



     


       const postDataToServer=(data)=>{
          axios.post(`${base_url}/courses`,data).then(
            (response)=>{
         console.log(response);
         toast.success("Course added sucessfully");
            },
            (error)=>{

            }
          )
       }


       const handleChange=(e)=>{
        const value=e.target.value;
        setCourse({...Course,[e.target.name]:value});
       }


    return <div>
         <ToastContainer/>
        <div className="container-fluid position-relative" style={{backgroundColor:"#4E6C50",height:"90vh"}}>
        <div className="card position-absolute top-50 start-50 translate-middle align-items-center w-50 h-auto " style={{backgroundColor:"#FAECD6"}}>
  <div className="card-body ">
    <h4 className="card-title ps-5 text-secondary mx-5 pe-5">AddCourses</h4>
    <form onSubmit={handleForm}>
    <div className="mb-3">
    <label for="title" className="form-label">Enter Subject Title:</label>
    <input type="text" className="form-control" id="title"name="title" value={Course.title} onChange={(e)=>handleChange(e)} aria-describedby="name"/>
  </div>
  <div class="mb-3">
  <label for="desc" class="form-label">Enter Subject Description</label>
  <textarea class="form-control" id="desc" rows="3"name="description"value={Course.description}onChange={(e)=>handleChange(e)}></textarea>
</div>
  
  
  <button type="submit" className="btn btn-primary ms-5" style={{backgroundColor:"#4E6C50",marginLeft:"100px"}}>Submit</button>
  <button type="button" className="btn btn-primary ms-5" onClick={()=>{setCourse({id:"",title:"",description:""})}}style={{backgroundColor:"#4E6C50"}}>Clear</button>

</form>
  </div>
</div> </div>
    </div>;
}

export default AddCourses;