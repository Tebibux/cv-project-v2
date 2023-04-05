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
				<div className="user-education-dic" >
					<input type="text" name="education" placeholder="Add your Educations here"/>
					<button className="btn-add">Add</button>
				</div>
			</div>
		);
	}
}

export default Education;
