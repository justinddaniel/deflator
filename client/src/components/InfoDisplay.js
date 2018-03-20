import React from 'react';

const Users = ({ users }) => {
  const renderInfo = users.map(user => 
    <p key={user.id}>{user.name}</p>
  )

  return (
    <div>
      {renderInfo}
    </div>
  )
}

export default Users;