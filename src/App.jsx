import { useState } from "react";
import "./App.css";
import PersonalInfo from "./components/personalInfo";
import EducationForm from "./components/educationForm";
import ExperienceForm from "./components/experienceForm";
import Button from "./components/button";
import Overlay from "./components/overlay";
import Print from "./components/print";
import { useReactToPrint } from "react-to-print";
import { useRef } from "react";

function App() {
  const [isOverlayOpened, setIsOverlayOpened] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const contentRef = useRef(null);
  const reactToPrintFn = useReactToPrint({ contentRef });

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

  function handleUpdateField(id, item, name, field) {
    if (id === item.id) {
      return { ...item, [name]: field };
    } else return { item };
  }

  function handleUpdateEducation(id, name, field) {
    const newItems = educations.map((item) =>
      handleUpdateField(id, item, name, field)
    );
    setEducations(newItems);
  }

  function handleUpdateExperience(id, name, field) {
    const newItems = educations.map((item) =>
      handleUpdateField(id, item, name, field)
    );
    setExperiences(newItems);
    console.log(experiences);
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
      <main
        className={isOverlayOpened ? "main__container hide" : "main__container"}
      >
        <PersonalInfo
          handleUpdateInfo={handleUpdateInfo}
          setSelectedImage={setSelectedImage}
        />
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
          <button
            className="preview__btn cv__btn"
            onClick={() => setIsOverlayOpened(true)}
          >
            Preview
          </button>
          <button className="reset__btn cv__btn">Reset</button>
        </div>
        <Overlay
          personalInfo={personalInfo}
          experiences={experiences}
          educations={educations}
          selectedImage={selectedImage}
          className={isOverlayOpened ? "overlay" : "overlay hide"}
          contentRef={contentRef}
        />
        <Print
          className={isOverlayOpened ? "print__section" : "print__section hide"}
          setIsOverlayOpened={setIsOverlayOpened}
          reactToPrintFn={reactToPrintFn}
        />
      </main>
    </>
  );
}

export default App;
