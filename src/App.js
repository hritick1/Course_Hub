import './App.css';
import Login from './components/Login';
import Nav from './components/Nav';
import Signup from './components/Signup';
import ViewCourses from './components/ViewCourses';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddCourses from './components/AddCourses';
import UpdateCourse from './components/UpdateCourse';
import Admin from './components/Admin';

function App() {

  return (
    <div >
      <Router>
      <Nav/>
      <Routes>
        <Route exact path="/" element={<Login/>}/>
        <Route exact path="/viewCourses" element={<ViewCourses/>}/>
        <Route exact path="/signUp" element={<Signup/>}/>
        <Route exact path="/addCourse" element={<AddCourses/>}/>
        <Route exact path="/updateCourse/:id" element={<UpdateCourse />}/>
        <Route exact path="/admin" element={<Admin/>}/>
      </Routes>
      </Router>
      
    </div>
  );
}

export default App;
