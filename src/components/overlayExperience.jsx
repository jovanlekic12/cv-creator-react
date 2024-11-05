function OverlayExperience(props) {
  const { position, company, companyCity, companyFromDate, companyToDate } =
    props;

  return (
    <div className="experience__div">
      <h1>
        {companyFromDate} - {companyToDate}
      </h1>
      <div className="experience__div__infos">
        <h1>{position}</h1>
        <p>
          {company}, {companyCity}
        </p>
      </div>
    </div>
  );
}

export default OverlayExperience;
