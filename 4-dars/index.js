let bigbtn=document.querySelector('.bigBtn');
let left=document.querySelector('.left');
let rightElem=document.querySelector('.right')
let notes=[]
let index=0;

if(localStorage.getItem('notes')){
    notes=JSON.parse(localStorage.getItem('notes'))
    show(notes)
}

bigbtn.addEventListener('click',()=>{
    left.classList.toggle('show')
})


function handleColor(color){
show(notes)
rightElem.innerHTML=`
    <div class="item">
        <textarea 
            oninput='writeText(event,"${color}")'
            data-index=${index++}
            style='background-color:${color}'
        ></textarea>
        <button onclick="deleteNote(${index})"><i class="fa-solid fa-x"></i></button>
    </div>
` +rightElem.innerHTML
}

function show(arr){
    rightElem.innerHTML=''
    index=0 
    arr.forEach((item)=>{
        rightElem.innerHTML=`
            <div class="item">
                <textarea 
                    oninput='writeText(event,"${item.color}")'
                    data-index=${index}
                    style='background-color:${item.color};text-align:left'
                >${item.text}</textarea>
                <button onclick="deleteNote(${index})"><i class="fa-solid fa-x"></i></button>
            </div>
      ` +rightElem.innerHTML
      index++
    })
}




function deleteNote(index){
    notes.splice(index,1)
    show(notes)
    localStorage.setItem('notes',JSON.stringify(notes))
}

function writeText(e,color){
   let obj=e.target;
   console.log(obj.value)
   let note={
        text:obj.value,
        color:color
    }
   notes[obj.getAttribute('data-index')]=note
   localStorage.setItem('notes',JSON.stringify(notes))
}