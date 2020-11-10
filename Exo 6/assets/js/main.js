let textFocus = document.querySelector('input[type="text"]');
let passWord = document.querySelector('input[type="password"]');

textFocus.addEventListener('focusin', function(){
textFocus.style.border = '5px solid black';
});
textFocus.addEventListener('focusout', function(){
textFocus.style.border = '1px solid black';
});

passWord.addEventListener('focusin', function(){
passWord.style.border = '5px solid black';
});
passWord.addEventListener('focusout', function(){
passWord.style.border = '1px solid black';
});