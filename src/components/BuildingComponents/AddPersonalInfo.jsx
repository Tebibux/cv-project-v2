/* eslint-disable react/prop-types */
const AddPersonalInfo = ({
  FontAwesomeIcon,
  handlePersonInfoShow,
  faChevronDown,
  isShowPersonalInfo
}) => {

  return <div className="personal-information  information-parent">
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
  </div>;
}


export { AddPersonalInfo }
