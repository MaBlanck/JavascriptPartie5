let name = document.getElementById('nameUser');// = 
let errorName = document.getElementById('errorName');// = <span>
let nameRegex = RegExp('[A-Za-z\-]{2,30}');
name.addEventListener('keyup', function() {
    if (!nameRegex.test(name.value)){
    errorName.classList.add('active')// = opacity=1 css
} else {
    errorName.classList.remove('active')
}
});
    let mail = document.getElementById('mailUser');
    let errorMail = document.getElementById('errorMail');
    let mailRegex = RegExp('^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$');
    mail.addEventListener('keyup', function() {
    if (!mailRegex.test(mail.value)){
        errorMail.classList.add('active');
    } else {
        errorMail.classList.remove('active');
}
});
    let age = document.getElementById('ageUser');
    let errorAge = document.getElementById('errorAge');
    let ageRegex = RegExp('[0-9]');
    age.addEventListener('keyup', function() {
    if(!ageRegex.test(age.value)){
        errorAge.classList.add('active')
    }else{
        errorAge.classList.remove('active')
    }
});


