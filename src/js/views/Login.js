import React from "react";
import "../../styles/index.scss";

export const Login = () => {
	return (
		<div className="form-wrapper">
			<div className="inner-form">
				<div className="input-text">
					<input type="text" placeholder="Email" />
				</div>
				<div className="input-text">
					<input type="text" placeholder="Password" />
				</div>
				<div className="submit-button-wrapper">
					<button className="submit-button">LOGIN</button>
				</div>
			</div>
		</div>
	);
};
