let menuitems=document.querySelectorAll('.side-menu li')
let tabledoctor=document.querySelectorAll('.tabledoctor tbody')
console.log(tabledoctor)

let showModal=document.querySelector('.modalExprience')

function addExprience(){
    showModal.classList.add('show')
}

function cancel(){
    showModal.classList.remove('show')
}
function save(){
    showModal.classList.remove('show')
}
function addPatient(){
    
}