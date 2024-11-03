import Input from "./input";

function Experience() {
  return (
    <article className="experience__container">
      <Input placeholder="Position" />
      <Input placeholder="Company" />
      <Input placeholder="City" />
      <Input placeholder="From (dd/mm/yy)" />
      <Input placeholder="To (dd/mm/yy)" />
      <Button textContent="Delete" />
    </article>
  );
}
export default Experience;
