//moon items
let showcase = document.getElementById('showcase');
let result = document.getElementById('result-1')
let result_2 = document.getElementById('result-2')

//Mars Item
let showcase_mars = document.getElementById('S_mars')


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

//Moon function
function appendData(data) {
  //Moon title
  let moon = data.destinations[0].name;
  let h1 = document.createElement('h1');
    h1.innerHTML = moon;
  showcase.appendChild(h1);

  //grabbing paragraph on moon object
  let moon_paragraph = data.destinations[0].description;
  let moon_p = document.createElement('p');
  moon_p.innerHTML = moon_paragraph;
  showcase.appendChild(moon_p)

  //grabbing distance object on moon
  let moon_distance = data.destinations[0].distance;
  let moon_d = document.createElement('h2');
  moon_d.innerHTML = moon_distance;
  result.appendChild(moon_d);

  //grabbing distance object on moon
  let moon_travel = data.destinations[0].travel;
  let moon_t = document.createElement('h2');
  moon_t.innerHTML = moon_travel;
  result_2.appendChild(moon_t);
}

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










