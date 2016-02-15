							/********** Footer **************/
var fontS = 16;
$(document).ready(function(){
	// if the sizeCookie exists then change the font size to that number and display the size of the font in the placeholder
	if(Cookie.exists("sizeCookie")){
		document.getElementsByTagName("body")[0].style.fontSize = Cookie.get("sizeCookie")+"px";
		document.getElementById("fontSize").placeholder = "Current font size is " + Cookie.get("sizeCookie");
		
	} else {// if the cookie doesn't exist then change font to 16 and display the size of the font in the placeholder
		document.getElementById("fontSize").placeholder = "Current font size is " + fontS;
		document.getElementsByTagName("body")[0].style.fontSize = fontS+"px";
	}
});	

// Function that saves the cookie and changes the font size
function submitFontSize(){
	var fontS = document.getElementById("fontSize").value;
	document.getElementsByTagName("body")[0].style.fontSize = fontS+"px";
	Cookie.set("sizeCookie", fontS);
}
						
						/******** Slideshow page *************/
					
$(document).ready(function(){

	// Functions that fade the images in and out based on the mouse hover	
	$("#slideshowImages").mouseover(function(){
		$("#slideshowImages").fadeTo("slow",0.7);
	});
	
	$("#slideshowImages").mouseout(function(){
		$("#slideshowImages").fadeTo("slow",1);
	});	
});
// Function that changes the image to the next image in the slide show
// Changes the image based on myCounter and then changes the alt attribute to describe the picture
// and then sets caption element to the alt attribute
var myCounter = 0;
function changeToNextImage(){

	 if (myCounter == 0){
		document.getElementById("slideshowImages").src = "images/UNCC_Crown_Logo_1c.gif";
		document.getElementById("slideshowImages").alt = "The UNCC Crown Logo";
		document.getElementById("caption").innerHTML = document.getElementById("slideshowImages").alt;
		myCounter++;
	 } else if (myCounter == 1){
		document.getElementById("slideshowImages").src = "images/UNCC_Student_Organizations.jpg";
		document.getElementById("slideshowImages").alt = "The UNCC Student Organizations Logo";
		document.getElementById("caption").innerHTML = document.getElementById("slideshowImages").alt;
		myCounter++;
	 } else if (myCounter == 2){
		document.getElementById("slideshowImages").src = "images/uncc_cci.png";
		document.getElementById("slideshowImages").alt = "The UNCC CCI Logo";
		document.getElementById("caption").innerHTML = document.getElementById("slideshowImages").alt;
		myCounter++;
	 } else if (myCounter == 3){
		document.getElementById("slideshowImages").src = "images/charlotte49ers_T.png";
		document.getElementById("slideshowImages").alt = "The UNCC 49ers Logo";
		document.getElementById("caption").innerHTML = document.getElementById("slideshowImages").alt;
		myCounter++;
	 } else if (myCounter == 4){
		document.getElementById("slideshowImages").src = "images/starslogo.png";
		document.getElementById("slideshowImages").alt = "The STARS Computing Corps Logo";
		document.getElementById("caption").innerHTML = document.getElementById("slideshowImages").alt;
		myCounter = 0;
	 }
 }

// Function that changes the image to the previous image in the slide show
// Changes the image based on myCounter and then changes the alt attribute to describe the picture
// and then sets caption element to the alt attribute
function changeToPrevImage() {
	 if (myCounter == 0){
		document.getElementById("slideshowImages").src = "images/UNCC_Crown_Logo_1c.gif";
		document.getElementById("slideshowImages").alt = "The UNCC Crown Logo";
		document.getElementById("caption").innerHTML = document.getElementById("slideshowImages").alt;
		myCounter = 4;
	 } else if (myCounter == 1){
		document.getElementById("slideshowImages").src = "images/UNCC_Student_Organizations.jpg";
		document.getElementById("slideshowImages").alt = "The UNCC Student Organizations Logo";
		document.getElementById("caption").innerHTML = document.getElementById("slideshowImages").alt;
		myCounter--;
	 } else if (myCounter == 2){
		document.getElementById("slideshowImages").src = "images/uncc_cci.png";
		document.getElementById("slideshowImages").alt = "The UNCC CCI Logo";
		document.getElementById("caption").innerHTML = document.getElementById("slideshowImages").alt;
		myCounter--;
	 } else if (myCounter == 3){
		document.getElementById("slideshowImages").src = "images/charlotte49ers_T.png";
		document.getElementById("slideshowImages").alt = "The UNCC 49ers Logo";
		document.getElementById("caption").innerHTML = document.getElementById("slideshowImages").alt;
		myCounter--;
	 } else if (myCounter == 4){
		document.getElementById("slideshowImages").src = "images/starslogo.png";
		document.getElementById("slideshowImages").alt = "The STARS Computing Corps Logo";
		document.getElementById("caption").innerHTML = document.getElementById("slideshowImages").alt;
		myCounter--;
	 }
 }
 

				/******** Contact form page *************/
