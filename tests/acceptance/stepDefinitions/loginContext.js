const { Given, When, Then } = require('@cucumber/cucumber')
const { client } = require('nightwatch-api')

Given('the user has browsed to the login page', async () => {
  return client.url(client.launchUrl).pause(2000)
})

When(
  'the user tries to login with email {string} and password {string} using the webUI',
  async function (email, password) {
    await client
      .waitForElementVisible('input.loginInputStyle')
      .setValue('input.loginInputStyle', email)
    await client
      .waitForElementVisible('input[type=password]')
      .setValue('input[type=password]', password)
    return client.click('button.button')
  }
)

Then('the invalid message {string} should appear', async function (invalidMsg) {
  await client.waitForElementVisible('.negative.message')
  return client.assert.containsText('.negative.message', invalidMsg)
})

Given('the user has browsed to the signup page', function () {
  return client.url(client.launchUrl + '/#/signup')
})

When(
  'the user signup with following data using the webUI',
  function (dataTable) {
    const signupData = dataTable.rowsHash()
    const { firstName, lastName, email, password } = signupData
    return client
      .waitForElementVisible("input[type='firstName']")
      .setValue("input[type='firstName']", firstName)
      .waitForElementVisible("input[type='lastName']")
      .setValue("input[type='lastName']", lastName)
      .waitForElementVisible("input[type='email']")
      .setValue("input[type='email']", email)
      .waitForElementVisible("input[type='password']")
      .setValue("input[type='password']", password)
      .click('button.button')
  }
)

Then('the user sholud be in login page', function () {
  return client
    .waitForElementVisible('h1.header')
    .assert.containsText('h1.header', 'aikon Calendar')
})

Then('the message {string} should appear', function (successMsg) {
  return client
    .waitForElementVisible('.positive.message')
    .assert.containsText('.positive.message', successMsg)
})
