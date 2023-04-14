import React, { Component } from "react";
import uuid4 from "uuid4";

class Skill extends Component {
	constructor(props) {
		super(props);
		this.state = {
			certification: { diploma: '' },
			diplomas: [],
		}
	}
	handleChange = (e) => {
		this.setState({
			certification: {
				diploma: e.target.value,
			}
		})
	}
	handleAdd = (e) => {
		e.preventDefault();
		this.setState({
			diplomas: this.state.diplomas.concat(this.state.certification),
			certification: { diploma: '' }
		})
	}
	render() {
		const { certification, diplomas } = this.state;
		const inputAddDocument = document.getElementById('listOfSkill')
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
				{
					(diplomas.length < 4) ? (
						<div className="user-skill-dic" id="listOfSkill">
							<input type="text" name="skills" placeholder="Add your Skills here"
								onChange={this.handleChange}
								value={certification.diploma}
							/>
							<button className="btn-add"
								onClick={this.handleAdd}
							>Add</button>
						</div>
					) : (
						inputAddDocument.style.display = ''
					)
				}

			</div>
		);
	}
}

export default Skill;
