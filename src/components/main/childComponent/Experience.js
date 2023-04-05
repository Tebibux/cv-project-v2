import React, { Component } from "react";

class Experience extends Component {
	render() {
		return (
			<div className="userExperience">
				<div className="title">Experience</div>
				<ul>
					<li>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
						Nam beatae numquam, </li>
					<li>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
						Nam beatae numquam, </li>
				</ul>
				<div className="user-experience-dic" >
					<input type="text" name="userExperience" placeholder="Add your Experience here"/>
					<button className="btn-add">Add</button>
				</div>
			</div>
		);
	}
}

export default Experience;
