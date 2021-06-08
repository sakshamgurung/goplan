const { Given, When, Then } = require('@cucumber/cucumber')
const { client } = require('nightwatch-api')
const assert = require('assert')

const signupPage = client.page.signupPage()
const loginPage = client.page.loginPage()

Given('the user has browsed to the signup page', async function () {
  return signupPage.navigate()
})

When(
  'the user signup with following data using the webUI',
  function (dataTable) {
    const signupData = dataTable.rowsHash()
    const { firstName, lastName, email, password } = signupData
    return signupPage.signup(firstName, lastName, email, password)
  }
)

Then('the user should be in login page', async function () {
  return loginPage.isLoginPage()
})

Then(
  'the message {string} should be displayed in the webUI',
  async function (successMsg) {
    let expectedMsg = successMsg.toLowerCase()

    let actualMsg = await loginPage.getSignupMessage()
    actualMsg = actualMsg.toLowerCase()

    assert.strictEqual(
      actualMsg,
      expectedMsg,
      `Expected "${expectedMsg}" but got "${actualMsg}"`
    )
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
