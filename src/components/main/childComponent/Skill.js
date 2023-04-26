import React, { useState, useEffect } from "react";
import uuid4 from "uuid4";

const Skill = () => {
	const [diplomas, setDiplomas] = useState([]);
	const [certification, setCertification] = useState('');
	const inputAddDocument = document.getElementById('listOfSkill')
	// constructor(props) {
	// 	super(props);
	// 	this.state = {
	// 		certification: { diploma: '' },
	// 		diplomas: [],
	// 	}
	// }

	useEffect(() => {
		console.log('there is hope')

	}, [diplomas])
	const handleChange = (e) => {
		setCertification(e.target.value);
	}
	const handleAdd = (e) => {
		e.preventDefault();
		setDiplomas([...diplomas, certification]);
		setCertification('');
	}

	return (
		<div className="userSkill">
			<div className="title">Skill</div>
			<ul className="skills">
				{
					diplomas.map((certification) => {
						return <li key={uuid4()}>{certification}</li>
					})

				}
			</ul>
			{
				(diplomas.length < 4) ? (
					<div className="user-skill-dic" id="listOfSkill">
						<input type="text" name="skills" placeholder="Add your Skills here"
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

export default Skill;
