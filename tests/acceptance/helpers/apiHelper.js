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
    throw err
  }
  if (status) {
    cacheCreatedUser(userData.email)
  }
  return status
}

function cacheCreatedUser(email) {
  return (user.email = email)
}

async function deleteUser() {
  try {
    const res = await axios.delete(endPoints.USER, { data: user })
    console.log('After deleteUser:', res.data.message)
  } catch (err) {
    console.log('err from deleteUser:', err.response.data)
  }
}

module.exports = { endPoints, cacheCreatedUser, createUser, deleteUser }
