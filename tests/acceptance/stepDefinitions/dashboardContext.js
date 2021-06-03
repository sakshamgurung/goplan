const { Given, When, Then } = require('@cucumber/cucumber')
const { client } = require('nightwatch-api')
const assert = require('assert')

const dashboardPage = client.page.dashboardPage()
const newEventSidebarPage = client.page.newEventSidebarPage()
const eventListSidebarPage = client.page.eventListSidebarPage()

Given('the user has opened new event sidebar', async function () {
  return dashboardPage.openNewEventSidebar()
})

When(
  'a user creates an event with following information using the webUI',
  async function (dataTable) {
    const eventData = dataTable.rowsHash()
    const {
      eventName,
      description,
      location,
      date,
      startTime,
      endTime,
      recurrenceType,
    } = eventData
    await newEventSidebarPage.isNewEventSidebarPage()
    return newEventSidebarPage.createNewEvent(
      eventName,
      description,
      location,
      date,
      startTime,
      endTime,
      recurrenceType
    )
  }
)

Then(
  'the event should be listed under date {string} with event title {string} in the webUI',
  async function (date, eventTitle) {
    let day = date.substring(3, 5)
    if (day.substring(0, 1) == 0) {
      day = day[1]
    }

    await dashboardPage.selectDay(day)
    return eventListSidebarPage
      .isEventListSidebarPage()
      .assert.containsText(
        eventListSidebarPage.elements.topEventTitle,
        eventTitle
      )
  }
)

Then('the user should be in dashboard page', function () {
  return dashboardPage
    .isDashboardPage()
    .assert.containsText(
      dashboardPage.elements.dashboardPageNavBarItem,
      'GoPlan'
    )
})
