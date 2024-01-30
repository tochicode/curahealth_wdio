const { expect } = require('@wdio/globals')
const ApptPage = require('../pageobjects/appt.page')
const LoginPage = require('../pageobjects/login.page')
const BookApptPage = require('../pageobjects/bookappt.page')

describe('Make Appointment application', () => {
    it('should login with valid credentials', async () => {
        await ApptPage.open()
        await ApptPage.makeAppt()

        await LoginPage.login('John Doe', 'ThisIsNotAPassword')

        await BookApptPage.book('29/01/2024','Please I would like Doctor Xian Baijing')
        
        await BookApptPage.confirm()

        await BookApptPage.logout()
        
    })
})

