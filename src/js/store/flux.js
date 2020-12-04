const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			loggedIn: false,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			setLoggedIn: loginForm => {
				const store = getStore();
				if (!loginForm) store.loggedIn = false;
				else if (loginForm.email.length > 0 && loginForm.password.length > 0) {
					store.loggedIn = true;
				} else {
					alert("Please Enter Email and Password");
				}
			}
		}
	};
};

export default getState;
