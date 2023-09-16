function validation() {
    var name = document.getElementById("name").value;
    var subject = document.getElementById("subject").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var error_message = document.getElementById("error_message");
    var text;
    error_message.style.padding = "10px";
if(name.length < 5){
    document.getElementById("name").style.border = "5px solid red";
    text = "Please Enter valid Name";
    error_message.innerHTML = text;
    return false;
} else {
    document.getElementById("name").style.border = "1px solid #7389f4"
}
if(subject.length < 15){
    document.getElementById("subject").style.border = "5px solid red";
    text = "Please Enter More then 15 Characters";
    error_message.innerHTML = text;
    return false;
}
else {
    document.getElementById("subject").style.border = "1px solid #7389f4"
}
if(isNaN(phone) || phone.length != 8){
    document.getElementById("phone").style.border = "5px solid red";
    text = "Please Enter valid Phone Number 8-digits";
    error_message.innerHTML = text;
    return false;
} else {
    document.getElementById("phone").style.border = "1px solid #7389f4"
}
if(email.indexOf("@") == -1 || email.length < 6){
    document.getElementById("email").style.border = "5px solid red";
    text = "Please Enter valid Email";
    error_message.innerHTML = text;
    return false;
} else {
    document.getElementById("email").style.border = "1px solid #7389f4"
}
if(message.length <= 25){
    document.getElementById("message").style.border = "5px solid red";
    text = "Please Enter More Than 25 Characters";
    error_message.innerHTML = text;
    return false;
} else {
    document.getElementById("message").style.border = "1px solid #7389f4"
}
alert("Form Submitted Successfully!");
return true;
}