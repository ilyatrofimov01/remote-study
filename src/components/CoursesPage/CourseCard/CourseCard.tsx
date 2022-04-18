import React from "react";
import "./CourseCard.scss";
import { Course } from "../../../types";
import { NextArrow } from "../../../assets/icons";

export const CourseCard = ({ courseData }: { courseData: Course }) => {
  return (
    <div className="card">
      <img src={courseData.imagePath} alt="course image title" />
      <div className="card-content">
        <div className="card-content-text">
          <div className="card-title">
            {courseData.name}
          </div>
          <div className="card-text">
            {courseData.shortDescription}
          </div>
        </div>
        <div className="card-buttons">
          <button className="btn btn-primary ocean">More Information <NextArrow /></button>
        </div>
      </div>
    </div>
  );
};