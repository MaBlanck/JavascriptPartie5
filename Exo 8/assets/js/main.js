let elements = document.querySelectorAll('input[type="text"]');
let form = document.getElementById('myform');
    let clone = elements[0].cloneNode();
    let clone2 = elements[1].cloneNode();
    document.getElementById('cloneButton').addEventListener('click', function(){
        form.appendChild(clone2);
        form.appendChild(clone);
}); 
