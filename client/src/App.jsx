import React from "react";
import { Route, Routes, useMatch } from "react-router-dom";
import Home from "./pages/students/Home";
import CoursesList from "./pages/students/CoursesList";
import CourseDetails from "./pages/students/CourseDetails";
import MyEnrollements from "./pages/students/MyEnrollements";
import Player from "./pages/students/Player";
import Loading from "./components/students/Loading";
import Educator from "./pages/educator/Educator";
import Dashboard from "./pages/educator/Dashboard";
import AddCourse from "./pages/educator/AddCourse";
import MyCourses from "./pages/educator/MyCourses";
import StudentEnrolled from "./pages/educator/StudentEnrolled";
import NavBar from "./components/students/NavBar";

const App = () => {
  const isEducatorRoute = useMatch("/educator/*");
  return (
    <div className="text-default min-h-screen bg-white ">
      {!isEducatorRoute && <NavBar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course-list" element={<CoursesList />} />
        <Route path="/course-list/:input" element={<CoursesList />} />
        <Route path="/course/:id" element={<CourseDetails />} />
        <Route path="/my-enrollements" element={<MyEnrollements />} />
        <Route path="/player/:courseId" element={<Player />} />
        <Route path="/loading/:path" element={<Loading />} />
        <Route path="/educator" element={<Educator />}>
          <Route path="educator" element={<Dashboard />} />
          <Route path="add-courses" element={<AddCourse />} />
          <Route path="my-courses" element={<MyCourses />} />
          <Route path="student-enrolled" element={<StudentEnrolled />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
