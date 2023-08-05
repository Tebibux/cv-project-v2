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
  isShowSkill
}) => {
  return <main>
    <BuilderSection faDownload={faDownload} handlePersonInfoShow={handlePersonInfoShow} faChevronDown={faChevronDown} isShowPersonalInfo={isShowPersonalInfo} handleEducation={handleEducation} isShowEducation={isShowEducation} faPlus={faPlus} handleExperiance={handleExperiance} isShowExperiance={isShowExperiance} handleSkill={handleSkill} isShowSkill={isShowSkill} />
    <PreviewSection />
  </main>;
}


export default Main