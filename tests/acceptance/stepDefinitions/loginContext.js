const { Given, When, Then } = require('@cucumber/cucumber')
const { client } = require('nightwatch-api')
const assert = require('assert')

const { createUser } = require('../helpers/apiHelper')

const loginPage = client.page.loginPage()
const dashboardPage = client.page.dashboardPage()

Given('the user has browsed to the login page', async () => {
  return loginPage.navigate()
})

Given(
  'the user has been created with following credential',
  async function (dataTable) {
    const userData = dataTable.rowsHash()
    const createUserStatus = await createUser(userData)
    assert.strictEqual(createUserStatus, true, 'Can not create user.')
  }
)

Given(
  'the user has logged with email {string} and password {string}',
  async function (email, password) {
    await loginPage.navigate()
    await loginPage.isLoginPage()
    await loginPage.login(email, password)
    return dashboardPage
      .isDashboardPage()
      .assert.containsText(
        dashboardPage.elements.dashboardPageNavBarItem,
        'GoPlan'
      )
  }
)

When(
  'the user tries to login with email {string} and password {string} using the webUI',
  function (email, password) {
    return loginPage.login(email, password)
  }
)

Then(
  'the invalid message {string} should be displayed in the webUI',
  async function (invalidMsg) {
    const actualMsg = await loginPage.getErrorMessage()
    assert.strictEqual(
      actualMsg,
      invalidMsg,
      `Expected "${invalidMsg}" but got "${actualMsg}"`
    )
  }
)

Then('the user should be in dashboard page', function () {
  return dashboardPage.isDashboardPage()
})
