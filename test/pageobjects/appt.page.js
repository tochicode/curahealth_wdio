const { $ } = require('@wdio/globals')
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ApptPage extends Page {
    /**
     * define selectors using getter methods
     */
    get btnSubmit () {
        return $('//a[@id="btn-make-appointment"]');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async  makeAppt() {
        await this.btnSubmit.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('makeAppt');
    }
}

module.exports = new ApptPage();
