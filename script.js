const scriptURL = 'https://script.google.com/macros/s/AKfycbxUDoxb93fUNnI0dgyo3lYTO-UlyqLtaXkAzKoG20uV6x-8z9-tyeExtTtOuGfIU1aHmQ'
  const form = document.forms['submit-to-google-sheet']
  const msg=document.getElementById('msg')

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML="Thank you"
        setTimeout(function(){
            msg.innerHTML=""
        },5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })


$(document).ready(function(){

    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }

    });
var typed = new Typed(".typing", {
    strings: ["Developer"," Web Designer", "Freelance Photographer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

var typed = new Typed(".typing-2", {
    strings: ["Developer","Web Designer", "Freelance Photographer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

});
