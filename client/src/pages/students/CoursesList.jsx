import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import SearchBar from "../../components/students/SearchBar";
import { useParams } from "react-router-dom";
import CourseCard from "../../components/students/CourseCard";

const CoursesList = () => {
  const { navigate,allCourses } = useContext(AppContext);
  const { input } = useParams();

  return (
    <div className="relative px-6 md:px-36 pt-10">
      <div className="flex flex-col md:flex-row items-center justify-between w-full gap-6">
        <div className="text-left">
          <h1 className="text-4xl font-semibold text-gray-800">Course List</h1>
          <p className="text-gray-500">
            <span
              className="text-blue-600 cursor-pointer hover:underline"
              onClick={() => navigate("/")}
            >
              Home
            </span>{" "}
            / <span>Course List</span>
          </p>
        </div>
        {/* Search Bar aligned to the right */}
        <div className="w-full md:w-auto">
          <SearchBar data={input} />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 px-2 md:p-0 my-16">
        {allCourses.map((course,index)=><CourseCard key={index} course={course}/>)}
      </div>
    </div>
  );
};

export default CoursesList;
