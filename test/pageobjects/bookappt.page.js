const { $ } = require('@wdio/globals')
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class BookApptPage extends Page {
    /**
     * define selectors using getter methods
     */
    get facility () {
        return $('#combo_facility');
    }

    get setfacility () {
        return $('option[value="Hongkong CURA Healthcare Center"]');
    }

    get hospitalRead () {
        return $('#chk_hospotal_readmission');
    }

    get healthProgram () {
        return $('#radio_program_medicaid');
    }

    get visitDate () {
        return $('#txt_visit_date');
    }

    get comment () {
        return $('#txt_comment');
    }

    get bookAppt () {
        return $('#btn-book-appointment');
    }

    get confirmAppt () {
        return $('h2');
    }

    get confirmBody () {
        return $('p[class="lead"]');
    }

    get sidebar () {
        return $('.fa.fa-bars');
    }

    get logoutbtn () {
        return $('a[href="authenticate.php?logout"]');
    }


    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async book (visitDate, comment) {
        await this.facility.click();
        await this.setfacility.click();
        await this.hospitalRead.click();
        await this.healthProgram.click();
        await this.visitDate.setValue(visitDate);
        await this.comment.setValue(comment);
        await this.bookAppt.click();
    }

    async confirm () {
        await this.confirmAppt.isEqual("Appointment Confirmation");
        await this.confirmBody.isEqual("Please be informed that your appointment has been booked as following:");
    }

    async logout () {
        await this.sidebar.click();
        (await this.logoutbtn).click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    // open () {
    //     return super.open('book');
    // }
}

module.exports = new BookApptPage();
