import Input from "./input";
import Button from "./button";
function EducationForm({ handleDeleteEducation, id, handleUpdateEducation }) {
  return (
    <article className="education__container">
      <Input
        placeholder="University name"
        name="universityName"
        onChange={(event) =>
          handleUpdateEducation(
            id,
            event.target.getAttribute("name"),
            event.target.value
          )
        }
      />
      <Input
        placeholder="City"
        name="universityCity"
        onChange={(event) =>
          handleUpdateExperience(
            id,
            event.target.getAttribute("name"),
            event.target.value
          )
        }
      />
      <Input
        placeholder="Degree"
        name="degree"
        onChange={(event) =>
          handleUpdateExperience(
            id,
            event.target.getAttribute("name"),
            event.target.value
          )
        }
      />
      <Input
        placeholder="Subject"
        name="subject"
        onChange={(event) =>
          handleUpdateExperience(
            id,
            event.target.getAttribute("name"),
            event.target.value
          )
        }
      />
      <Input
        placeholder="From (dd/mm/yy)"
        name="universityFromDate"
        onChange={(event) =>
          handleUpdateExperience(
            id,
            event.target.getAttribute("name"),
            event.target.value
          )
        }
      />
      <Input
        placeholder="To (dd/mm/yy)"
        name="universityToDate"
        onChange={(event) =>
          handleUpdateExperience(
            id,
            event.target.getAttribute("name"),
            event.target.value
          )
        }
      />
      <Button textContent="Delete" onClick={() => handleDeleteEducation(id)} />
    </article>
  );
}

export default EducationForm;
