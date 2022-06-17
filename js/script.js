
	var nameError = document.getElementById('name-err');
	var phoneError = document.getElementById('phone-err');
	var emailError = document.getElementById('email-err');
	var messageError = document.getElementById('message-err');

    function validateName(){
       var name = document.getElementById('contact-name').value;
       if( name.length == 0){
       	nameError.innerHTML = 'Name is required';
       	return true;
       } 
       if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
       	nameError.innerHTML = 'Enter Full Name';
       	return false;
       }
       nameError.innerHTML ='Valid';
       return true;
    }

    function validateEmail() {
       var name = document.getElementById('contact-email').value;
       if( name.length == 0){
       	emailError.innerHTML = 'Email is required';
       	return false;
       } 
       if(!name.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
       	emailError.innerHTML = 'Enter Valid  Email';
       	return false;
       }
    }