// Function that puts focus on the name text box when the page is loaded
 window.onload = function(){
	document.getElementById("nameText").focus();
 }



	var confirmSubjectForm = false;
	var confirmMessageForm = false;
	
 // Function that is called when send message button is click
	function process(){
		// Puts the form input values into variables
     	 var name = document.getElementById("nameText").value;
		 var email = document.getElementById("email").value;
		 var subject = document.getElementById("subject").value;
		 var message = document.getElementById("message").value;
		 var other = document.getElementById("other").checked;
		 var feedback = document.getElementById("feedback").checked;
		 var join = document.getElementById("join").checked;
		 var somethingIsSelected = false;
		 
		 // checks if any of the radio buttons are selected
		 if (other || feedback || join){
			somethingIsSelected = true;
		 }
		 
		
		 
		 // checks the length of the field to see if it is empty and if there is no length 
		 // then display that it is required in the placeholder and color the border red 
		 // else return the placeholder and border to normal
		 if (name.length == 0){
			document.getElementById("nameText").placeholder = "Name required";
			document.getElementById("nameText").style.border = "2px solid red";
			confirmNameForm = false;
		} else {
			confirmNameForm = true;
			document.getElementById("nameText").placeholder = "";
			document.getElementById("nameText").style.border = "0px solid red";
		}
		
		if (email.length == 0){
			document.getElementById("email").placeholder = "Email required";
			document.getElementById("email").style.border = "2px solid red";
			confirmEmailForm = false;
		} else {
			confirmEmailForm = true;
			document.getElementById("email").placeholder = "";
			document.getElementById("email").style.border = "0px solid red";
		}
		
		// checks if a category is not selected and prompts the user
		// else remove the prompt
		if (!somethingIsSelected){
			document.getElementById("categoryError").innerHTML ="Category required";
		}else{
			document.getElementById("categoryError").innerHTML ="";
		}
		
		// if the other or feedback categories are selected then call the subjectChecked function
		if (other || feedback){
			subjectChecked(subject, message);
		} 
		
		// if all form elements are valid and the other and feedback categories are not selected
		if (confirmNameForm && confirmEmailForm && other==false && feedback==false && somethingIsSelected){
			messageConfirm(name);
		}
		
		// if all form elements are valid and the other or feedback categories are selected
		if ((other==true || feedback==true) && (confirmSubjectForm && confirmMessageForm && confirmNameForm && confirmEmailForm)){
			messageConfirm(name);
		}
	}
 
 // Function that checks, while category other or feedback is selected, to see if the subject and message fields are empty
   function subjectChecked(subject, message) {
   // if there is nothing in the subject text field then prompt the user else remove the prompt
	if (subject.length == 0){
		document.getElementById("subject").placeholder = "Subject required";
		document.getElementById("subject").style.border = "2px solid red";
		confirmSubjectForm = false;
		} else {
			confirmSubjectForm = true;
			document.getElementById("subject").placeholder = "";
			document.getElementById("subject").style.border = "0px solid red";
		}
		
	// if there is nothing in the message text field then prompt the user else remove the prompt	
	if (message.length == 0){
		document.getElementById("message").placeholder = "Message required";
		document.getElementById("message").style.border = "2px solid red";
		confirmMessageForm = false;
		}else{
			confirmMessageForm = true;
			document.getElementById("message").placeholder = "";
			document.getElementById("message").style.border = "0px solid red";
		}
	}
 
 
 // Function that writes a confirm message has been sent,  when the send message button is clicked and all form items are valid
	function messageConfirm(name) {
	document.getElementById("contact").innerHTML = "<h3> Message has been sent " + name + " Thank you </h3>";  
 }

 