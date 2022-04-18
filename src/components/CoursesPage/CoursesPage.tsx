import React, { useEffect, useState } from "react";
import "./CoursesPage.scss";
import { CourseCard } from "./CourseCard";
import axios from "axios";
import { Course } from "../../types";
import { CreateNewCourseCard } from "./CourseCard/CreateNewCourseCard";

export const CoursesPage = () => {
  const [coursesList, setCoursesList] = useState<Course[]>([]);

  useEffect(() => {
    axios.get("https://remote-study-school-default-rtdb.europe-west1.firebasedatabase.app/coursesList.json")
      .then(res => {
        const coursesArr: Course[] = [];
        for (let course in res.data) {
          coursesArr.push(res.data[course]);
        }
        setCoursesList(coursesArr);
      });
  }, []);

  return (
    <div className="courses-container">
      <CreateNewCourseCard />
      {coursesList.map((course: Course) => {
        return <CourseCard courseData={course} key={course.id} />;
      })}
    </div>);
};
