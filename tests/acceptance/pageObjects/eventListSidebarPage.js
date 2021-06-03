module.exports = {
  url: function () {
    return this.api.launchUrl + '/#/dashboard'
  },
  commands: {
    isEventListSidebarPage: function () {
      return this.waitForElementVisible('@exportAllButton')
    },
    getTopEventTitle: function () {
      return this.waitForElementVisible('@topEventTitle').getText(
        '@topEventTitle'
      )
    },
  },
  elements: {
    exportAllButton: {
      selector: '//button[text()="Export All"]',
      locateStrategy: 'xpath',
    },
    topEventTitle: 'div.card .header',
  },
}
