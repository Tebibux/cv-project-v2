/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const BuilderSection = ({
  faDownload,
  handlePersonInfoShow,
  faChevronDown,
  isShowPersonalInfo,
  handleEducation,
  isShowEducation,
  faPlus,
  handleExperiance,
  isShowExperiance,
  handleSkill,
  isShowSkill
}) => {
  return <section className="main-building-section">
    <div className="information-section">
      <p>If you&#39;d like to Download PDF </p>
      <button><FontAwesomeIcon icon={faDownload} /></button>
    </div>

    <section className="building-section">
      <div className="personal-information  information-parent">
        <button className="personal-information-button drop-down-menu-button" onClick={handlePersonInfoShow}>
          <span> General Information </span> <FontAwesomeIcon icon={faChevronDown} />
        </button>
        {isShowPersonalInfo && <div className="personal-information drop-down-menu-list">
          <div className='list UserPhoto input-container'>
            <input type="file" name="image" accept="image/jpeg, image/png" />
            <label htmlFor="file-input" className="custom-file-button">Upload Profile Image</label>
          </div>
          <div className='list UserFullName'>
            <input type="text" name="userName" id="" placeholder='Full Name' />
          </div>
          <div className='list UserPhone'>
            <input type="tel" name="userPhone" id="" placeholder='Phone Number' />
          </div>
          <div className='list UserEmail'>
            <input type="email" name="userEmail" id="" placeholder='Email' />
          </div>
          <div className='list Location'>
            <input type="text" name="userLocation" id="" placeholder='location' />
          </div>
        </div>}
      </div>

      <div className="education-section drop-down-menu information-parent">
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
          <div className="add-item">
            <button className="save">Save</button>
            <div className="add-additional-item">
              <FontAwesomeIcon icon={faPlus} /> </div>
          </div>
        </div>}
      </div>

      <div className="work-experiance-section drop-down-menu information-parent">
        <button className="education-information-button drop-down-menu-button" onClick={handleExperiance}>
          <span> Professional Experience</span><FontAwesomeIcon icon={faChevronDown} />
        </button>
        {isShowExperiance && <div className="education-information-list drop-down-menu-list">
          <div className='list userEmpDetail'>
            <input type="text" name="userEmpDetail" id="" placeholder='Employed Company' />
          </div>
          <div className='list userJobTitle'>
            <input type="text" name="userJobTitle" id="" placeholder='Employment Position' />
          </div>
          <div className='list userEmpDurationYear'>
            <div className='employed-duration'>
              <label htmlFor="userEmpDurationYearFrom">Start</label>
              <input type="date" name="userEmpDurationYearFrom" id="" />
            </div>
            <div className='employed-duration'>
              <label htmlFor="userEmpDurationYearFrom">End</label>
              <input type="date" name="userEmpDurationYearTo" id="" />
            </div>
          </div>
          <div className='list'></div>
          <div className="add-item">
            <button className="save">Save</button>
            <div className="add-additional-item">
              <FontAwesomeIcon icon={faPlus} /> </div>
          </div>
        </div>}
      </div>
      <div className="skills-information drop-down-menu information-parent">
        <button className="education-information-button drop-down-menu-button" onClick={handleSkill}>
          <span> Add Skill </span><FontAwesomeIcon icon={faChevronDown} />
        </button>
        {isShowSkill && <div className="education-information-list drop-down-menu-list">
          <div className='list'></div>
          <div className='list userSkill'>
            <input type="text" name="userSkill" id="" placeholder='Photo Editing ...' />
          </div>
          <div className="add-item">
            <button className="save">Save</button>
            <div className="add-additional-item">
              <FontAwesomeIcon icon={faPlus} /> </div>
          </div>
        </div>}
      </div>
    </section>
  </section>;
}

export {BuilderSection};/* eslint-disable react/prop-types */

