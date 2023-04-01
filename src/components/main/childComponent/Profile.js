import React, { Component } from "react";

class Profile extends Component {
	render() {
		return (
			<div className="profile">
				<div className="userProfile">
					<div className="image">
						<input type="file" name="userImage"
							accept="image/png, image/gif, image/jpeg" />
						{/* Add placeholder here for the image */}
					</div>
					<div className="disc">
						<input type="text" name="userName" placeholder="Your Name"/>
						<input type="text" name="userBio" placeholder="Small bio about yourself here"/>
					</div>
				</div>
				<div className="userAddress">
					<form >
						<input type="tel" name="userPhone" placeholder="You'r Phone Here"/>
						<input type="text" name="userLocation" placeholder="Your current location here"/>
						<input type="email" name="userEmail" placeholder="Your email here" />
						<input type="url" name="linkedIn" placeholder="Your linkedIn here"/>
					</form>
				</div>
			</div>
		);
	}
}

export default Profile;
