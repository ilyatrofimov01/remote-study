import React from "react";
import { useForm } from "react-hook-form";
import { validationRules } from "./validationRules";
import "./CreateNewCoursePage.scss";

export const CreateNewCoursePage = () => {
  const { handleSubmit, register, formState: { errors, isValid } } = useForm({ mode: "onTouched" });
  const formSubmit = (formValues: any) => {
    console.log(formValues);
  };
  console.log(errors, isValid);

  const maxSymbolsPrevention = (maxSymbols: number) => {
    return <p className="prevention-message">*Max {maxSymbols} symbols</p>;
  };

  return (
    <div className="create-new-course">
      <div className="form-container">
        <form className="new-course__form" onSubmit={handleSubmit(formSubmit)}>
          <label>
            Course name
            <input type="text" className="form-control" {...register("name", validationRules.name)} />
            {maxSymbolsPrevention(validationRules.name.maxLength.value)}
          </label>
          <label>
            Course logo image url:
            <input className="form-control" type="text" {...register("logoUrl", validationRules.logoUrl)} />
          </label>
          <label>
            Short description
            <textarea className="form-control" {...register("logoUrl", validationRules.shortDescription)} />
            {maxSymbolsPrevention(validationRules.shortDescription.maxLength.value)}
          </label>
          <label>
            Description
            <textarea className="form-control" {...register("logoUrl", validationRules.description)} />
            {maxSymbolsPrevention(validationRules.description.maxLength.value)}
          </label>

          <button className="btn btn-success" type="submit" disabled={!isValid}>Save</button>
        </form>
      </div>
      <div className="preview-container">
        Preview
      </div>
    </div>

  );
};