let img = document.getElementById('myImage');
img.addEventListener('click', function() {
img.src = 'https://thumbs.dreamstime.com/b/poulet-r-ti-d-isolement-47596263.jpg';
})
img.addEventListener('mouseover', function(){
    img.style.height = '700px';
})
img.addEventListener('mouseout', function(){
    img.style.height = 'initial';
})
