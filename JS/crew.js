//for mobile navigation bar
let openBtn = document.getElementById('btn-open');
let closeBtn = document.getElementById('btn-close')
let mobileMenu = document.getElementById('mobile_menu');

//opening the mobile menu
openBtn.addEventListener('click', function(){
    mobileMenu.style.display = 'block'
});

//closing the mobile menu 
closeBtn.addEventListener('click', function(){
    mobileMenu.style.display = 'none'
});

//close the mobile menu when clicked outside
document.addEventListener('click', function(e){
  if(e.target != mobileMenu && e.target != openBtn){
      mobileMenu.style.display = 'none';
  }
})


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}


function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  let textCrew = document.getElementById('text')
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace("active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  
  //getting the data on json
  fetch('data.json')
 .then(function (response) {
    return response.json();
 })
 .then(function (data) {
    appendData(data);
 })
 .catch(function (err) {
    console.log('error: ' + err);
});
function appendData(data) {
  //Getting role of crew
  let role_crew = data.crew[n-1].role;
  let role_crew_h2 = document.createElement('h2');
    role_crew_h2.classList.add('header-person')
    role_crew_h2.innerHTML = role_crew;
    textCrew.prepend(role_crew_h2)
  // Getting name of crew
  let name_crew = data.crew[n-1].name;
  let name_crew_h2 = document.createElement('h2');
  name_crew_h2.classList.add('Title-strong')
  name_crew_h2.innerHTML = name_crew;
  textCrew.append(name_crew_h2)
  // Getting bio of crew
  let bio_crew = data.crew[n-1].bio;
  let bio_crew_h2 = document.createElement('div');
  bio_crew_h2.classList.add('title-paragraph')
  bio_crew_h2.innerHTML = bio_crew;
  textCrew.append(bio_crew_h2)
  //removing the last data that is not in the index of n
  
  }
  if(n-1 == 1){
    document.querySelector('.title-paragraph').remove('append')
    document.querySelector('.Title-strong').remove('append')
    document.querySelector('.header-person').remove('append')
  }
  else if(n-1 == 2){
    document.querySelector('.title-paragraph').remove('append')
    document.querySelector('.Title-strong').remove('append')
    document.querySelector('.header-person').remove('append')
  }
  else if(n-1 == n-1){
    document.querySelector('.title-paragraph').remove('append')
    document.querySelector('.Title-strong').remove('append')
    document.querySelector('.header-person').remove('append')
  }
  else if(n-1 == 3){
    document.querySelector('.title-paragraph').remove('append')
    document.querySelector('.Title-strong').remove('append')
    document.querySelector('.header-person').remove('append')
  }
  else if(n-1 == 4){
   document.querySelector('.title-paragraph').remove('append')
   document.querySelector('.Title-strong').remove('append')
   document.querySelector('.header-person').remove('append')
 }
}


