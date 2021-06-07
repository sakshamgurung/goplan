module.exports = {
  url: function () {
    return this.api.launchUrl + '/#/dashboard'
  },
  commands: {
    isDashboardPage: function () {
      return this.waitForElementVisible('@dashboardPageNavBarItem')
    },

    openNewEventSidebar: function () {
      return this.waitForElementVisible('@createEventButton').click(
        '@createEventButton'
      )
    },
  },
  elements: {
    dashboardPageNavBarItem: '.contentNavBar',
    createEventButton: 'button i.plus.small.icon',
  },
}
