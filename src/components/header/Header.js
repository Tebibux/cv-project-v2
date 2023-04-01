import React, { Component } from "react";

class Header extends Component {
	render() {
		return (
			<header className="header">
				<h1 className="header-title">
					Build Your CV
				</h1>
				<button className="btn-preview">Preview</button>
			</header>
		);
	}
}

export default Header;
