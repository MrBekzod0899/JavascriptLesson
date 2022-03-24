let books=[]
let bookName=document.getElementById('name')
let author=document.getElementById('author')
let pages=document.getElementById('pages')
let produce=document.getElementById('produce')
let rasm=document.getElementById('rasm')
let description=document.getElementById('description')
let dukon=document.getElementsByName('dukon')
let dukonArr=[]
let table=document.getElementById('table')
let viewbox=document.querySelector('.viewbox')
let viewlist=document.getElementById('modalviewlist')
let viewpicture=document.getElementById('viewpicture')
let modal= document.querySelector('.modal')
let btn=document.querySelector('.btnNewBook')

if(localStorage.getItem('books')){
    books=JSON.parse(localStorage.getItem('books'))
    show(books)
}

function add(){
    count.innerText=books.length
    dukon.forEach(item=>{
        if(item.checked){
            dukonArr.push(item.value)
            item.checked=false
        }
    })
    books.push({
        name:bookName.value,
        author:author.value,
        pages:pages.value,
        produce:produce.value,
        rasm:rasm.value,
        description:description.value,
        dukon:dukonArr
    })   
    console.log(books)
    clear()
    save()
    modal.classList.toggle('show')
}

function save(){
    localStorage.setItem('books',JSON.stringify(books))
    show(books)
}
function show(arr){
    console.log(arr)
   table.innerHTML=`<tr>
            <th>№</th>
            <th>Name</th>
            <th>Author</th>
            <th>pages</th>
            <th>produce</th>
            <th>description</th>
            <th>qayso do'konda bor</th>
            <th>rasm</th>
            <th></th>
      </tr>`

    for(index in arr){
        console.log(arr[index].name)
        table.innerHTML+=`
        <tr>
            <td>${parseInt(index)+1}</td>
            <td>${arr[index].name}</td>
            <td>${arr[index].author}</td>
            <td>${arr[index].pages}</td>
            <td>${arr[index].produce}</td>
            <td>${arr[index].description.substr(0,50)}...</td>
            <td>${arr[index].dukon.toString()}</td>
            <td><img src='${arr[index].rasm}'/></td>
            <td><i class="fa-solid fa-eye icon${index}" onclick="view(${index})"></i><i class="fa-solid fa-pencil" onclick="edit(${index})"></i></i><i class="fa-solid fa-trash-can" onclick="del(${index})" ></td>
        </tr>`
    }
    console.log(table)
}
function clear(){
    bookName.value=''
    author.value=''
    pages.value=''
    produce.value=''
    dukon.value=''
    description.value=''
    rasm.value=''
}

function del(index){
   console.log('asfadsgfadgf')
   console.log(index)
   books.splice(index,1)
   save();
   show(books)
}
function edit(item){
    console.log(item)
    console.log(viewlist)
}

function view(index){
    let isImage=false
    let image=books[index].rasm
    console.log(image)
    listimagetype=['.bmp','.jpg', '.jpeg', '.jfif','.png','.webp'];

    listimagetype.forEach(item=>{
        if(image.includes(item)){
            console.log(item)
            isImage=true
            return false
        }
    })
    viewlist.innerHTML=''
    viewbox.classList.toggle('hide')
    
    
    let picture= isImage ? image : 'https://us.123rf.com/450wm/pavelstasevich/pavelstasevich1811/pavelstasevich181101027/112815900-no-image-available-icon-flat-vector.jpg'
    viewpicture.setAttribute('src',picture)
            viewlist.innerHTML+=`
            <li>Name</li>
            <li>${books[index].name}</li>
            <li>Author</li>
            <li>${books[index].author}</li>
            <li>pages</li>
            <li>${books[index].pages}</li>
            <li>Produced by</li>
            <li>${books[index].produce}</li>
            <li>Mavud do'konlar</li>
            <li>${books[index].dukon}</li>
            <li>description</li>
            <p>${books[index].description}</p>
   `   
   let viewicon=document.querySelector(`.icon${index}`)
   document.addEventListener('click',function(event){
    if(viewicon.contains(event.target)){
        viewbox.classList.remove('hide')
    }
   })
}

    viewbox.classList.add('hide')
    document.addEventListener('click',function(event){
         if(!viewbox.contains(event.target)){
            viewbox.classList.add('hide')
        }
    })
    document.addEventListener('click',function(event){
        if(!modal.contains(event.target)){
           modal.classList.remove('show')
       }
       if(btn.contains(event.target)){
          modal.classList.add('show')
    }
   })

    document.querySelector('.closebtn').addEventListener('click',()=>{
    viewbox.classList.add('hide')
})

