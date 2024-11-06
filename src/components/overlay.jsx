import OverlayEducation from "./overlayEducation";
import OverlayExperience from "./overlayExperience";
import ReactDOM from "react-dom";
import React from "react";
import Image from "@root/src/assets/images/profile.alt.jpg";

function Overlay(props) {
  const {
    contentRef,
    personalInfo,
    experiences,
    educations,
    className,
    selectedImage,
  } = props;

  return ReactDOM.createPortal(
    <div className={className} ref={contentRef}>
      <header className="overlay__header">
        <h1>
          {personalInfo.firstName} {personalInfo.lastName}
        </h1>
        <h2>{personalInfo.title}</h2>
      </header>
      <div className="overlay__container">
        <main className="overlay__main">
          <div className="description">
            <h1>Description</h1>
            <p>{personalInfo.description}</p>
          </div>
          <div className="education__container">
            <h1>Education</h1>
            {educations &&
              educations.map((education) => {
                return <OverlayEducation key={education.id} {...education} />;
              })}
          </div>
          <div className="experience__container">
            <h1>Experience</h1>
            {experiences &&
              experiences.map((experience) => {
                return (
                  <OverlayExperience key={experience.id} {...experience} />
                );
              })}
          </div>
        </main>
        <aside className="personal__container">
          <img
            src={selectedImage === null ? Image : selectedImage}
            alt="images of a person"
            className="overlay__photo"
          />
          <h1>Personal Details</h1>
          <h2>Adress</h2>
          <p>{personalInfo.adress}</p>
          <h2>Phone number</h2>
          <p>{personalInfo.phone}</p>
          <h2>Email</h2>
          <p>{personalInfo.email}</p>
        </aside>
      </div>
    </div>,
    document.body
  );
}

export default Overlay;
