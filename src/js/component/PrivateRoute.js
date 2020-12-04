import React, { useContext } from "react";
import { Route, useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export const PrivateRoute = ({ children, ...rest }) => {
	const { store, actions } = useContext(Context);
	const history = useHistory();

	if (!store.loggedIn) {
		history.push("/login");
		return "Redirecting";
		console.log("Hello");
	}
	return <Route {...rest}>{children}</Route>;
};

PrivateRoute.propTypes = {
	children: PropTypes.node
};
PrivateRoute.defaultProps = {
	children: null
};
