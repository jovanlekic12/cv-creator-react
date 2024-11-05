import Input from "./input";
import Button from "./button";
function ExperienceForm({
  handleDeleteExperience,
  id,
  handleUpdateExperience,
}) {
  return (
    <article className="experience__container">
      <Input
        placeholder="Position"
        name="position"
        onChange={(event) =>
          handleUpdateExperience(
            id,
            event.target.getAttribute("name"),
            event.target.value
          )
        }
      />
      <Input
        name="company"
        placeholder="Company"
        onChange={(event) =>
          handleUpdateExperience(
            id,
            event.target.getAttribute("name"),
            event.target.value
          )
        }
      />
      <Input
        name="comapnyCity"
        placeholder="City"
        onChange={(event) =>
          handleUpdateExperience(
            id,
            event.target.getAttribute("name"),
            event.target.value
          )
        }
      />
      <Input
        name="companyFromDate"
        placeholder="From (dd/mm/yy)"
        onChange={(event) =>
          handleUpdateExperience(
            id,
            event.target.getAttribute("name"),
            event.target.value
          )
        }
      />
      <Input
        name="companyToDate"
        placeholder="To (dd/mm/yy)"
        onChange={(event) =>
          handleUpdateExperience(
            id,
            event.target.getAttribute("name"),
            event.target.value
          )
        }
      />
      <Button textContent="Delete" onClick={() => handleDeleteExperience(id)} />
    </article>
  );
}
export default ExperienceForm;
