module.exports = {
  page_objects_path: 'tests/acceptance/pageObjects/',
  globals_path: 'tests/globals/loggedUser.js',
  test_settings: {
    default: {
      launch_url: 'http://localhost:3000',
      webdriver: {
        start_process: true,
      },
    },
    chrome: {
      desiredCapabilities: {
        browserName: 'chrome',
      },
      webdriver: {
        port: 4445,
        server_path: require('chromedriver').path,
      },
    },
  },
}
