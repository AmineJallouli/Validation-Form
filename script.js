let pass = document.getElementById("pass");
let mail = document.getElementById('mail');
let adress= document.getElementById("adr")
let name = document.getElementById('name')


function Empty(pass, adress, mail,name) {
    if (name.value === '') {
        alert("name is missing ")
        pass.focus()
    } else if (adress.value === '') {
        alert("adresse is missing ")
        adress.focus()
    } else if (mail.value === '') {
        alert("mail is missing ")
        mail.focus()
    } else if (pass.value === '') {
        alert("password is missing ")
        pass.focus()
    } 
    return false
}


function pwd(pass) {
    const  str = pass.value

    if ((!str.includes(["A"-"Z"]) && !str.includes([1-9]))) {
        alert("The password must contain at least a number and one capital letter");
    }

    if (str.length > 8) {
        alert("The password must have only 8 characters");
    }
}

function email(mail) {
    let str = mail.value

        if (!str.includes(".") || !str.includes("@")) {
            alert("Wrong E-mail Adress")
        }
}

function validation(){
    Empty(pass, adress, mail,name)
    pwd(pass);
    email(mail);
}
