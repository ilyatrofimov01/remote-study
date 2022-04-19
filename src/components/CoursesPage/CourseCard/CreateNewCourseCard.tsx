import React from "react";
import { NextArrow } from "../../../assets/icons";
import { useNavigate } from "react-router-dom";

export const CreateNewCourseCard = () => {
  const navigate = useNavigate();
  return (
    <div className="card new-course">
      <div className="create-new-banner">
        Create new Course
      </div>
      <div className="card-buttons">
        <button className="btn btn-primary ocean" onClick={() => navigate("create-new")}>Create New <NextArrow />
        </button>
      </div>
    </div>
  );
};