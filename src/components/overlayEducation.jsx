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
      <h2>
        {universityFromDate} - {universityToDate}
      </h2>
      <div className="education__div__infos">
        <h2>{degree}</h2>
        <p>{subject}</p>
        <p>
          {universityName}, {universityCity}
        </p>
      </div>
    </div>
  );
}

export default OverlayEducation;
