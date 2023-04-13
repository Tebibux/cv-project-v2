import React, { Component } from "react";

class Profile extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isInputNameActive: true,
			inputNameValue: '',
			isInputBioActive: true,
			inputBioValue: '',
			isInputUserPhoneActive: true,
			inputUserPhoneValue: '',
			isInputLocationActive: true,
			inputUserLocationValue: '',
		};
	};
	previewImage = () => {
		let fileInput = document.getElementById('fileInput');
		let imageDiv = document.getElementById('image-div');
		let label = document.getElementById('image-selection');
		// Get the selected image
		fileInput.addEventListener('change', () => {
			const imageFile = fileInput.files[0];
			if (imageFile) {
				const reader = new FileReader();
				reader.readAsDataURL(imageFile);
				reader.onload = () => {
					const imgData = reader.result;
					localStorage.setItem('imageData', imgData);
					const userImage = new Image();
					userImage.setAttribute('src', imgData);
					userImage.setAttribute('id', 'userImage')
					imageDiv.appendChild(userImage);
					label.style.display = 'none';
					imageDiv.style.display = 'grid';
					imageDiv.style.placeItems = 'center';
				};
				reader.onerror = (error) => {
					console.error('Error: ', error);
				}
			} else {
				console.warn('No file Selected')
			}

		})

	}
	// userName Start
	// this will reactivate the text area when double click
	handleNameDoubleClick = () => {
		this.setState({ isInputNameActive: true });
	}
	handleNameBlur = () => {
		this.setState({ isInputNameActive: false });
	}
	// this will change the input name value to the user input 
	handleNameChange = (event) => {
		this.setState({ inputNameValue: event.target.value });
	}
	// userName done

	// userBio Started
	handleBioDoubleClick = () => {
		this.setState({ isInputBioActive: true });
	}
	handleBioBlur = () => {
		this.setState({ isInputBioActive: false });
	}
	handleBioChange = (event) => {
		this.setState({ inputBioValue: event.target.value });
	}
	// userBio //done if done

	// userAddress starts here
	// user phone starts here
	handlePhoneDoubleClick = () => {
		this.setState({ isInputUserPhoneActive: true });
	}
	handlePhoneBlur = () => {
		this.setState({ isInputUserPhoneActive: false })
	}
	handlePhoneChange = (e) => {
		this.setState({ inputUserPhoneValue: e.target.value })
	}
	// userPhone ends here
	handleLocationDoubleClick = () => {
		this.setState({ isInputLocationActive: true });
	}
	handleLocationBlur = () => {
		this.setState({ isInputLocationActive: false })
	}
	handleLocationChange = (e) => {
		this.setState({ inputUserLocationValue: e.target.value })
	}
	// userAddress ends here
	render() {
		const { isInputNameActive, inputNameValue,
			isInputBioActive, inputBioValue,
			isInputUserPhoneActive, inputUserPhoneValue,
			isInputLocationActive, inputUserLocationValue
		} = this.state;
		return (
			<div className="profile">
				{/* profile starts Here */}
				<div className="userProfile">
					<div id="image-div">
						<label htmlFor="fileInput" id="image-selection">
							<input type="file" accept=".jpg, .jpeg, .png"
								name="fileInput" id="fileInput" onClick={this.previewImage} />
						</label>

						{/* Add placeholder here for the image */}
					</div>
					{/* image input ends here */}
					<div className="disc">
						{
							isInputNameActive || inputNameValue === '' ? (
								<input type="text" name="userName"
									placeholder="Your Name" id="userName"
									value={inputNameValue}
									onChange={this.handleNameChange}
									onBlur={this.handleNameBlur}

								/>
							) : (
								<div className="userName"
									onDoubleClick={this.handleNameDoubleClick} >
									{inputNameValue}
								</div>
							)
						}
						{/* using the logic in the userName input render the Bio */}
						{
							isInputBioActive || inputBioValue === '' ? (

								<textarea type="text" name="userBio" rows="4" cols="50"
									placeholder="Small bio about yourself here" id="userBio"
									value={inputBioValue}
									onChange={this.handleBioChange}
									onBlur={this.handleBioBlur}
								/>
							) : (
								<div className="userBio"
									onDoubleClick={this.handleBioDoubleClick} >
									{inputBioValue}
								</div>
							)
						}
					</div>
				</div>
				<div className="userAddress">
					<form >
						{
							isInputUserPhoneActive || inputUserPhoneValue === '' ? (
								<input type="tel" name="userPhone"
									placeholder="You'r Phone Here"
									value={inputUserPhoneValue}
									onChange={this.handlePhoneChange}
									onBlur={this.handlePhoneBlur}
								/>
							) : (
								<div className="userPhone"
									onDoubleClick={this.handlePhoneDoubleClick}
								>
									{inputUserPhoneValue}
								</div>
							)

						}
						{

							isInputLocationActive || inputUserLocationValue === '' ? (
								< input type="text" name="userLocation"
									placeholder="Your current location here"
									value={inputUserLocationValue}
									onChange={this.handleLocationChange}
									onBlur={this.handleLocationBlur}
								/>
							) : (
								<div className="userLocation"
									onDoubleClick={this.handleLocationDoubleClick}
								>
									{inputUserLocationValue}
								</div>
							)
						}
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