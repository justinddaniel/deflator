const UserService = {
	fetchUsers() => {
		return fetch('/api/users').then(response => response.json())
	}
}

export default UserService;