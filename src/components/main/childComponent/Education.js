import React, { Component } from "react";

class Education extends Component {
	constructor(){
		super();
		this.state = {
			certification: {diploma: ''},
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
			certification: {diploma: ''}
		})
	}
	render() {
		const {certification, diplomas} = this.state;
		return (
			<div className="userEducation">
				<div className="title">Education</div>
				<ul className="educations">
					<li>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
						Nam beatae numquam, </li>
					
					{diplomas.map((certification) => {
						return <li>{certification.diploma}</li>
					})}
										
				</ul>
				<div className="user-education-dic" >
					<input type="text" name="education" placeholder="Add your Educations here"
					onChange={this.handleChange}
					value={certification}
					/>
					<button className="btn-add"
						onClick={this.handleAdd}
					>Add</button>
				</div>
			</div>
		);
	}
}

export default Education;
