// ** Action Creators **
export const updateUserFormData = userFormData => {
  return {
    type: 'UPDATED_DATA',
    userFormData
  }
}

export const resetUserForm = () => {
  return {
    type: 'RESET_USER_FORM'
  }
}