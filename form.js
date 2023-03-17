//form element
const form = document.getElementById("myform");
console.log(firstname);

form.addEventListener("submit", e => {

    e.preventDefault();
    let fname = fnameValidate();
    let lname = lnameValidate();
    let email = emailValidate();
    let pwd = pwdValidate();
    let phone = phoneValidate();



    if(fname && lname && email && pwd && phone){
        alert(`firstname:${fname}\nlastname:${lname}\nemail:${email}\npassword:${pwd}\nphonenumber:${phone}\n`)
    }
})

//input element
var firstname = document.getElementById("firstname");
var lastname = document.getElementById("lastname");
var email = document.getElementById("email");
var password = document.getElementById("password");
var phonenumber = document.getElementById("telephone");

//error element
const fnameerror = document.getElementById("fnameerror");
const lastnameerror = document.getElementById("lnameerror");
const emailerror = document.getElementById("emailerror");
const pwderror = document.getElementById("pwderror");
const phoneerror = document.getElementById("phoneerror");

firstname.addEventListener("keypress", ()=>{

    fnameValidate();
    
})


lastname.addEventListener("keypress", ()=>{

    lnameValidate();
})

email.addEventListener("keypress", ()=>{

    emailValidate();

})

phonenumber.addEventListener("keypress", ()=>{
    phoneValidate();  
})

password.addEventListener("keypress", ()=>{
    pwdValidate();
})



function fnameValidate(){
    if (firstname.value === '') {
        fnameerror.innerHTML = 'FirstName is Required!';
        return false;
    } else if (firstname.value) {
        fnameerror.innerHTML = '';
        return firstname.value;
    }

}

function lnameValidate(){
    if (lastname.value === '') {
        lastnameerror.innerHTML = 'Lastname is Required!';
        return false;
    } else if (lastname.value) {
        lastnameerror.innerHTML = '';
        return lastname.value;
    }

}
function emailValidate(){

    var emailvalid = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email.value === '') {
        emailerror.innerHTML = 'Email is Required!';
        return false;
    } else if (!email.value.match(emailvalid)) {
        emailerror.innerHTML = 'Please enter valid Email';
        return false;
    }else{
        emailerror.innerHTML = '';
        return email.value;
    }

}

function pwdValidate(){
    if (password.value === '') {
        pwderror.innerHTML = 'Please Enter the Password!';
        return false;
    } else if (password.value.length < 6) {
        pwderror.innerHTML = 'Please enter Strong Password!';
        return false;
    }else{
        pwderror.innerHTML = '';
        return password.value;
    }

}

function phoneValidate(){
    var phoneno = /^\d{10}$/;
    if (phonenumber.value === '') {
        phoneerror.innerHTML = 'phonenumber is Required!';
        return false;
    } else if (phonenumber.value.match(phoneno)) { 
       phoneerror.innerHTML = '';
       return phonenumber.value;
    }else{
        phoneerror.innerHTML = 'Please enter Correct Mobile Number!'
        return false;
    }

}


