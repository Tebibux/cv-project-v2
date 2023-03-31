import React, { Component } from "react";
import Profile from "./childComponent/Profile";
import Education from "./childComponent/Education";
import Experience from "./childComponent/Experience";
import Skill from "./childComponent/Skill";
class Main extends Component {
	render() {
		return (
			<main className="main">
				<Profile />
				<Education />
				<Experience />
				<Skill />
			</main>
		);
	}
}

export default Main;
