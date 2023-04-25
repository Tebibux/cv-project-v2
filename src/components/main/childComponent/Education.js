import React, { useState } from "react";
import uuid4 from "uuid4";

const Education = () => {
	const { certification, setCertification } = useState({ diploma: '' });
	const diplomas = [];
	const inputAddDocument = document.getElementById('listOfEducations')

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
			diplomas: certification.diplomas.concat(this.state.certification),
			certification: { diploma: '' }
		})
	}

	return (
		<div className="userEducation">
			<div className="title">Education</div>
			<ul className="educations">
				{
					diplomas.map((certification) => {
						return <li key={uuid4()}>{certification.diploma}</li>
					})

				}
			</ul>
			{
				(diplomas.length < 4) ? (
					<div className="user-education-dic" id="listOfEducations">
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


export default Education;
