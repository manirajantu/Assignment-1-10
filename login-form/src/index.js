/*
    When button is clicked, login() function will be called and raise an alert that display username and password entered.
    - If username is not an email, raise an alert that display "Username must be a valid email".
    - If password length is less than 8, raise an alert that display "Password must be at least 8 characters".
    - If both username and password has error, raise only one alert that display both error messages.

    Upon page load, the username input field should set focus. That means user can 
    immediately type something and the value reflect in the "username" input field.
    Ref: https://stackoverflow.com/questions/4331022/focus-input-box-on-load 

    When <button> is placed within <form>, button click will cause <form> to perform a submission.
    You would realize that the page is being reloaded (in some cases it would return 404). You need to prevent the 
    default behaviour of a form submission in order to let your function execute. See this link
    for more information - https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
    Example: https://www.w3schools.com/jsref/event_preventdefault.asp
*/

function validate() {

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    var x=document.getElementById("username").value;  
        var atposition=x.indexOf("@");  
        var dotposition=x.lastIndexOf(".");  

    if (username == null || username == "") {
        alert("Enter valid email.");
        return false;
        }
        if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
        alert('Please enter a valid e-mail address with "@" and "."');  
        return false;  
        } 

    if(password.length < 8) {  
        alert("Password must be at least 8 characters.");
    return false;
    } 
    else  {

        alert('Login successful');
    }
} 

