
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
       nameError.innerHTML ='<i id="tickColor" class="fa-solid fa-circle-check"></i>';
       return true;
    }

    function validateMobile(){
    var phone = document.getElementById('phone-num').value;
    if( phone.length == 0 ){
    	phoneError.innerHTML= "Phone is required";
    	return false;
    }	
    if (!phone.match(/^[0-9]{10}$/)) {
    	phoneError.innerHTML = 'Enter valid number';
    	return false;
    }
    	phoneError.innerHTML ='<i id="tickColor" class="fa-solid fa-circle-check"></i>';
    	return true;
    }

    function validateEmail() {
       var name = document.getElementById('email-id').value;
       if( name.length == 0){
       	emailError.innerHTML = 'Email is required';
       	return false;
       } 
       if(!name.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
       	emailError.innerHTML = 'Enter Valid  Email';
       	return false;
       }
       emailError.innerHTML ='<i id="tickColor" class="fa-solid fa-circle-check"></i>';
       return true;
    }

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
       nameError.innerHTML ='<i id="tickColor" class="fa-solid fa-circle-check"></i>';
       return true;
    }

    function validateMessage(){
    	var message = document.getElementById('message').value;
    	if (message.length == 0) {
    		messageError.innerHTML = "Message is required";
    		return false;	
    	}
    	if (!message.match(/^[A-Za-z0-9.]{10,100}$/)) {
    		messageError.innerHTML = "Enter Valid Message";
    		return false;	
    	}
    	messageError.innerHTML='<i id="tickColor" class="fa-solid fa-circle-check"></i>';
    	return true;
    }