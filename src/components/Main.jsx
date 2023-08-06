/* eslint-disable react/prop-types */

import { BuilderSection } from './BuilderSection';
import { PreviewSection } from './PreviewSection';


const Main = ({
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
  handlePreview,
  profileSelected,
  setProfileSelected,
  setGeneralInformation,
  generalInformation
}) => {

  return <main>
    <BuilderSection
      handlePreview={handlePreview}
      faDownload={faDownload}
      handlePersonInfoShow={handlePersonInfoShow}
      faChevronDown={faChevronDown}
      isShowPersonalInfo={isShowPersonalInfo}
      handleEducation={handleEducation}
      isShowEducation={isShowEducation}
      faPlus={faPlus}
      handleExperiance={handleExperiance}
      isShowExperiance={isShowExperiance}
      handleSkill={handleSkill}
      isShowSkill={isShowSkill}
      setProfileSelected={setProfileSelected}
      setGeneralInformation={setGeneralInformation}
      generalInformation={generalInformation}
    />
    <PreviewSection
      profileSelected={profileSelected}
      generalInformation={generalInformation}
    />
  </main>;
}


export default Main