import "./CoursesFacts.scss";

export const CoursesFactsBanner = () => {
  return (
    <div>
      <div className="courses-facts-panel">
        <div className="section-header">
          <h2 className="title">Easy To understand</h2>
          <p className="description">The most understandable courses for people of any age and level of knowledge, which
            are guaranteed to lead
            you to your goal</p>
        </div>
        <hr />
        <div className="courses-facts__container">
          <div className="courses-fact">
            <h3 className="title">More than 250h</h3>
            <p className="description">of high quality videos</p>
          </div>
          <div className="courses-fact">
            <h3 className="title">Low price $</h3>
            <p className="description">Lower than same courses costs </p>
          </div>
          <div className="courses-fact">
            <h3 className="title">More than 250h</h3>
            <p className="description">of high quality videos</p>
          </div>

        </div>
        <hr />
      </div>
    </div>
  );
};
