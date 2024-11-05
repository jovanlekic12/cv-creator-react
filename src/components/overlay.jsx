import OverlayEducation from "./overlayEducation";
import OverlayExperience from "./overlayExperience";
import ReactDOM from "react-dom";
function Overlay(props) {
  const { personalInfo, experiences, educations } = props;

  return ReactDOM.createPortal(
    <div className="overlay">
      <header className="overlay__header">
        <h1>
          {personalInfo.firstName} {personalInfo.lastName}
        </h1>
        <h2>{personalInfo.title}</h2>
      </header>
      <div className="overlay__container">
        <aside className="personal__container">
          <img src={personalInfo.photo} alt="./assets/images/profile-alt.jpg" />
          <h1>Personal Details</h1>
          <h2>Adress: {personalInfo.adress}</h2>
          <h2>Phone number: {personalInfo.phone}</h2>
          <h2>Email: {personalInfo.email}</h2>
        </aside>
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
      </div>
    </div>,
    document.body
  );
}

export default Overlay;
