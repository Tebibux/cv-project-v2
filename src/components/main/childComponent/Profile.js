import React, { Component, useState } from "react";

class Profile extends Component {
	constructor() {
		super();
		this.state = {
			userImg: null,
		}
	};
	previewImage = () => {
			let fileInput = document.getElementById('fileInput');
			let imageDiv = document.getElementById('image-div');
			let label = document.getElementById('image-selection');
			// Get the selected image
			fileInput.addEventListener('change', () => {
				const imageFile  = fileInput.files[0];
				if(imageFile){
					const reader = new FileReader();
					reader.readAsDataURL(imageFile);
					reader.onload = () => {
						const imgData = reader.result;
						localStorage.setItem('imageData', imgData);
						const userImage = new Image();
						userImage.setAttribute('src', imgData);
						userImage.setAttribute('id', 'userImage')
						imageDiv.appendChild(userImage);
						label.style.display = 'none'
					};
					reader.onerror = (error) => {
						console.error('Error: ', error);
					}
				} else {
					console.warn('No file Selected')
				}
				
			})
				
	}
	render() {
		return (
			<div className="profile">
				{/* profile starts Here */}
				<div className="userProfile">
					<div id="image-div">
						<label htmlFor="fileInput" id="image-selection">
							<input type="file" accept=".jpg, .jpeg, .png"
								name="fileInput" id="fileInput" onClick={this.previewImage}/>
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

