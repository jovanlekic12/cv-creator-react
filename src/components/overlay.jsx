function Overlay(props) {
  const { personalInfo, experiences } = props;

  return (
    <div className="overlay">
      <header className="overlay__header">{personalInfo.title}</header>
      <div className="overlay__container">
        <aside className="personal__container">
          <img src="" alt="" />
          <h1>Personal Details</h1>
          <h2>Adress: {personalInfo.adress}</h2>
          <h2>Phone number: {personalInfo.phone}</h2>
          <h2>Email: {personalInfo.email}</h2>
        </aside>
        <main className="overlay__main">
          <div className="description">
            <h1>Description</h1>
            <p>{personalInfo.description}</p>
          </div>
          <div className="education__container">
            <h1></h1>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Overlay;
