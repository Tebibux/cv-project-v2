/* eslint-disable react/prop-types */
export function Education({ educations }) {
  return <div className="education-preview-section">
    <h2>Education</h2>
    {educations &&
      educations.map((education) => (
        <div key={education.uuid} className="education-review">
          <h4>{education.filedOfEducation} <span className="edu-level"> Bachelor Degree</span></h4>
          <div className="education-desc">
            <p className="university-name">{education.studiedUniversity}</p>
            <p>{education.startDate} - {education.endDate}</p>
          </div>
          <hr />
        </div>
      )
      )}

  </div>;
}
