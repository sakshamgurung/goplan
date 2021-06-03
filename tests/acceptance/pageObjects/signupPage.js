module.exports = {
  url: function () {
    return this.api.launchUrl + '/#/signup'
  },
  commands: {
    setFirstName: async function (firstName) {
      return await this.waitForElementVisible('@firstNameInput')
        .clearValue('@firstNameInput')
        .setValue('@firstNameInput', firstName)
    },
    setLastName: async function (lastName) {
      return await this.waitForElementVisible('@lastNameInput')
        .clearValue('@lastNameInput')
        .setValue('@lastNameInput', lastName)
    },
    setEmail: async function (email) {
      return await this.waitForElementVisible('@emailInput')
        .clearValue('@emailInput')
        .setValue('@emailInput', email)
    },
    setPassword: async function (password) {
      return await this.waitForElementVisible('@passwordInput')
        .clearValue('@passwordInput')
        .setValue('@passwordInput', password)
    },
    signup: async function (firstName, lastName, email, password) {
      await this.setFirstName(firstName)
      await this.setLastName(lastName)
      await this.setEmail(email)
      await this.setPassword(password)
      return this.click('@signupButton')
    },
    getErrorMessage: async function () {
      let errorMsg

      await this.waitForElementVisible('@errorMessage').getText(
        '@errorMessage',
        (res) => (errorMsg = res.value)
      )

      return errorMsg
    },
  },
  elements: {
    firstNameInput: "input[type='firstName']",
    lastNameInput: "input[type='lastName']",
    emailInput: "input[type='email']",
    passwordInput: "input[type='password']",
    signupButton: 'button.button',
    errorMessage: '.negative.message',
  },
}
