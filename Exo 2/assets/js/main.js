/*Correction
*/

function checkPassword(){
    let password = document.getElementById('password');
    let passwordConfirm = document.getElementById('passwordConfirm');
    if (password.value == passwordConfirm.value) {
        password.classList.remove('error');
        passwordConfirm.classList.remove('error');
        password.classList.add('success');
        passwordConfirm.classList.add('success');
    }else {
        password.classList.remove('success');
        passwordConfirm.classList.remove('success');
        password.classList.add('error');
        passwordConfirm.classList.add('error');
    }   
}
document.querySelector('#button').addEventListener('click', checkPassword, false);