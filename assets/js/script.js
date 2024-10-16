const colorButton=document.getElementById('colorButton');

colorButton.addEventListener('click',()=>{

    colorButton.style.backgroundColor=colorButton.style.background==='blue' ?'blue':'red';

});