import { createContext, useEffect, useState } from "react";
import { dummyCourses } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import humanizeDuration from "humanize-duration";

export const AppContext = createContext();

export const AppContextProvider = (props) => {
  const currency = import.meta.env.VITE_CURRENCY;
  const [allCourses, setAllCourses] = useState([]);
  const [isEducator, setIsEducator] = useState(true);

  const navigate = useNavigate();
  const fetchAllCourses = async () => {
    setAllCourses(dummyCourses);
  };
  const calculateRating = (course) => {
    if (course.courseRatings.length === 0) {
      return 0;
    }
    let totalRating = 0;
    course.courseRatings.forEach((rating) => {
      totalRating += rating.rating;
    });
    return totalRating / course.courseRatings.length;
  };

  // Function to Clculate Course Chapter Time

  const calculateChapterTime = (chapter) => {
    let time = 0;
    chapter.chapterContent.map((lecture) => (time += lecture.lectureDuration));
    return humanizeDuration(time * 60 * 1000, { units: ["h", "m"] });
  };

  // Function to Calculate Total Course Duration

  const calculateTotalCourseDuration = (course) => {
    let time = 0;
    course.courseContent.map((chapter) => {
      chapter.chapterContent.map(
        (lecture) => (time += lecture.lectureDuration)
      );
    });
    return humanizeDuration(time * 60 * 1000, { units: ["h", "m"] });
  }

  // Function to calculate to No of lectures in a course
  const calculateTotalLectures = (course) => {
    let lectures = 0;
    course.courseContent.forEach(chapter => {
      if(Array.isArray(chapter.chapterContent)){
        lectures += chapter.chapterContent.length;
      }
      });
    return lectures;
  };

  useEffect(() => {
    fetchAllCourses();
  }, []);
  const value = {
    currency,
    allCourses,
    navigate,
    calculateRating,
    isEducator,
    setIsEducator,
    calculateTotalCourseDuration,
    calculateChapterTime,
    calculateTotalLectures
  };
  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};
