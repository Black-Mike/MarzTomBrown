// Nav operability

let navList= document.querySelectorAll('li');
console.log(navList);

navList.forEach((nav)=>{
   nav.addEventListener(('click'),(e)=>{
    navList.forEach((nav)=>{nav.classList.remove('active')})
    nav.classList.toggle('active')
   })
})