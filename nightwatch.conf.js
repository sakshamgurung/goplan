module.exports = {
  page_objects_paths: 'tests/acceptance/pageObjects/',
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
