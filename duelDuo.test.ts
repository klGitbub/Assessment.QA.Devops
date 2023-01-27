
import { Builder, Capabilities, By } from "selenium-webdriver"
import { mapFinderOptions } from "sequelize/types/utils"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

const { renderChoices } = require('./public/main.js')
const { renderPlayerDuo } = require('./public/main.js')

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('Bots should show when the draw button is clicked', async () => {
    await renderChoices(driver);
})
test('Player duo should display', async () => {
    await renderPlayerDuo(driver);
})