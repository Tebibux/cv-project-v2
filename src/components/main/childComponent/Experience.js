import React, {useState} from "react";
import uuid4 from "uuid4";

const Experience = () => {
	const { certification, setCertification } = useState({ diploma: '' });
	const diplomas = [];
	const inputAddDocument = document.getElementById('listOfEducations');
	const handleChange = (e) => {
		setCertification({
			certification: {
				diploma: e.target.value,
			}
		})
	}
	const handleAdd = (e) => {
		e.preventDefault();
		setCertification({
			diplomas: certification.diplomas.concat(certification.diploma),
			certification: { diploma: '' }
		})
	}

	return (
		<div className="userExperience">
			<div className="title">Experience</div>
			<ul className="experience">
				{
					diplomas.map((certification) => {
						return <li key={uuid4()}>{certification.diploma}</li>
					})

				}
			</ul>
			{
				(diplomas.length < 4) ? (
					<div className="user-experience-dic" id="listOfEducations">
						<input type="text" name="education" placeholder="Add your Educations here"
							onChange={handleChange}
							value={certification.diploma}
						/>
						<button className="btn-add"
							onClick={handleAdd}
						>Add</button>
					</div>
				) : (
					inputAddDocument.style.display = ''
				)
			}

		</div>
	);
}

export default Experience;
