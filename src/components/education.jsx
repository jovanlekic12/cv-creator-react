import Input from "./input";
import Button from "./button";
function Education() {
  return (
    <article className="education__container">
      <Input placeholder="University name" />
      <Input placeholder="City" />
      <Input placeholder="Degree" />
      <Input placeholder="Subject" />
      <Input placeholder="From (dd/mm/yy)" />
      <Input placeholder="To (dd/mm/yy)" />
      <Button textContent="Delete" />
    </article>
  );
}

export default Education;
