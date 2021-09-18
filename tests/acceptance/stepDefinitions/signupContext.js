const { Given, When, Then } = require('@cucumber/cucumber')
const { client } = require('nightwatch-api')
const assert = require('assert')

const { cacheCreatedUser, createUser } = require('../helpers/apiHelper')

const signupPage = client.page.signupPage()

Given('the user has browsed to the signup page', async function () {
  return signupPage.navigate()
})

Given(
  'the user has been created with following credentials',
  async function (dataTable) {
    const userData = dataTable.rowsHash()
    const createUserStatus = await createUser(userData)
    assert.strictEqual(createUserStatus, true, 'Can not create user.')
  }
)

When(
  'a user signs up with following data using the webUI',
  function (dataTable) {
    const signupData = dataTable.rowsHash()
    const { firstName, lastName, email, password } = signupData
    cacheCreatedUser(email)
    return signupPage.signup(firstName, lastName, email, password)
  }
)

Then(
  'the following message should be displayed in the webUI',
  async function (dataTable) {
    const messageData = dataTable.rowsHash()
    const expectedErrorMsg = messageData.message
    const actualErrorMsg = await signupPage.getErrorMessage()
    console.log(actualErrorMsg)
    assert.strictEqual(
      actualErrorMsg,
      expectedErrorMsg,
      `Expected ${expectedErrorMsg} but got ${actualErrorMsg}`
    )
  }
)
