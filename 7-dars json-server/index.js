let personform=document.forms.person

console.log(personform)

fetch('http://localhost:3000/persons')
.then(res=>res.json())
.then(data=>console.log(data))
let personData=new FormData(personform)
let person={}
personform.addEventListener('submit',(e)=>{
    e.preventDefault()
    console.log(personData)

    personData.forEach((value,name)=>{console.log(value,name)
        person[name]=value
    })
    console.log(person)
})

