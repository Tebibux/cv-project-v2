/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import uuid4 from 'uuid4'
import ItemAddForm from "./subComponent/ItemAddForm";
import ListEducation from "./subComponent/ListEducation";
import EditEducationForm from "./subComponent/EditEducationForm";

const AddEducation = ({
  FontAwesomeIcon,
  handleEducation,
  faChevronDown,
  isShowEducation,
  faPlus,
  educations,
  setEducations
}) => {
  // handle the display of the input form display
  const [showSaveBtn, setShowSaveBtn] = useState(false);

  // handle the display of lists of Education 
  const [showLists, setShowLists] = useState(false)
  // temp variable for the input box
  const [userEducation, setUserEducation] = useState('');
  const [degree, setDegree] = useState('');
  const [userInstitute, setUserInstitute] = useState('');
  const [userEduDurationYearFrom, setUserEduDurationYearFrom] = useState('');
  const [userEduDurationYearTo, setUserEduDurationYearTo] = useState('');
  const [docKey, setDocKey] = useState('');

  const showList = () => {
    setShowLists(!showLists);
  }


  const handleAddItem = () => {
    setShowSaveBtn(true);
  }
  // addToEducation function will run the when handleSubmit Triggered and also when 
  // the showSaveBtn state changes
  const addToEducation = () => {
    if (!educations.some(edu => edu.docKey === docKey)) {
      setEducations(prevEducations => [
        ...prevEducations,
        {
          docKey: docKey,
          filedOfEducation: userEducation,
          studiedUniversity: userInstitute,
          studiedDegree: degree,
          startDate: userEduDurationYearFrom,
          endDate: userEduDurationYearTo
        }
      ]);
    }
  }

  function handleFormSubmit(event) {
    event.preventDefault(); // Prevent default form submission behavior

    // Collect form input values
    // Set state variables with collected values
    setUserEducation(event.target.userEducation.value);
    setDegree(event.target.degree.value);
    setUserInstitute(event.target.userInstitute.value);
    setUserEduDurationYearFrom(event.target.userEduDurationYearFrom.value);
    setUserEduDurationYearTo(event.target.userEduDurationYearTo.value);
    setDocKey(uuid4())

    event.target.userEducation.value = '';
    event.target.degree.value = '';
    event.target.userInstitute.value = '';
    event.target.userEduDurationYearFrom.value = '';
    event.target.userEduDurationYearTo.value = '';


    addToEducation();
    // after cleaning it will reset to the not showing stage
    setShowSaveBtn(false);
  }

  // using useEffect the app will rerender the app using the above change
  // using the change made in handleFormSubmit

  useEffect(() => {
    // check the length of the array and 
    // if contains none return else run addToEducation function
    { educations.length !== 0 ? addToEducation() : null }
  }, [educations, showSaveBtn]);


  return <div className="education-section drop-down-menu information-parent">
    <button className="education-information-button drop-down-menu-button" onClick={handleEducation}>
      <span>Education Experience</span><FontAwesomeIcon icon={faChevronDown} />
    </button>
    {isShowEducation && <>
      <div className="add-additional-item">
        {showSaveBtn && <ItemAddForm handleFormSubmit={handleFormSubmit} />}
        <button className="add-additional-item save" onClick={handleAddItem}>
          <FontAwesomeIcon icon={faPlus} /> </button>
      </div>
      <button className="list-added-educations drop-down-menu-button" onClick={showList}>
        <span> List Added Educations</span><FontAwesomeIcon icon={faChevronDown} />
      </button>
      {showLists && <ListEducation educations={educations} />}
    </>
    }
  </div>;
}

export { AddEducation }