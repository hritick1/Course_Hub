import axios from 'axios';
import React,{useState,useEffect} from 'react';
import base_url from './Apis';
import Courses from './Courses';
import { CircularProgress } from '@mui/material';

const ViewCourses = () => {
var i=0;
    const getAllCoursesFromServer=()=>{
  axios.get(`${base_url}/courses`).then(
    (response)=>{console.log(response.data);setCourse(response.data);setLoading(false)},
    (error)=>{console.log(error);}
  );
    }

    const updateData=(course)=>{
      setCourse(Course.filter((c)=>(c.title!==course)));
    }

    const [Course, setCourse] = useState({title:"",description:""});
    const [loading, setLoading] = useState(true);
    useEffect(() => {
    document.title="View Courses";
    getAllCoursesFromServer();
    }, [])
    return (
    <div className="container-fluid min-vh-100" style={{backgroundColor:"#4E6C50"}} >
      <div className="row p-2">
        {loading && <CircularProgress style={{margin:100,alignItems:"center"}}
        color='inherit'
        size={150}
        thickness={1}/>}
      {  !loading && Course!=null?Course?.map((item) =>{return(
      <div className="col-md-4">
        <Courses key={item._id} title={"Course "+(++i)} id={item._id} updateData={updateData}subject={item.title} description={item.description}/></div>)}):<h4 style={{backgroundColor:"#FAECD6"}}>{!loading && ("No-Courses-Available")}</h4>
       }
      </div>
    </div>);
}

export default ViewCourses;