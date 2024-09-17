import { expect, Page } from '@playwright/test'
import { RegisterSelectors as rs } from '../selectors/register.selector'
import * as dotenv from 'dotenv'
import { waitForSelectorWithMinTime } from '../utils/utils'
dotenv.config({ path: '.env' })

const errors: string[] = []

export default class RegisterSection {
  page: Page

  constructor(page: Page) {
    this.page = page
  }

  public async userRegistration(
    name?: string,
    address?: string,
    password?: string
  ) {
    try {
      if (!name || !address || !password) {
        throw new Error('name, address, and password is undefined')
      }

      const registerLink = await this.page.locator(rs.registerLink).isVisible()

      if (registerLink) {
        await this.page.locator(rs.registerLink).click()
        await waitForSelectorWithMinTime(this.page, rs.enterName)
        await this.page.fill(rs.enterName, name)
        await this.page.fill(rs.enterAddress, address)
        await this.page.fill(rs.password, password)
        await this.page.fill(rs.confirmPassword, password)
        await this.page.locator(rs.registerButton).click()
        await waitForSelectorWithMinTime(this.page, rs.successMsg)

        const successMsg = await this.page.locator(rs.successMsg).isVisible()

        if (successMsg) {
          const txt_success = await this.page
            .locator(rs.successMsg)
            .textContent()
          if (txt_success != 'Registration Successful') {
            errors.push('user registration failed')
          }
        } else {
          const warningMsg = await this.page.locator(rs.warningMsg).isVisible()

          if (warningMsg) {
            const txt_warning = await this.page
              .locator(rs.warningMsg)
              .textContent()

            if (txt_warning != 'Email has already been taken') {
              errors.push('Email has already been taken verification failed')
            }
          }
        }
      } else {
        errors.push('register link is not visible proeprly')
      }
      if (errors.length > 0) {
        throw new Error(`Errors encountered:\n${errors.join('\n')}`)
      }
      expect(errors.length).toBe(0)
    } catch (error) {
      throw error
    }
  }
}
