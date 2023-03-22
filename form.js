//form element
const form = document.getElementById("myform");
const formsubmit = document.getElementById("mytable");

// console.log(firstname);

form.addEventListener("submit", e => {

    e.preventDefault();
    let fname = fnameValidate();
    let lname = lnameValidate();
    let email = emailValidate();
    let pwd = pwdValidate();
    let phone = phoneValidate();

    form.classList.add('show')

    var arrayitem = JSON.parse(localStorage.getItem("arrayitem") || "[]");

    let obj = {
        firstName: fname,
        lastName: lname,
        Email: email,
        Password: pwd,
        Phone: phone
    }

    arrayitem.push(obj);

    if (Object.keys(obj).every((x) => obj[x] !== undefined)) {
        localStorage.setItem("arrayitem", JSON.stringify(arrayitem));
    }

    let txt = "";

    arrayitem.map(element => {

        if(Object.keys(element).every((x) => element[x] !== undefined)){
            txt += `<tr>
            <td>${element.firstName}</td>
            <td>${element.lastName}</td>
            <td>${element.Email}</td>
            <td>${element.Password}</td>
            <td>${element.Phone}</td>   
            <td><button onclick="deleteItem('${element.Email}')" class="btn btn-success" >Delete</button></td>
            </tr>`
        }    
    });

    formsubmit.innerHTML = txt;

    document.getElementById("hidTable").style.display = "block";

    // if(fname && lname && email && pwd && phone){
    //     formsubmit.innerHTML = 'success';
    //     // alert(`firstname:${fname}\nlastname:${lname}\nemail:${email}\npassword:${pwd}\nphonenumber:${phone}\n`)
    // }
})

function deleteItem(item) {

    for (var i = 0; i < formsubmit.rows.length; i++) {
        if (formsubmit.rows[i].cells[2].innerText === item) {
            formsubmit.deleteRow(i);
        }
    }
    var allitem = JSON.parse(localStorage.getItem("arrayitem"));
    const newitem = allitem.filter(x => x.Email !== item);

    localStorage.setItem("arrayitem", JSON.stringify(newitem));

};

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

firstname.addEventListener("keypress", () => {

    fnameValidate();

})


lastname.addEventListener("keypress", () => {

    lnameValidate();
})

email.addEventListener("keypress", () => {

    emailValidate();

})

phonenumber.addEventListener("keypress", () => {
    phoneValidate();
})

password.addEventListener("keypress", () => {
    pwdValidate();
})



function fnameValidate() {
    if (firstname.value === '') {
        fnameerror.innerHTML = 'FirstName is Required!';
    } else if (firstname.value) {
        fnameerror.innerHTML = '';
        return firstname.value;
    }

}

function lnameValidate() {
    if (lastname.value === '') {
        lastnameerror.innerHTML = 'Lastname is Required!';
    } else if (lastname.value) {
        lastnameerror.innerHTML = '';
        return lastname.value;
    }

}
function emailValidate() {

    var emailvalid = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email.value === '') {
        emailerror.innerHTML = 'Email is Required!';
    } else if (!email.value.match(emailvalid)) {
        emailerror.innerHTML = 'Please enter valid Email';
        return false;
    } else {
        emailerror.innerHTML = '';
        return email.value;
    }

}

function pwdValidate() {
    if (password.value === '') {
        pwderror.innerHTML = 'Please Enter the Password!';
    } else if (password.value.length < 6) {
        pwderror.innerHTML = 'Please enter Strong Password!';
        return false;
    } else {
        pwderror.innerHTML = '';
        return password.value;
    }

}

function phoneValidate() {
    var phoneno = /^\d{10}$/;
    if (phonenumber.value === '') {
        phoneerror.innerHTML = 'phonenumber is Required!';
    } else if (phonenumber.value.match(phoneno)) {
        phoneerror.innerHTML = '';
        return phonenumber.value;
    } else {
        phoneerror.innerHTML = 'Please enter Correct Mobile Number!'
        return false;
    }

}


