
var ContactUsPage = require("../pageObjects/ContactUsPom_Page.js");


beforeEach(() => {
	browser.url('https://webdriveruniversity.com/Contact-Us/contactus.html');
})


describe('Test Contact Us form WebdriverUni', () => {
	
  it('Should be able to submit a successful submission via contact us form', () => {
  	
    ContactUsPage.submitContactUsForm('Joe', 'Blogs', 'joe@cricinfo.com', 'Hello, How are you ?');

    expect(ContactUsPage.verifySubmit()).to.be.true;
  	/*var successfulContactConfirmation = browser.isExisting('#contact_reply h1');
  	expect(successfulContactConfirmation, 'Successful submission Message does not exist').to.be.true;

  	var successfulSubmission = browser.getText('#contact_reply h1');
  	expect(successfulSubmission).to.equal('Thank You for your Message!');*/
    });

  it('Should not be able to submit a successful submission via contact us form as all fields are required', () => {
  
    ContactUsPage.submitContactUsForm('Mike', 'Woods', 'joe@cricinfo.com', null);

    expect(ContactUsPage.verifySubmit()).to.be.false;

  	/*var successfulContactConfirmation = browser.isExisting('#contact_reply h1');
  	expect(successfulContactConfirmation, 'Successful submission Message does not exist').to.be.false;*/
    });

  
  it('Should not be able to submit a successful submission via contact us form as all fields are required', () => {
  	
    ContactUsPage.submitContactUsForm('Sarah', null, 'sarah@cricinfo.com', null);

    expect(ContactUsPage.verifySubmit()).to.be.false;

   	//var successfulContactConfirmation = browser.isExisting('#contact_reply h1');
  	//expect(successfulContactConfirmation, 'Successful submission Message does not exist').to.be.false;
    });

  it('Should not be able to submit a successful submission via contact us form as all fields are required', () => {
  	
    ContactUsPage.submitContactUsForm('Jim', 'Jomes', null, null);

    expect(ContactUsPage.verifySubmit()).to.be.false;
   
  	/*var errorText = browser.getText('body');
  	expect(errorText).to.include('Error: all fields are required');

  	var errorText = browser.isVisible('body');
  	expect(errorText, 'Error message is not visible').to.be.true;*/
    });
});