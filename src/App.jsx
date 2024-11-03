import { useState } from "react";
import "./App.css";
import PersonalInfo from "./components/personalInfo";
import Education from "./components/education";
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
      position: position,
      company: company,
      companyCity: companyCity,
      companyFromDate: companyFromDate,
      companyToDate: companyToDate,
    },
  ]);

  return (
    <>
      <header className="header">
        <h1>CV CREATOR</h1>
      </header>
      <main className="main__container">
        <PersonalInfo />
        {educations &&
          educations.map((education) => {
            return <Education key={education.universityName} />;
          })}
        {educations && (
          <div className="btn__container">
            <Button textContent="Delete" />
            <Button textContent="Add education" />
          </div>
        )}
      </main>
    </>
  );
}

export default App;
