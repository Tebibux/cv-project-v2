import { useState } from 'react';
import './App.css';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { faChevronDown, faPlus, faDownload } from '@fortawesome/free-solid-svg-icons';
// components

import Main from './components/Main';
import { Header } from './components/Header';

function App() {
  // uses for the dropdown button of the profile filler
  const [isShowPersonalInfo, setIsShowPersonalInfo] = useState(false);
  const [isShowEducation, setIsShowEducation] = useState(false);
  const [isShowExperiance, setIsShowExperiance] = useState(false);
  const [isShowSkill, setIsShowSkill] = useState(false);

  // for the General Information variable placeholder object
  const [generalInformation, setGeneralInformation] = useState({
    userImage: {
      userImagePath: null,
      userImageName: ''
    },
    userFullName: 'Full Name',
    userPhoneNumber: '+123456789',
    userEmail: 'example@example.com',
    userLocation: 'City, State, Country'
  });

  // checks if profile is selected or not 
  const [profileSelected, setProfileSelected] = useState(false);

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

  const handleDownloadCV = async () => {
    console.log('you just clicked Download button download will be made here');
    const previewToDownload = document.querySelector('.preview-section');
    console.log(previewToDownload);

    if (previewToDownload) {
      html2canvas(previewToDownload)
        .then(canvas => {
          const pdf = new jsPDF();
          const imgData = canvas.toDataURL('image/jpeg');
          pdf.addImage(imgData, 'JPEG', 0, 0);
          pdf.save('my_cv.pdf');
        })
    } else {
      console.error('element no found');
    }

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
        handleDownloadCV={handleDownloadCV}
        profileSelected={profileSelected}
        setProfileSelected={setProfileSelected}
        setGeneralInformation={setGeneralInformation}
        generalInformation={generalInformation}
        
      />
    </div>
  )
}

export default App
