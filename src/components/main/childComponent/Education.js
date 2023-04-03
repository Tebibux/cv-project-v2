import React, { Component } from "react";

class Education extends Component {
	render() {
		return (
			<div className="userEducation">
				<div className="title">Education</div>
				<ul className="educations">
					<li>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
						Nam beatae numquam, </li>
					<li>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
						Nam beatae numquam, </li>
					<li>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
						Nam beatae numquam, </li>						
				</ul>
				<form >
					<input type="text" name="education" />
					<button className="btn-add">Add</button>
				</form>
			</div>
		);
	}
}

export default Education;
