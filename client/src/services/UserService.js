const UserService = {
	fetchUsers() => {
		return fetch('/users').then(response => response.json())
	}
}

export default UserService;