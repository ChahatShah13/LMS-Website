import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CourseCard from "./CourseCard";
import { AppContext } from "../../context/AppContext";

const CoursesSection = () => {
  const { allCourses } = useContext(AppContext);

  return (
    <div className="py-16 px-6 md:px-20 lg:px-40 text-center">
      {/* Title */}
      <h2 className="text-3xl font-semibold text-gray-800">
        Learn from the best
      </h2>

      {/* Description */}
      <p className="text-sm md:text-base text-gray-500 mt-3 leading-relaxed max-w-2xl mx-auto">
        Discover top-rated courses across various categories. From coding and
        design to business and wellness, our courses are crafted to deliver
        results.
      </p>

      {/* Course Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:my-16 my-10">
        {allCourses.slice(0, 4).map((course, index) => (
          <CourseCard key={index} course={course} />
        ))}
      </div>

      {/* Show All Courses Button */}
      <Link
        to="/course-list"
        onClick={() => scrollTo(0, 0)}
        className="text-gray-600 border border-gray-400 px-10 py-3 rounded-full transition-all duration-300 hover:bg-gray-100 hover:border-gray-500"
      >
        Show all courses
      </Link>
    </div>
  );
};

export default CoursesSection;
