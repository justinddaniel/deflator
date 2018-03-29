import React, {Component} from 'react';

class User extends Component {

	state = { likes: 0}

	userLikes = () => {
    	this.setState({
    		likes: this.state.likes + 1
    	});
  	}


	render() {

		const {user} = this.props
		return <div>
      <li key={user.id}>Username: {user.name}, Likes: <span id={user.id}>{this.state.likes}</span> </li>
      
      <button type="button" id={user.id + 11} onClick={(e) => this.userLikes()}>Like user</button>
      
    </div>
	}
}

export default User;