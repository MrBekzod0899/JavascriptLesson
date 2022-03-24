let xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
xhr.send();

let div = document.createElement("div");
let contact=document.querySelector('.contact')
div.classList.add("user");
xhr.onload = function () {
  if (xhr.status !== 200) {
    console.log(`nimadir xato ketdi ${xhr}`);
  } else {
    let res = JSON.parse(xhr.response);
    res.forEach((item) => {
      contact.innerHTML += `
            <div class='user'>
               <div class="userTitle">
               <h4>${item.name}</h4>
             </div>
             <h4>User Information</h4>
             <div class="userInfo">
               <div class="username">
                 <label>username</label>
                 <span>${item.username}</span>
               </div>
               <div class="userEmail">
                   <label>email</label>
                   <a href="mailto:${item.email}" target="_blank"
                     >${item.email}</a
                   >
               </div>
             </div>
             <h4>Address</h4>
             <address>
                 <div class="left">
                     <label>Street</label>
                     <span>${item.address.street}</span>
                     <label>Suite</label>
                     <span>${item.address.suite}</span>
                 </div>
                 <div class="right">
                     <label>City</label>
                     <span>${item.address.city}</span>
                     <label>zipcode</label>
                     <span>${item.address.zipcode}</span>
                 </div>
             </address>
             <h4>Contact</h4>
             <div class="contactInfo">
               <div class="phone">
                 <label>phone</label>
                 <a href="tel:${item.phone}" target="_blank">${item.phone}</a>
               </div>
               <div class="website">
                 <label>website</label>
                 <a href="${item.website}">${item.website}}</a>
               </div>
             </div>
             <h4>Office</h4>
             <div class="workplace">
               <label> Company name </label>
               <p>${item.company.name}</p>
               <label for="">catchPhrasse</label>
               <p>${item.company.catchPhrase}</p>
               <label>bs</label>
               <p>${item.company.bs}</p>
             </div>
             </div>
         `;
    });

  }
};
