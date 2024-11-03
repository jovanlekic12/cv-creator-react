import Input from "./input";

function Education() {
  return (
    <article className="education__container">
      <h1>Education</h1>
      <Input placeholder="University name" />
      <Input placeholder="City" />
      <Input placeholder="Degree" />
      <Input placeholder="Subject" />
      <Input placeholder="From (dd/mm/yy)" />
      <Input placeholder="To (dd/mm/yy)" />
    </article>
  );
}

export default Education;
