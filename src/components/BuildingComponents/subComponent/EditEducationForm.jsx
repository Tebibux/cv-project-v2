import { useState } from 'react';

const EditEducationForm = ({ education, handleEdit }) => {
	const [editedEducation, setEditedEducation] = useState(education);

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setEditedEducation((prevEducation) => ({
			...prevEducation,
			[name]: value,
		}));
	};

	const handleSave = () => {
		handleEdit(editedEducation);
	};

	return (
		<div className="edit-education-form">
			<input
				type="text"
				name="userEducation"
				value={editedEducation.userEducation}
				onChange={handleInputChange}
			/>
			<input
				type="text"
				name="degree"
				value={editedEducation.degree}
				onChange={handleInputChange}
			/>
			<input
				type="text"
				name="userInstitute"
				value={editedEducation.userInstitute}
				onChange={handleInputChange}
			/>
			<input
				type="date"
				name="userEduDurationYearFrom"
				value={editedEducation.userEduDurationYearFrom}
				onChange={handleInputChange}
			/>
			<input
				type="date"
				name="userEduDurationYearTo"
				value={editedEducation.userEduDurationYearTo}
				onChange={handleInputChange}
			/>
			<button onClick={handleSave}>Save</button>
		</div>
	);
};

export default EditEducationForm;
