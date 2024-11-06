function OverlayExperience(props) {
  const { position, company, companyCity, companyFromDate, companyToDate } =
    props;

  return (
    <div className="experience__div">
      <h2>
        {companyFromDate} - {companyToDate}
      </h2>
      <div className="experience__div__infos">
        <h2>{position}</h2>
        <p>
          {company}, {companyCity}
        </p>
      </div>
    </div>
  );
}

export default OverlayExperience;
