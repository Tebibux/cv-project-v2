/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import uuid4 from 'uuid4'
import ItemForm from "./subComponent/ItemForm";
import EditEducationForm from "./subComponent/EditEducationForm";

const AddEducation = ({
  FontAwesomeIcon,
  handleEducation,
  faChevronDown,
  isShowEducation,
  faPlus
}) => {

  const [showSaveBtn, setShowSaveBtn] = useState(false);

  // temp variable for the input box
  const [userEducation, setUserEducation] = useState('');
  const [degree, setDegree] = useState('');
  const [userInstitute, setUserInstitute] = useState('');
  const [userEduDurationYearFrom, setUserEduDurationYearFrom] = useState('');
  const [userEduDurationYearTo, setUserEduDurationYearTo] = useState('');
  const [docKey, setDocKey] = useState('');


  const handleAddItem = () => {
    setShowSaveBtn(true);
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

    // after cleaning it will reset to the not showing stage
    setShowSaveBtn(false);
  }

  // using useEffect the app will rerender the app using the above change
  // using the change made in handleFormSubmit

  useEffect(() => {
    console.log(docKey, userEducation, degree, userInstitute, userEduDurationYearFrom, userEduDurationYearTo)
  }, [userEducation, degree, userInstitute, userEduDurationYearFrom, userEduDurationYearTo, docKey]);


  return <div className="education-section drop-down-menu information-parent">
    <button className="education-information-button drop-down-menu-button" onClick={handleEducation}>
      <span>Education Experience</span><FontAwesomeIcon icon={faChevronDown} />
    </button>
    {isShowEducation && <>
      {showSaveBtn && <ItemForm handleFormSubmit={handleFormSubmit} />}
      <button className="add-additional-item save" onClick={handleAddItem}>
        <FontAwesomeIcon icon={faPlus} /> </button>
    </>
    }

  </div>;
}

export { AddEducation }