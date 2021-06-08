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
    selectDay: async function (day) {
      const dayElement = this.getDayElement(day)
      return this.useXpath()
        .waitForElementVisible(dayElement)
        .click(dayElement)
        .useCss()
    },
    getDayElement: function (day) {
      return `${this.elements.activeDaysOfTheMonth.selector}[.=${day}]`
    },
  },
  elements: {
    dashboardPageNavBarItem: '.contentNavBar',
    createEventButton: 'button i.plus.small.icon',
    activeDaysOfTheMonth: {
      selector: '//table//td[@class!="disabled"]//span',
      locateStrategy: 'xpath',
    },
  },
}
