const { Given, When, Then } = require("@cucumber/cucumber");
const { client } = require("nightwatch-api");

Given("the user has browsed to the login page", async () => {
  return client.url(client.launchUrl).pause(2000);
});

When(
  "the user tries to login with email {string} and password {string} using the webUI",
  async function (email, password) {
    await client
      .waitForElementVisible("input.loginInputStyle")
      .setValue("input.loginInputStyle", email);
    await client
      .waitForElementVisible("input[type=password]")
      .setValue("input[type=password]", password);
    return client.click("button.button");
  }
);

Then("the invalid message {string} should appear", async function (invalidMsg) {
  await client.waitForElementVisible(".negative.message");
  return client.assert.containsText(".negative.message", invalidMsg);
});
