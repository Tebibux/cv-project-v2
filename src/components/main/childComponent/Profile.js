import React, { Component, useState } from "react";

class Profile extends Component {
	constructor() {
		super();
		this.state = {
			userImg: null,
		}
	};
	previewImage = () => {
			let fileInput = document.getElementById('image-selection');
			// Get the selected image
			fileInput.addEventListener('change', (e) => {
				const inputtedImage = document.getElementById('fileInput');
			})	
			// eslint-disable-next-line no-lone-blocks
			fileInput.style.display = 'none'; {/* this disable the image button */ }
				
	}
	render() {
		return (
			<div className="profile">
				{/* profile starts Here */}
				<div className="userProfile">
					<div id="image-div">
						<label htmlFor="fileInput" id="image-selection">
							<input type="file" accept=".jpg, .jpeg, .png"
								name="fileInput" id="fileInput" onChange={this.previewImage} />
						</label>

						{/* Add placeholder here for the image */}
					</div>
					<div className="disc">
						<input type="text" name="userName" placeholder="Your Name" />
						<input type="text" name="userBio" placeholder="Small bio about yourself here" />
					</div>
				</div>
				<div className="userAddress">
					<form >
						<input type="tel" name="userPhone" placeholder="You'r Phone Here" />
						<input type="text" name="userLocation" placeholder="Your current location here" />
						<input type="email" name="userEmail" placeholder="Your email here" />
						<input type="url" name="linkedIn" placeholder="Your linkedIn here" />
					</form>
				</div>
				{/* profile ends Here */}
			</div>

		);
	}
}

export default Profile;
<div className="main">


	{/* Education states here */}
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
			<input type="text" name="education" placeholder="Add your Educations here" />
			<button className="btn-add">Add</button>
		</div>
	</div>
	{/* education ends Here */}

	{/* experience starts Here */}
	<div className="userExperience">
		<div className="title">Experience</div>
		<ul>
			<li>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
				Nam beatae numquam, </li>
			<li>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
				Nam beatae numquam, </li>
		</ul>
		<div className="user-experience-dic" >
			<input type="text" name="userExperience" placeholder="Add your Experience here" />
			<button className="btn-add">Add</button>
		</div>
	</div>
	{/* experience ends Here */}
	{/* skill starts Here */}
	<div className="userSkill">
		<div className="title">Skill</div>
		<ul>
			<li>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
				Nam beatae numquam, </li>
			<li>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
				Nam beatae numquam, </li>
		</ul>
		<div className="user-skill-dic" >
			<input type="text" name="userSkill" placeholder="Add your skills here" />
			<button className="btn-add">Add</button>
		</div>
	</div>
	{/* skill ends Here */}
</div>
