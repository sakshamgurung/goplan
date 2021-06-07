const { Given, When, Then } = require('@cucumber/cucumber')
const { client } = require('nightwatch-api')
const assert = require('assert')

const dashboardPage = client.page.dashboardPage()
const newEventSidebarPage = client.page.newEventSidebarPage()

Given('the user has opened new event sidebar', async function () {
  return dashboardPage.openNewEventSidebar()
})

When(
  'the user creates an event with following information using webUI',
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
  'the event should be listed under date {string} in webUI',
  function (date) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending'
  }
)
