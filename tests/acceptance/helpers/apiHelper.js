const axios = require('axios')

const { user } = require('../../globals/loggedUser')

const apiBaseUrl = `http://localhost:5000/api`
const endPoints = {
  USER: apiBaseUrl + '/users',
}

async function createUser(userData) {
  let status = false
  const userForm = {
    user: { ...userData, isAdmin: false },
  }
  try {
    const res = await axios.post(endPoints.USER, userForm)
    status = true
  } catch (err) {
    if (err.response.data.error == 'A user already exists with given email') {
      status = true
    }
  }
  if (status) {
    user.email = userData.email
  }
  return status
}

module.exports = { createUser }
