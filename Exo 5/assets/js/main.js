/* let textChange = document.getElementById('textChange');


document.getElementById('pink').onclick = function(){
    textChange.style.color = 'pink';
}
document.getElementById('blue').onclick = function(){
    textChange.style.color = 'blue';
}
document.getElementById('purple').onclick = function(){
    textChange.style.color = 'purple';
}
document.getElementById('bold').onclick = function(){
    textChange.style.fontWeight = 'bold';
}       
document.getElementById('italics').onclick = function(){
    textChange.style.fontStyle = 'italic';
}
 */
let btn = document.getElementById('pink');
btn.onclick = function(){
    let pink = document.querySelector('p');
    pink.classList.toggle('pink');
}
let btnBlue = document.getElementById('blue');
btnBlue.onclick = function(){
    let blue = document.querySelector('p');
    blue.classList.toggle('blue');
}
let btnPurple = document.getElementById('purple');
btnPurple.onclick = function(){
    let purple = document.querySelector('p');
    purple.classList.toggle('purple');
}
let btnBold = document.getElementById('bold');
btnBold.onclick = function(){
    let bold = document.querySelector('p');
    bold.classList.toggle('bold');
}
let btnItalic = document.getElementById('italics');
btnItalic.onclick = function(){
    let italic = document.querySelector('p');
    italic.classList.toggle('italics');
}




