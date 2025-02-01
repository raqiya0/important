// ul hidden then bar open and close 
let ul=document.getElementById('list');
let barIcon=document.getElementById('icon-bar');
barIcon.onclick=()=>{
    ul.classList.toggle('hidden')
   
}
ul.onclick=()=>{
    ul.classList.toggle('hidden')
}
// let AllBoxskill=document.querySelector('.AllBox-skill')
// let span=document.querySelectorAll('.progress span')
// let span2=document.querySelectorAll('.progress .span2')



// window.onscroll=function (){
//     if(window.scrollY >= AllBoxskill.offsetTop - 500){
//         span.forEach((span)=>{
//             span.style.width=span.dataset.width
//         })

//     }
//     else{
//         span.forEach((span)=>{
//             span.style.width=0
//         })
//     }
// }

