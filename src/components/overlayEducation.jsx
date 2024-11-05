function OverlayEducation(props) {
  const {
    universityFromDate,
    universityToDate,
    degree,
    subject,
    universityName,
    universityCity,
  } = props;

  return (
    <div className="education__div">
      <h1>
        {universityFromDate} - {universityToDate}
      </h1>
      <div className="education__div__infos">
        <h1>{degree}</h1>
        <p>{subject}</p>
        <p>
          {universityName}, {universityCity}
        </p>
      </div>
    </div>
  );
}

export default OverlayEducation;
