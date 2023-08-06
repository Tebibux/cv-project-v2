/* eslint-disable react/prop-types */
const AddEducation = ({
  FontAwesomeIcon,
  handleEducation,
  faChevronDown,
  isShowEducation,
  faPlus
}) => {
  return <div className="education-section drop-down-menu information-parent">
    <button className="education-information-button drop-down-menu-button" onClick={handleEducation}>
      <span>Education Experience</span><FontAwesomeIcon icon={faChevronDown} />
    </button>
    {isShowEducation && <div className="education-information-list drop-down-menu-list">
      <div className='list UserEducation'>
        <input type="text" name="userEducation" id="" placeholder='Education' />
      </div>
      <div className='list userDegree'>
        <input type="text" name="degree" id="" placeholder='Degree, PhD ...' />
      </div>
      <div className='list userInstitute'>
        <input type="text" name="userInstitute" id="" placeholder='Yale University' />
      </div>
      <div className='list userEduDurationYear'>
        <div className='education-duration'>
          <label htmlFor="userEduDurationYearFrom">Start</label>
          <input type="date" name="userEduDurationYearFrom" id="" />
        </div>
        <div className='education-duration'>
          <label htmlFor="userEduDurationYearFrom">End</label>
          <input type="date" name="userEduDurationYearTo" id="" />
        </div>
      </div>
      <div className="add-item">
        <button className="save">Save</button>
        <div className="add-additional-item">
          <FontAwesomeIcon icon={faPlus} /> </div>
      </div>
    </div>}
  </div>;
}

export { AddEducation }