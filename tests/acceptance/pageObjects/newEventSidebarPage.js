module.exports = {
  url: function () {
    return this.api.launchUrl + '/#/dashboard'
  },
  commands: {
    isNewEventSidebarPage: function () {
      return this.waitForElementVisible('@newEventSideBar')
    },
    setEventName: function (eventName) {
      return this.waitForElementVisible('@eventNameInput')
        .clearValue('@eventNameInput')
        .setValue('@eventNameInput', eventName)
    },
    setDescription: function (description) {
      return this.waitForElementVisible('@eventDescriptionInput')
        .clearValue('@eventDescriptionInput')
        .setValue('@eventDescriptionInput', description)
    },
    setLocation: function (location) {
      return this.waitForElementVisible('@locationInput')
        .clearValue('@locationInput')
        .setValue('@locationInput', location)
    },
    setDate: function (date) {
      return this.waitForElementVisible('@datePicker')
        .clearValue('@datePicker')
        .setValue('@datePicker', date)
    },
    setStartTime: function (startTime) {
      return this.waitForElementVisible('@startTimePicker')
        .clearValue('@startTimePicker')
        .setValue('@startTimePicker', startTime)
    },
    setEndTime: function (endTime) {
      return this.waitForElementVisible('@endTimePicker')
        .clearValue('@endTimePicker')
        .setValue('@endTimePicker', endTime)
    },
    setRecurrence: async function (recurrenceType) {
      const ele = this.getRecurrenceOptionSelector(recurrenceType)
      return this.waitForElementVisible('@recurrencePicker')
        .click('@recurrencePicker')
        .useXpath()
        .waitForElementVisible(ele)
        .click(ele)
        .useCss()
    },
    getRecurrenceOptionSelector: function (option) {
      return `${this.elements.recurrenceOptions.selector}[text()="${option}"]`
    },
    createNewEvent: async function (
      eventName,
      description,
      location,
      date,
      startTime,
      endTime,
      recurrenceType
    ) {
      await this.setEventName(eventName)
      await this.setDescription(description)
      await this.setLocation(location)
      await this.setDate(date)
      await this.setStartTime(startTime)
      await this.setEndTime(endTime)
      await this.setRecurrence(recurrenceType)
      return this.waitForElementVisible('@addEventButton')
        .click('@addEventButton')
        .useCss()
    },
  },
  elements: {
    newEventSideBar: 'form.form',
    eventNameInput: 'textarea[name=name]',
    eventDescriptionInput: 'textarea[name=description]',
    locationInput: 'textarea[name=location]',
    datePicker: 'input[name=date]',
    startTimePicker: 'input[name=startTime]',
    endTimePicker: 'input[name=endTime]',
    recurrencePicker: 'div[name=recurrenceType]',
    recurrenceOptions: {
      selector: '//div[@name="recurrenceType"]//span',
      locateStrategy: 'xpath',
    },
    addEventButton: {
      selector: '//button[text()="Add Event"]',
      locateStrategy: 'xpath',
    },
  },
}
