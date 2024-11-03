import { useState } from "react";
import "./App.css";
import PersonalInfo from "./components/personalInfo";
import Education from "./components/education";
import Experience from "./components/experience";
import Button from "./components/button";
function App() {
  //personal infos
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [title, setTitle] = useState("");
  // const [photo, setPhoto] = useState("");
  const [adress, setAdress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");

  //education
  const [universityName, setUniversityName] = useState("");
  const [universityCity, setUniversityCity] = useState("");
  const [degree, setDegree] = useState("");
  const [subject, setSubject] = useState("");
  const [universityFromDate, setUniversityFromDate] = useState("");
  const [universtityToDate, setUniverstityToDate] = useState("");

  //experience
  const [position, setPosition] = useState("");
  const [company, setCompany] = useState("");
  const [companyCity, setCompanyCity] = useState("");
  const [companyFromDate, setCompanyFromDate] = useState("");
  const [companyToDate, setCompanyToDate] = useState("");

  const [educations, setEducations] = useState([
    {
      id: self.crypto.randomUUID(),
      universityName: universityName,
      universityCity: universityCity,
      degree: degree,
      subject: subject,
      universityFromDate: universityFromDate,
      universtityToDate: universtityToDate,
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
      position: position,
      company: company,
      companyCity: companyCity,
      companyFromDate: companyFromDate,
      companyToDate: companyToDate,
    },
  ]);

  function handleDeleteEducation(id) {
    setEducations((prev) => prev.filter((education) => education.id !== id));
  }

  function handleDeleteExperience(id) {
    setExperiences((prev) => prev.filter((experience) => experience.id !== id));
  }

  return (
    <>
      <header className="header">
        <h1>CV CREATOR</h1>
      </header>
      <main className="main__container">
        <PersonalInfo />
        <section className="educations__container">
          <h1 className="title">Education</h1>
          {educations && (
            <div className="educations__div">
              {educations.map((education) => {
                return (
                  <Education
                    id={education.id}
                    key={education.id}
                    handleDeleteEducation={handleDeleteEducation}
                  />
                );
              })}
            </div>
          )}
          <Button textContent="Add education" />
        </section>
        <section className="experiences__container">
          <h1 className="title">Experience</h1>
          {experiences && (
            <div className="experiences__div">
              {experiences.map((experience) => {
                return (
                  <Experience
                    key={experience.id}
                    id={experience.id}
                    handleDeleteExperience={handleDeleteExperience}
                  />
                );
              })}
            </div>
          )}
          <Button textContent="Add experience" />
        </section>
        <div className="cv__btn__container">
          <button className="preview__btn cv__btn">Preview</button>
          <button className="reset__btn cv__btn">Reset</button>
        </div>
      </main>
    </>
  );
}

export default App;
