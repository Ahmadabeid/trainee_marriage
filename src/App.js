import logo from './logo.svg';
import './App.css';
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './component/Home'
import Navbar from './component/Navbar';
import Sidebar from './component/Sidebar';
import Course from './component/Course';
import Document from './component/Document';
import Participant from './component/Participant';
import QueAns from './component/QueAns';
import Resource from './component/Resource';
import Timetable from './component/Timetable';
import Trainee from './component/Trainee';
import Registration from './Registration';
import Profile from './component/Profile';
import Courset from './component/Courset';
import Sidebaar from './component/User/Sidebaar';
import Naavbar from './component/User/Naavbar';
import Dashboard from './component/User/Dashboard';
import Courseform from './component/CourseForm';
import Timetablerender from './component/Timetablerender';
import DocumentForm from './component/DocumentForm';
import Admin from './component/Admin';
import ParticipantForm from './component/ParticipantForm';
import UserAdmin from './component/UserAdmin';
import TraineeForm from './component/TraineeForm';
import ResourceForm from './component/ResourceForm';
import QueAnsForm  from './component/QueAnsForm';
import Login from './component/Login'
import ViewDocument from './component/ViewDocument';
import UpdateDocument from './component/UpdateDocument';
import ViewQueAns from './component/ViewQueAns';
import ViewTrainee from './component/ViewTrainee';
import ViewTimetable from './component/ViewTimetable';
import UpdateTimetable from './component/UpdateTimetable';
import ViewResource from './component/ViewResource';
import UpdateResource from './component/UpdateResource';
import UpdateCourse from './component/UpdateCourse';
import UpdateQueAns from './component/UpdateQueAns';
import ViewCourse from './component/ViewCourse'
import UpdateTrainee from './component/UpdateTrainee';







class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='login' element={<Login/>}/>
          <Route path='home' element={< Home/>} />
          <Route path='navbar' element={< Navbar />} />
          <Route path='sidebar' element={< Sidebar />} />
          <Route path='course' element={< Course />} />
          <Route path='document' element={< Document />} />
          <Route path='participant' element={< Participant />} />
          <Route path='queAns' element={< QueAns />} />
          <Route path='resource' element={< Resource />} />
          <Route path='timeTable' element={< Timetable />} />
          <Route path='trainee' element={< Trainee />} />
          <Route path='registration' element={< Registration />} />
          <Route path='profile' element={< Profile />} />
          <Route path='courset' element={<Courset />} />
          <Route path='sidebaar' element={< Sidebaar />} />
          <Route path='naavbar' element={<Naavbar />}/>
          <Route path='dashboard' element={<Dashboard />}/>
          <Route path='courseForm' element={<Courseform />}/>
          <Route path='timetable' element={<Timetable />}/>
          <Route path='timetablerender' element={<Timetablerender />}/>
          <Route path='documentForm' element={<DocumentForm />}/>
          <Route path='admin' element={<Admin/>}/>
          <Route path='participantForm' element={<ParticipantForm />}/>
          <Route path='userAdmin' element={<UserAdmin/>}/>
          <Route path="traineeForm" element={<TraineeForm />}/>
          <Route path="resourceForm" element={<ResourceForm />}/>
          <Route path='queAnsForm' element={<QueAnsForm />}/>
          <Route path= "/viewDocument/:docId" element={<ViewDocument/>}/>
          <Route path="/updateDocument/:docId" element={<UpdateDocument/>}/>
          <Route path="/viewQueAns/:queAnsId" element={<ViewQueAns/>}/>
          <Route path='/viewTrainee/:userID' element={<ViewTrainee/>}/>
          <Route path="/viewTimetable/:timeTableId" element={<ViewTimetable/>}/>
          <Route path="/updateTimetable/:timeTableId" element={<UpdateTimetable/>}/>
          <Route path="/viewResource/:resId" element={<ViewResource/>}/>
          <Route path="/updateResource/:resId" element={<UpdateResource/>}/>
          <Route path="/updatCourse/:courseId" element={<UpdateCourse/>}/>
          <Route path='/updateQueAns/:queAnsId' element={<UpdateQueAns/>}/>
          <Route path='/viewCourse/:courseId' element={<ViewCourse/>}/>
          <Route path='updateTrainee/:userID' element={<UpdateTrainee/>}/>
      
          
        </Routes>
      </BrowserRouter>
    )
  }
}
export default App;
