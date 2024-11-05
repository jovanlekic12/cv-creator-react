import { useState } from "react";
import "./App.css";
import PersonalInfo from "./components/personalInfo";
import EducationForm from "./components/educationForm";
import ExperienceForm from "./components/experienceForm";
import Button from "./components/button";
import Overlay from "./components/overlay";

function App() {
  const [educations, setEducations] = useState([
    {
      id: self.crypto.randomUUID(),
      universityName: "",
      universityCity: "",
      degree: "",
      subject: "",
      universityFromDate: "",
      universityToDate: "",
    },
  ]);

  const [personalInfo, setPersonalInfo] = useState({
    firstName: "",
    lastName: "",
    title: "",
    photo: "",
    adress: "",
    phone: "",
    email: "",
    description: "",
  });

  const [experiences, setExperiences] = useState([
    {
      id: self.crypto.randomUUID(),
      position: "",
      company: "",
      companyCity: "",
      companyFromDate: "",
      companyToDate: "",
    },
  ]);

  function handleUpdateEducation(id, name, field) {
    const newItems = educations.map((item) => {
      if (id === item.id) {
        return { ...item, [name]: field };
      } else return { item };
    });
    setEducations(newItems);
  }

  function handleUpdateExperience(id, name, field) {
    const newItems = experiences.map((item) => {
      if (id === item.id) {
        return { ...item, [name]: field };
      } else return { item };
    });
    setExperiences(newItems);
  }

  function handleUpdateInfo(name, field) {
    setPersonalInfo((prev) => {
      return { ...prev, [name]: field };
    });
  }

  function handleDeleteEducation(id) {
    setEducations((prev) => prev.filter((education) => education.id !== id));
  }

  function handleDeleteExperience(id) {
    setExperiences((prev) => prev.filter((experience) => experience.id !== id));
  }

  function handleAddEducation() {
    const newEducation = {
      id: self.crypto.randomUUID(),
      universityName: "",
      universityCity: "",
      degree: "",
      subject: "",
      universityFromDate: "",
      universityToDate: "",
    };
    setEducations((prev) => [...prev, newEducation]);
  }

  function handleAddExperince() {
    const newExperience = {
      id: self.crypto.randomUUID(),
      position: "",
      company: "",
      companyCity: "",
      companyFromDate: "",
      companyToDate: "",
    };
    setExperiences((prev) => [...prev, newExperience]);
  }

  return (
    <>
      <header className="header">
        <h1>CV CREATOR</h1>
      </header>
      <main className="main__container">
        <PersonalInfo handleUpdateInfo={handleUpdateInfo} />
        <section className="educations__container">
          <h1 className="title">Education</h1>
          {educations && (
            <div className="educations__div">
              {educations.map((education) => {
                return (
                  <EducationForm
                    id={education.id}
                    key={education.id}
                    handleUpdateEducation={handleUpdateEducation}
                    handleDeleteEducation={handleDeleteEducation}
                  />
                );
              })}
            </div>
          )}
          <Button textContent="Add education" onClick={handleAddEducation} />
        </section>
        <section className="experiences__container">
          <h1 className="title">Experience</h1>
          {experiences && (
            <div className="experiences__div">
              {experiences.map((experience) => {
                return (
                  <ExperienceForm
                    key={experience.id}
                    id={experience.id}
                    handleDeleteExperience={handleDeleteExperience}
                    handleUpdateExperience={handleUpdateExperience}
                  />
                );
              })}
            </div>
          )}
          <Button textContent="Add experience" onClick={handleAddExperince} />
        </section>
        <div className="cv__btn__container">
          <button className="preview__btn cv__btn">Preview</button>
          <button className="reset__btn cv__btn">Reset</button>
        </div>
        <Overlay
          personalInfo={personalInfo}
          experiences={experiences}
          educations={educations}
        />
      </main>
    </>
  );
}

export default App;
