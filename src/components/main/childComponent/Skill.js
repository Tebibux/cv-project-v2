import React, { useState } from "react";
import uuid4 from "uuid4";


const Skill = (props) => {
	const { certification, setCertification } = useState('');
	const inputAddDocument = document.getElementById('listOfSkill')

	state = {
		certification: { diploma: '' },
		diplomas: [],
	}
	const handleChange = (e) => {
		setState({
			certification: {
				diploma: e.target.value,
			}
		})
	}
	const handleAdd = (e) => {
		e.preventDefault();
		setState({
			diplomas: state.diplomas.concat(state.certification),
			certification: { diploma: '' }
		})
	}

	return (
		<div className="userSkill">
			<div className="title">Skill</div>
			<ul className="skills">
				{
					diplomas.map((certification) => {
						return <li key={uuid4()}>{certification.diploma}</li>
					})

				}
			</ul>
			{diplomas
				(diplomas.length < 4) ? (
				<div className="user-skill-dic" id="listOfSkill">
					<input type="text" name="skills" placeholder="Add your Skills here"
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
	)
}
export default Skill;
