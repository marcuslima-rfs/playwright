// @ts-check
const { test, expect, selectors } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
  await page.goto('https://automationpratice.com.br/')
})

test('Login com sucesso! @login', async ({ page }) => {
 // await page.goto('https://automationpratice.com.br/')

  // const button = await page.getByRole('button', { name: 'Send Mail' })
  const texto = await page.waitForSelector('text=NEWSLETTER')
  //await button.scrollIntoViewIfNeeded()
  await texto.scrollIntoViewIfNeeded()
  //await button.click()

  await page.getByRole('link', { name: ' Login' }).click()
  await page.locator('#user').click()
  await page.locator('#user').fill('teste@gmail.com')
  await page.screenshot({ path: 'screenshot/screenshot1.png'})
  await page.locator('#password').click()
  await page.locator('#password').fill('123456')
  await page.locator('#password').screenshot({ path: 'screenshot/elementosenha.png' })
  await page.screenshot({ path: 'screenshot/screenshot2.png'})
  await page.getByRole('button', { name: 'login' }).click()
});

test('Login com sucesso 1! @login', async ({ page }) => {
 // await page.goto('https://automationpratice.com.br/')

  // const button = await page.getByRole('button', { name: 'Send Mail' })
  const texto = await page.waitForSelector('text=NEWSLETTER')
  //await button.scrollIntoViewIfNeeded()
  await texto.scrollIntoViewIfNeeded()
  //await button.click()

  await page.getByRole('link', { name: ' Login' }).click()
  await page.locator('#user').click()
  await page.locator('#user').fill('teste@gmail.com')
  await page.screenshot({ path: 'screenshot/screenshot1.png'})
  await page.locator('#password').click()
  await page.locator('#password').fill('123456')
  await page.locator('#password').screenshot({ path: 'screenshot/elementosenha.png' })
  await page.screenshot({ path: 'screenshot/screenshot2.png'})
  await page.getByRole('button', { name: 'login' }).click()
});

test('Login com sucesso 2! @login', async ({ page }) => {
 // await page.goto('https://automationpratice.com.br/')

  // const button = await page.getByRole('button', { name: 'Send Mail' })
  const texto = await page.waitForSelector('text=NEWSLETTER')
  //await button.scrollIntoViewIfNeeded()
  await texto.scrollIntoViewIfNeeded()
  //await button.click()

  await page.getByRole('link', { name: ' Login' }).click()
  await page.locator('#user').click()
  await page.locator('#user').fill('teste@gmail.com')
  await page.screenshot({ path: 'screenshot/screenshot1.png'})
  await page.locator('#password').click()
  await page.locator('#password').fill('123456')
  await page.locator('#password').screenshot({ path: 'screenshot/elementosenha.png' })
  await page.screenshot({ path: 'screenshot/screenshot2.png'})
  await page.getByRole('button', { name: 'login' }).click()
});

test('Login com sucesso 3! @login', async ({ page }) => {
//  await page.goto('https://automationpratice.com.br/')

  // const button = await page.getByRole('button', { name: 'Send Mail' })
  const texto = await page.waitForSelector('text=NEWSLETTER')
  //await button.scrollIntoViewIfNeeded()
  await texto.scrollIntoViewIfNeeded()
  //await button.click()

  await page.getByRole('link', { name: ' Login' }).click()
  await page.locator('#user').click()
  await page.locator('#user').fill('teste@gmail.com')
  await page.screenshot({ path: 'screenshot/screenshot1.png'})
  await page.locator('#password').click()
  await page.locator('#password').fill('123456')
  await page.locator('#password').screenshot({ path: 'screenshot/elementosenha.png' })
  await page.screenshot({ path: 'screenshot/screenshot2.png'})
  await page.getByRole('button', { name: 'login' }).click()
});

test.afterEach(async({ page}) => {

})