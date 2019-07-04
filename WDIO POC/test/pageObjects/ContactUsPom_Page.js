class ContactUsPom_Page{
	

	get firstName() { return $("[name='first_name']"); }
	get lastName() { return $("[name='last_name']"); }
	get emailAddress() { return $("[name='email']"); }
	get comments() { return $("[name='message']"); }
	get submit() { return $("[type='submit']"); }


  submitContactUsForm(firstName, lastName, emailAddress, comments){
  	if(firstName){
  		this.firstName.setValue(firstName)
  	    }
  	if(lastName){
  			this.lastName.setValue(lastName)
  		}
  	if(emailAddress){
  		this.emailAddress.setValue(emailAddress)
  	    }
  	if(comments){
  			this.comments.setValue(comments)
  		}
  	this.submit.click();
  }

  verifySubmit(){
  	
  	var headerText = $('h1');
  	var errorText = $('body');

  	if(headerText.isExisting()){
  		return $('h1').getText() == 'Thank You for your Message!';
  	}   	
  	if(!headerText.isExisting()){
  	//if(browser.getText('body').include('Error: all fields are required')){
  		return false;
  	//}
  	}
  }
}


module.exports = new ContactUsPom_Page();

