import Input from "./input";

function PersonalInfo() {
  return (
    <article className="infos__container">
      <h1 className="title">Personal information</h1>
      <Input placeholder="First Name" />
      <Input placeholder="Last Name" />
      <Input placeholder="Title" />
      <input type="file" placeholder="" />
      <Input placeholder="Adress" />
      <Input placeholder="Phone number" />
      <Input placeholder="Email" />
      <Input placeholder="Description" />
    </article>
  );
}

export default PersonalInfo;
