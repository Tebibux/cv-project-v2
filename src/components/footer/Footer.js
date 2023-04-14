import React, { Component } from "react";
import '@fortawesome/fontawesome-free/css/all.css';
class Footer extends Component {
	render() {
		return (
			<footer className="footer">
				<div className="footer-text">
					<h4>TheOdinProject 2022 Tebibux ©
						<a href="https://github.com/Tebibux/cv-project">
							<i className="fa fa-github" >
							</i>
						</a>
					</h4>
				</div>
			</footer>
		);
	}
}

export default Footer;
