let showcase_mars = document.getElementById('S_mars')
let result_mars = document.getElementById('result_mars-1')
let result_mars_2 = document.getElementById('result_mars-2')



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
  //Mars title
  let mars = data.destinations[1].name;
  let mars_h1 = document.createElement('h1');
    mars_h1.innerHTML = mars;
  showcase_mars.appendChild(mars_h1);
  console.log(mars)

  //grabbing paragraph on mars object
  let mars_paragraph = data.destinations[1].description;
  let mars_p = document.createElement('p');
  mars_p.innerHTML = mars_paragraph;
  showcase_mars.appendChild(mars_p)

  //grabbing distance object on moon
  let mars_distance = data.destinations[1].distance;
  let mars_d = document.createElement('h2');
  mars_d.innerHTML = mars_distance;
  result_mars.appendChild(mars_d);

  //grabbing distance object on moon
  let mars_travel = data.destinations[1].travel;
  let mars_t = document.createElement('h2');
  mars_t.innerHTML = mars_travel;
  result_mars_2.appendChild(mars_t);
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