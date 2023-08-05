import { AddPersonalInfo } from './BuildingComponents/AddPersonalInfo';
import { AddEducation } from './BuildingComponents/AddEducation';
import { AddExperiance } from './BuildingComponents/AddExperiance';
import { AddSkill } from './BuildingComponents/AddSkill';
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
  isShowSkill,
  handleDownloadCV,
  setProfileSelected,
  setGeneralInformation,
  generalInformation
}) => {

  return <section className="main-building-section">
    <div className="information-section">
      <p>If you&#39;d like to Download PDF </p>
      <button onClick={handleDownloadCV}><FontAwesomeIcon icon={faDownload} /></button>
    </div>
    <section className="building-section">
      <AddPersonalInfo
        FontAwesomeIcon={FontAwesomeIcon}
        handlePersonInfoShow={handlePersonInfoShow}
        faChevronDown={faChevronDown}
        isShowPersonalInfo={isShowPersonalInfo}
        setGeneralInformation={setGeneralInformation}
        generalInformation={generalInformation}
        setProfileSelected={setProfileSelected}
      />
      <AddEducation
        FontAwesomeIcon={FontAwesomeIcon}
        handleEducation={handleEducation}
        faChevronDown={faChevronDown}
        isShowEducation={isShowEducation}
        faPlus={faPlus}
      />
      <AddExperiance
        FontAwesomeIcon={FontAwesomeIcon}
        handleExperiance={handleExperiance}
        faChevronDown={faChevronDown}
        isShowExperiance={isShowExperiance}
        faPlus={faPlus}
      />
      <AddSkill
        FontAwesomeIcon={FontAwesomeIcon}
        handleSkill={handleSkill}
        faChevronDown={faChevronDown}
        isShowSkill={isShowSkill}
        faPlus={faPlus}
      />
    </section>
  </section>;
}

export { BuilderSection };/* eslint-disable react/prop-types */