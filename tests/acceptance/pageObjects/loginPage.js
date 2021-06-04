module.exports = {
  url: function () {
    return this.api.launchUrl
  },
  commands: {
    isLoginPage: function () {
      return this.waitForElementVisible('@loginPageHeader')
    },
    setEmail: function (email) {
      return this.waitForElementVisible('@emailInput')
        .clearValue('@emailInput')
        .setValue('@emailInput', email)
    },
    setPassword: function (password) {
      return this.waitForElementVisible('@passwordInput')
        .clearValue('@passwordInput')
        .setValue('@passwordInput', password)
    },
    login: async function (email, password) {
      if (email) {
        await this.setEmail(email)
      }
      if (password) {
        await this.setPassword(password)
      }
      return this.waitForElementVisible('@loginButton').click('@loginButton')
    },
    getErrorMessage: async function () {
      await this.waitForElementVisible('@invalidMessage')
      let errorMsg
      await this.getText('@invalidMessage', (res) => (errorMsg = res.value))
      return errorMsg
    },
    getSignupMessage: async function () {
      await this.waitForElementVisible('@signupMessage')
      let signupMsg
      await this.getText('@signupMessage', (res) => (signupMsg = res.value))
      return signupMsg
    },
  },
  elements: {
    loginPageHeader: 'h1.header',
    emailInput: 'input.loginInputStyle',
    passwordInput: 'input[type=password]',
    loginButton: 'button.button',
    invalidMessage: '.negative.message',
    signupMessage: '.positive.message',
  },
}
