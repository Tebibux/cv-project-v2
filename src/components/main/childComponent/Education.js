import React, { useEffect, useState } from "react";
import uuid4 from "uuid4";

const Education = () => {
	const [diplomas, setDiplomas] = useState([]);
	const [certification, setCertification] = useState('');

	const inputAddDocument = document.getElementById('listOfEducations');
	// constructor(props) {
	// 	super(props);
	// 	this.state = {
	// 		certification: { diploma: '' },
	// 		diplomas: [],
	// 	}
	// }
	useEffect(() => {
		console.log('ho hope')

	}, [diplomas])
	const handleChange = (e) => {
		setCertification(e.target.value)
	}

	const handleAdd = (e) => {
		e.preventDefault();
		setDiplomas([...diplomas, certification]);
		setCertification('');
	}

	return (
		<div className="userEducation">
			<div className="title">Education</div>
			<ul id="listItem" className="educations">
				{
					diplomas.map((certification) => {
						return <li key={uuid4()}>{certification}</li>
					})

				}
			</ul>
			{
				(diplomas.length < 4) ? (
					<div className="user-education-dic" id="listOfEducations">
						<input type="text" name="education" placeholder="Add your Educations here"
							onChange={handleChange}
							value={certification}
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
