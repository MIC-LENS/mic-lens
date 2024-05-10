function myMenuFunction(){
  var menuBtn = document.getElementById("NAV");
  if(menuBtn.className === "navbar"){
    menuBtn.className += " responsive";
  } else {
    menuBtn.className = "navbar";
  }
}

 
 
 const sr = ScrollReveal({
          origin: 'top',
          distance: '80px',
          duration: 2000,
          reset: true     
   })
  /* -- HOME -- */
  sr.reveal('.navbar',{delay: 300})
  sr.reveal('.logok',{delay: 300})
  sr.reveal('.content',{delay: 300})
  
  /* --SERVICES-- */
  const srLeft = ScrollReveal({
    origin: 'left',
    distance: '80px',
    duration: 2000,
    reset: true
  })
  srLeft.reveal('.section img',{interval: 200})
  srLeft.reveal('.p1',{interval: 200})
  srLeft.reveal('.p2',{interval: 200})
  srLeft.reveal('.p3',{interval: 200})
  srLeft.reveal('.V',{interval: 200})
  srLeft.reveal('.P',{interval: 200})
  srLeft.reveal('.M',{interval: 200})
  srLeft.reveal('.line1',{interval: 200})
  srLeft.reveal('.line2',{interval: 200})
  srLeft.reveal('.p2',{interval: 200})

  const srRight = ScrollReveal({
    origin: 'right',
    distance: '80px',
    duration: 2000,
    reset: true
  })
  srRight.reveal('.contact-form',{interval: 300})
  srRight.reveal('.firstf',{interval: 300})
  srRight.reveal('.secondf',{interval: 300})

 
