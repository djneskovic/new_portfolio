import axios from "axios";

export default {
	namespaced: true,

	actions: {
		//* Method with async and await

		// async submitRequest(context, payload) {
		// 	const newRequest = {
		// 		Name: payload.name,
		// 		Email: payload.email,
		// 		Message: payload.message,
		// 	};

		// 	const response = await fetch("https://formspree.io/f/mzbqwwvp", {
		// 		method: "POST",
		// 		body: JSON.stringify(newRequest),
		// 	});

		// 	const responseData = await response.json();

		// 	if (!response.ok) {
		// 		const error = new Error(
		// 			responseData.message || "Failed to send request"
		// 		);
		// 		throw error;
		// 	}
		// },

		//* Method with axios

		submitRequest(_, payload) {
			const newRequest = {
				Name: payload.name,
				Email: payload.email,
				Message: payload.message,
			};

			axios.post("https://formspree.io/f/mzbqwwvp", newRequest)
				.then((res) => {
					console.log(res.data);
				})
				.catch((err) => {
					console.log(err);
				});
		},
	},
};
