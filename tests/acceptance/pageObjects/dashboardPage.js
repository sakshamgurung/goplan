module.exports = {
  url: function () {
    return this.api.launchUrl
  },
  commands: {
    isDashboardPage: function () {
      return this.waitForElementVisible('@dashboardPageNavBarItem')
    },
  },
  elements: {
    dashboardPageNavBarItem: '.contentNavBar',
  },
}
