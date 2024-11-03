import Input from "./input";
import Button from "./button";
function Experience({ handleDeleteExperience, id }) {
  return (
    <article className="experience__container">
      <Input placeholder="Position" />
      <Input placeholder="Company" />
      <Input placeholder="City" />
      <Input placeholder="From (dd/mm/yy)" />
      <Input placeholder="To (dd/mm/yy)" />
      <Button textContent="Delete" onClick={() => handleDeleteExperience(id)} />
    </article>
  );
}
export default Experience;
