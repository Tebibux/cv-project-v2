import { useState } from 'react';
import './App.css'
import { FaGithub } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faPlus, faDownload } from '@fortawesome/free-solid-svg-icons';
function App() {
  const [isShowPersonalInfo, setIsShowPersonalInfo] = useState(false);
  const [isShowEducation, setIsShowEducation] = useState(false);
  const [isShowExperiance, setIsShowExperiance] = useState(false);
  const [isShowSkill, setIsShowSkill] = useState(false);

  // function reSetter will reset the state to its original status
  const reSetter = () => {
    if (isShowPersonalInfo === true) setIsShowPersonalInfo(!isShowPersonalInfo);
    if (isShowEducation === true) setIsShowEducation(!isShowEducation);
    if (isShowExperiance === true) setIsShowExperiance(!isShowExperiance);
    if (isShowSkill === true) setIsShowSkill(!isShowSkill);
    if (isShowEducation === true) setIsShowEducation(!isShowEducation);
  }

  const handlePersonInfoShow = () => {
    // return all the state to its original state and set the desired state change
    reSetter();
    setIsShowPersonalInfo(!isShowPersonalInfo);

  }

  const handleEducation = () => {
    // return all the state to its original state and set the desired state change
    reSetter();
    setIsShowEducation(!isShowEducation);
  }

  const handleExperiance = () => {
    // return all the state to its original state and set the desired state change
    reSetter();
    setIsShowExperiance(!isShowExperiance);
  }

  const handleSkill = () => {
    // return all the state to its original state and set the desired state change
    reSetter()
    setIsShowSkill(!isShowSkill)
  }

  const year = new Date();

  return (
    <div className="container">
      <header>
        <h4>CV Maker</h4>
        <h6>By Tebibux &#169; {year.getFullYear()}</h6>
        <a href="https://github.com/Tebibux/cv-project-v2" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
      </header>
      <main>
        <section className="main-building-section">
          <div className="information-section">
            <p>If you&#39;d like to Download PDF </p>
            <button><FontAwesomeIcon icon={faDownload} /></button>
          </div>

          <section className="building-section">
            <div className="personal-information  information-parent" >
              <button className="personal-information-button drop-down-menu-button"
                onClick={handlePersonInfoShow}
              >
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

            <div className="education-section drop-down-menu information-parent" >
              <button className="education-information-button drop-down-menu-button"
                onClick={handleEducation}
              >
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

            <div className="work-experiance-section drop-down-menu information-parent" >
              <button className="education-information-button drop-down-menu-button"
                onClick={handleExperiance}
              >
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
            <div className="skills-information drop-down-menu information-parent" >
              <button className="education-information-button drop-down-menu-button"
                onClick={handleSkill}
              >
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
        </section>
        <section className="preview-section">
          <div className="general-information-box">
            <img src="/Screenshot from 2022-09-29 00-26-10.png"
              alt="user profile photo"
              className="user-photo" />
            <ul className="user-desc">
              <li className='user-name' aria-label='user full name'> Tebibu Solomon</li>
              <li className='user-phone' aria-label='user phone number'> +2519725393</li>
              <li className='user-email' aria-label='user email'> tebibusolmon79@gmail.com</li>
              <li className='user-location' aria-label='user current location'> Wolayta, Sodo, Ethiopia</li>
            </ul>
          </div>
          <div className="education-preview-section">
            <h2>Education</h2>
            <div className="education-review">
              <h4>Urban & Regional planning <span className="edu-level"> Bachelor Degree</span></h4>
              <div className="education-desc">
                <p>Hawassa University</p>
                <p>August 2016 - September 2022 .E.C</p>
              </div>
            </div>
            <hr />
            <div className="education-review">
              <h4>Computer Science <span className="edu-level"> Bachelor Degree</span></h4>
              <div className="education-desc">
                <p>Rift Valley University</p>
                <p>August 2016 - September 2022 .E.C</p>
              </div>
            </div>
          </div>
          <div className="professional-exp">
            <h2>Experiance</h2>
            <div className="professional-desc">
              <p>Company Name: Sodo Municipality</p>
              <p>Position: Planner</p>
              <p>From September 2023 E.C to September 2023 E.C</p>
            </div>
            <hr />
            <div className="professional-desc">
              <p>Company Name: Awash Bank</p>
              <p>Position: programmer</p>
              <p>From September 2023 E.C to September 2023 E.C</p>
            </div>
          </div>

          <div className="skill-desc">
            <ul>
              <li>Adobe PhotoShop</li>
              <li>GIS</li>
              <li>Adobe PhotoShop</li>
              <li>GIS</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
