import React from "react";
import { NextArrow } from "../../../assets/icons";

export const CreateNewCourseCard = () => {
  return (
    <div className="card new-course">
      <div className="create-new-banner">
        Create new Course
      </div>
      <div className="card-buttons">
        <button className="btn btn-primary ocean">Create New <NextArrow /></button>
      </div>
    </div>
  );
};