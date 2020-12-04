import React, { useState, useContext } from "react";
import "../../styles/index.scss";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";

export const Login = () => {
	let history = useHistory();
	const { store, actions } = useContext(Context);
	const [loginForm, setLoginForm] = useState({
		email: "",
		password: ""
	});

	return (
		<div className="form-wrapper">
			<div className="inner-form">
				<div className="input-text">
					<input
						onChange={event => setLoginForm({ ...loginForm, email: event.target.value })}
						type="text"
						placeholder="Email"
					/>
				</div>
				<div className="input-text">
					<input
						onChange={event => setLoginForm({ ...loginForm, password: event.target.value })}
						type="password"
						placeholder="Password"
					/>
				</div>
				<div className="submit-button-wrapper">
					<button
						onClick={() => {
							actions.setLoggedIn(loginForm);
							history.push("/demo");
						}}
						className="submit-button">
						LOGIN
					</button>
				</div>
			</div>
		</div>
	);
};
