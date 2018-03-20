const UserService = {
	fetchUsers() {
		return fetch('/api/users').then(response => response.json())
	},

	createUser(user) {
		const request = {
			method: 'POST',
			body: JSON.stringify({
				user: user
			}),
			headers: {
				'Content-Type': 'application/json',
			}
		};

		return fetch('/api/users', request)
			.then(response => response.json())
	}
}

export default UserService;