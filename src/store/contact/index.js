export default {
	namespaced: true,

	actions: {
		async submitRequest(context, payload) {
			const newRequest = {
				Name: payload.name,
				Email: payload.email,
				Message: payload.message,
			};

			const response = await fetch("https://formspree.io/f/mzbqwwvp", {
				method: "POST",
				body: JSON.stringify(newRequest),
			});

			const responseData = await response.json();

			if (!response.ok) {
				const error = new Error(
					responseData.message || "Failed to send request"
				);
				throw error;
			}
		},
	},
};
