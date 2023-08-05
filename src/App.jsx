import { useState } from 'react';
import './App.css';
import { faChevronDown, faPlus, faDownload } from '@fortawesome/free-solid-svg-icons';
// components

import Main from './components/Main';
import { Header } from './components/Header';

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



  return (
    <div className="container">
      <Header />
      <Main
        faDownload={faDownload}
        handlePersonInfoShow={handlePersonInfoShow}
        faChevronDown={faChevronDown}
        isShowPersonalInfo={isShowPersonalInfo}
        handleEducation={handleEducation}
        isShowEducation={isShowEducation} f
        aPlus={faPlus} handleExperiance={handleExperiance}
        isShowExperiance={isShowExperiance}
        handleSkill={handleSkill}
        isShowSkill={isShowSkill}
      />
    </div>
  )
}

export default App
